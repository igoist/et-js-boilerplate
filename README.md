<p align="center">
  <a href="https://www.npmjs.com/package/et-js-boilerplate">
    <!-- <img width="320" alt="🔨" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"> -->
    <span style="font-size: 320px;">🔨</span>
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
# first step, create the boilerplate. If you want to install packages automatically, please add -i
et-js-boilerplate [options] <project-directory>

# next, cd into boilerplate's dir, excute npm init to customize your package.json
cd <project-directory> && npm init
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
该干嘛干嘛，看看 js、css 生效否，具体是否要配合 server，以及怎么配合这种简单而又复杂的事不要来问我！
```

<br />

## 开发 Development
```sh
# 临时 js、scss 分开编译

# js 部分，运行下面命令，通过 webpack 监听 js 改动，进行增量编译（webpack --watch 也是在内存中还是直接被编译到 dist？）
# 之后会做相应变动，使得运行一个命令，自动监听 js 与 scss
# 另外，新增页面的 js 入口文件需要更新到 webpack.config.js 的 entry 当中
npm run start

# or
npm run dev
# just pick one you like

```

<br />

## 文件结构 File Structure
```
root
│  
├── dist (for output)
│   │  
│   ├── css
│   ├── img (hashed or just dir link)
│   ├── ....bundle.min.js
│   └── index.bundle.min.js
├── scripts (for build 构建时使用的脚本)
├── src
│   │  
│   ├── components
│   ├── img
│   ├── js
│   ├── sass
│   ├── views (其下每个目录中不需要多余的 html，都以 index.js 为入口，使用了统一模版，举例如下，具体自己去看)
│       └── dragAndDrop (与 chunk 名称对应)
│           ├── ...
│           └── index.js (根据该文件生成 chunk)
├── .babelrc
├── .editorconfig
├── .gitignore
├── .nvmrc
├── gulpfile.js
├── package.json
├── package-lock.json (Don't simply use yarn.lock in npm^8, or your can delete this one)
├── README.md
└── webpack.config.js (you can make a new webpack dir & customize by yourself)
```
