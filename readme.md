# Render JSX without react (... or almost)

## Step 1: Setting up the project

### Step 1.1: Folder structure

```
+ app
|📂 dist
|📂 public
|⎿ index.html
|⎿ index.css
|📂 src
|⎿ jsx-pragma.tsx
|⎿ components.tsx
|- package.json
|- webpack.config.json
|- tsconfig.json
```

### Step 1.2: Install dependencies
```
> npm init
> npm i -D typescript
> npm i -D webpack webpack-cli webpack-dev-server
> npm i -D @babel/cli @babel/core @babel/preset-env "@babel/preset-typescript @babel/preset-react babel-loader
> npm i -D copy-webpack-plugin html-webpack-plugin
```

### Step 1.3: Init Typescript
```
tsc --init

> cat tsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "moduleResolution": "node",
    "outDir": "dist",
    "sourceMap": true,
    "jsx": "preserve",  --> tsc will not transform jsx and let webpack/babel take care of it
  }
}
```

### Step 1.4: Configure Webpack
```
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { transpileJSX } = require('./src/jsx-pragma');

module.exports = {
  entry: './index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',  --> replaces ts-loader
                '@babel/preset-env',
                '@babel/preset-react'        --> takes care of jsx transpilation
              ]
            },
          }
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx','.ts','.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port:9000,
    compress:false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      minify:false,
      inject:false
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/index.css', to: 'index.css' }
      ]
    })
  ]
}

```

### 1.5: Define custom Babel JSX pragma
```
const add = (parent, child) => {
  parent.appendChild(child?.nodeType ? child : document.createTextNode(child));
};

const appendChild = (parent, child) => {
  if (Array.isArray(child)) {
    child.forEach((nestedChild) => appendChild(parent, nestedChild));
  } else {
    add(parent, child);
  }
};

export const transpileJSX = (type,props,...children:Array<HTMLElement>) => {
  console.log(type,props,children);
  console.log(typeof(type)); 
  let elem:any;
  if (typeof type === 'function'){
    elem = new type(props,children);
    return elem.render();
  } else if (typeof type === 'string'){
    elem = document.createElement(type);
  }

  // add props
  if (props){
    for (let key in props){
      if (key.substring(0,2) !== "on"){
        elem.setAttribute(key,props[key]);
      } else {  
        elem.addEventListener(key.substring(2).toLowerCase(),props[key]);  --> onSomeEventHandlerX should be lower case
      }
    }
  }

  // add children
  appendChild(elem,children);
  return elem;
}

export const jsx = transpileJSX;
```