# ios-app-with-react-native
## 前言
如果你正准备从头开始制作一个新的应用，那么React Native会是个非常好的选择。但如果你只想给现有的原生应用中添加一两个视图或是业务流程，`React Native`也同样不在话下。只需简单几步，你就可以给原有应用加上新的基于`React Native`的特性、画面和视图等。

## 开发环境准备
### 基础环境搭建
基础环境包括Node和React Native的安装，这里省略。

### 安装依赖包
集成React Native需要`React`和`React Native`的node模块，
我们把具体的依赖包记录在`package.json`文件中。
现在在项目根目录下使用`npm  init`或`npm init -y`命令创建`package.json`文件，然后使用npm（node包管理器，Node package manager）来安装React和React Native模块。

下面是我的`package.json`文件
```
{
  "name": "FirstReactNative",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest"
  },
  "dependencies": {
    "react": "15.3.2",
    "react-native": "^0.37.0"
  },
  "jest": {
    "preset": "jest-react-native"
  },
  "devDependencies": {
    "babel-jest": "17.0.2",
    "babel-preset-react-native": "1.9.0",
    "jest": "17.0.2",
    "jest-react-native": "17.0.2",
    "react-test-renderer": "15.3.2"
  }
}
```
然后在项目根目录（也就是package.json文件所在的目录）下执行
```
npm install
```
`nmp`就会将我们需要的React和React Native模块安装到`node_modules/` 目录下。
### 安装React Native框架
React Native框架自身也是作为node模块安装到项目中的。我这里使用`CocoaPods`将 `React Native`框架集成到我们的iOS项目中。
如果你还没有创建iOS工程，现在可以在项目根目录下创建了（我一般习惯将iOS工程放到项目根目录的ios目录下）。
#### Subspecs
在开始把React Native植入到你的应用中之前，首先要决定具体整合的是React Native框架中的哪些部分。而这就是subspec要做的工作。在创建`Podfile`文件的时候，就需要指定具体安装哪些React Native的依赖库。所指定的每一个库就都称为一个`subspect`。
在我们用`npm`将React和React Native模块安装到`node_modules/` 目录下后就可以创建`Podfile`文件了，进入iOS工程目录（.xcodeproj文件所在的目录）下，使用CocoaPods创建`Podfile`文件：
```
pod init
```
编辑`Podfile`文件，加入以下内容:
```
pod 'React', :path => '../node_modules/react-native', :subspecs => [
    'Core',
    'RCTText',
    'RCTNetwork',
    'RCTWebSocket', # needed for debugging
    # Add any other subspecs you want to use in your project
  ]
 ```
 **注**：上面`path`路径要根据你的目录结构正确填写，因为我的`node_modules`目录在`Podfile`文件所在目录的上一级目录下。
 创建好了`Podfile`后，就可以开始安装React Native pod了。
 ```
 pod install
 ```
 ## 代码集成
 
 