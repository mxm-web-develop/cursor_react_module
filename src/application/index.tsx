import './style.css'
export default function MxMweb() {
  return (
    <div className={`flex flex-col justify-center items-center w-screen h-screen
     transition-colors duration-300 bg-white text-black}`}>
      <h1 className="text-5xl font-bold mb-4">欢迎来到我的应用</h1>
      <p className="text-lg mb-8">这是一个使用 Tailwind CSS 构建的全屏首页示例。</p>
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded bg-blue-500 text-white}`}
        >
          浅色按钮
        </button>
        <button
          className={`px-4 py-2 rounded 'bg-blue-500 text-white}`}
        >
          深色主题
        </button>
      </div>
    </div>
  )
}
