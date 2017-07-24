<p align="center">
  <a href="http://ant.design">
    <img width="320" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg">
  </a>
</p>

# et-js-boilerplate JS 样板 or 脚手架

[![npm package](https://img.shields.io/npm/v/et-js-boilerplate.svg?style=flat-square)](https://www.npmjs.org/package/et-js-boilerplate)
[![NPM downloads](https://img.shields.io/npm/dm/et-js-boilerplate.svg?style=flat-square)](https://npmjs.org/package/et-js-boilerplate)

A personal or common proj initial proto with gulp、Webpack to bundle ES6, etc & use scripts to do build tasks


## 安装 Installation
Install it once globally:
```sh
npm install -g et-js-boilerplate
```

<br />

## 用法 Usage 
To create a new project, run:
```sh
et-js-boilerplate [options] <folder>
```

<br />

## 部署 Deploy

```sh
# yarn 与 8.x.x 版本的 npm 之间有冲突还是怎的

# or
npm i

# then important! 因为必须执行 prebuild 脚本
npm run build

# final
该干嘛干嘛，看看 js、css 生效否
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

## 文件结构 File Structure
```
root
│  
├── dist (for output)
│   │  
│   ├── css
│   ├── img (hashed or just dir link)
│   └── js (bundle、uglify)
├── scripts (for build 构建时使用的脚本)
├── src
│   │  
│   ├── components
│   ├── img
│   ├── js
│   ├── sass
│   └── views (html or tpl)
├── .babelrc
├── .editorconfig
├── .gitignore
├── .nvmrc
├── gulpfile.js
├── package.json
├── package-lock.json (Don't simply use yarn.lock in npm 8)
├── README.md
└── webpack.config.js (you can make a new webpack dir & custom by yourself)
```