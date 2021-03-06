# Snake game project created during learning Typescript

### Run the project:
```
npm i

npm run build

npm run start
```
### Start to build a Typescript project with webpack

1. Create default package.json
```
npm init --y
```
2. Install Dependencies
```
npm i -D typescript ts-loader wepack-cli webpack html-webpack-plugin clean-webpack-plugin webpack-dev-server
```
3. Add build script in package.json
```
    "scripts": {
        "build": "webpack --mode development",
        "start": "webpack serve --mode development --open"
    },
```
4. Create tsconfig.json at the root of the project

5. Create webpack.config.js
    - add the following items
    ```
    devtool:'inline-source-map'
    mode: 'development',
    const HTMLWebpackPlugin = require('html-webpack-plugin');
    const {CleanWebpackPlugin} = require('clean-webpack-plugin');
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
    ```
6. Create a index.ts and index.html in src folder

7. run the project, It will create dist folder with library bundle and index.html.


### Add style in the project (use less in this project)

1. install the below items:
```
npm i  -D style-loader css-loader less less-loader
```

2. Add below into webpack.config.js
```
module: {
    rules: [
      {
        test: /\.less$/,
        use: [
                "style-loader",
                "css-loader",
                "less-loader"
            ]
        }
    ],
  },
```
3. Add plugins into webpack.config.js
```
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
    }),
```

Reference:\
    https://webpack.js.org/guides/typescript/ \
    https://www.youtube.com/playlist?list=PLmOn9nNkQxJGwOhSsQ5H9JTPmiXGmy8Zw