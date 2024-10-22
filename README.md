## 打包流程

- 激活打包命令

```
 chmod +x patch.sh
```

- 打版本补丁

```
 ./patch.sh
```

- 打包库

```
  npm run build
```

- 发布库

```
 npm run publish:lib
```

- 最终打包结果只包含/application/\*, 排除了所有其他开发环境的代码，详情查看 package.json

```
 "include": [
    "src/application/**/*"
  ],
  "exclude": [
    "node_modules",
    "src/main.tsx",
    "src/Preview.tsx",
    "type.d.ts",
    "vite-env.d.ts"
  ],
```
