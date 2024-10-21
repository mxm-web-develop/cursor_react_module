const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs-extra");
const path = require("path");
const TurndownService = require("turndown"); // 引入 turndown
const ProgressBar = require("progress"); // 引入进度条库

// 读取配置文件
const config = require("./config.json");

const { scraper } = config;

// 创建 Turndown 实例
const turndownService = new TurndownService();

// 创建进度条实例
let bar;

// 创建 Axios 实例
const axiosInstance = axios.create();

// 封装请求函数，添加重试逻辑
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      if (i < retries - 1) {
        console.log(`请求失败，正在重试 (${i + 1}/${retries})...`);
      } else {
        throw error; // 超过重试次数，抛出错误
      }
    }
  }
}

async function scrapePages() {
  // 遍历 scraper 对象中的所有配置
  for (const key in scraper) {
    const { entry_element, output, pages } = scraper[key];

    // 创建进度条
    bar = new ProgressBar("正在抓取 [:bar] :percent :etas", {
      total: pages.length,
      width: 100,
      complete: "=",
      incomplete: " ",
    });

    for (const page of pages) {
      let url, name, entry, module;

      if (typeof page === "object") {
        url = page.url;
        name = page.name;
        entry = page.entry || entry_element;
        module = page.module;
      } else {
        url = page;
        name = path.basename(page).replace(".html", "");
        entry = entry_element;
      }

      await scrapePage(url, name, entry, module, output);
      bar.tick(); // 更新进度条
    }
  }
}

async function scrapePage(url, name, entry, module, output) {
  try {
    const data = await fetchWithRetry(url); // 使用带重试的请求
    const $ = cheerio.load(data);

    // 获取指定元素的内容
    const content = $(entry).html();

    // 检查 content 是否有效
    if (!content) {
      console.error(`未找到指定元素 (${entry}) 的内容: ${url}`);
      return;
    }

    // 创建输出目录
    const outputDir = module
      ? path.join(__dirname, output, module)
      : path.join(__dirname, output);
    await fs.ensureDir(outputDir);

    // 输出文件路径
    const outputFilePath = path.join(outputDir, `${name}.md`);

    // 将内容写入 Markdown 文件
    const markdownContent = convertHtmlToMarkdown(content);
    await fs.writeFile(outputFilePath, markdownContent);

    // console.log(`已抓取并保存: ${outputFilePath}`);
  } catch (error) {
    console.error(`抓取失败 (${url}):`, error.message);
  }
}

function convertHtmlToMarkdown(html) {
  // 使用 turndown 将 HTML 转换为 Markdown
  return turndownService.turndown(html);
}

scrapePages();
