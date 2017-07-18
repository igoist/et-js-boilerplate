# et-js-boilerplate JS 样板 or 脚手架

## 部署 Deploy

```sh
yarn（推荐）

# or
npm i

# then important! 因为必须执行 prebuild 脚本
npm run build

# final
改干嘛干嘛，看看 js、css 生效否
```

<br />

## 开发 Development
```sh
# 临时 js、scss 分开编译

# js 部分，运行下面命令，通过 webpack 监听 js 改动，进行增量编译（webpack --watch 也是在内存中还是直接被编译到 dist？）
# 之后会做相应变动，使得运行一个命令，自动监听 js 与 scss
# 另外，新增页面的 js 入口文件需要更新到 webpack.config.js 的 entry 当中
npm run dev

```