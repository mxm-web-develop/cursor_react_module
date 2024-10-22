#!/bin/bash

# 检查是否有未跟踪的文件或未提交的更改
if [[ -n $(git status --porcelain) ]]; then
  echo "有未提交的更改，准备提交..."
  
  # 添加所有更改
  git add .
  
  # 提交更改
  git commit -m 'patch version'
  
  echo "提交完成，准备更新版本..."
fi

# 执行版本更新
npm version patch