# charts
> descrpition : a very simple charts  for calorier webview part

- `TODO`
    - [x] 完成路由部分
    - [x] 添加404等界面
    - [ ] 添加页面跳转
    - [x] 利用mock.js进行测试
    - [ ] 添加权限控制（maybe）
    - [ ] 添加总历史界面
    - [ ] year\daily等界面存在bug

 
## 文件结构
```python
D:.
│  App.vue 
│  main.js
│
├─api #api接口部分，调用axios实例调用api
│      data.js
│
├─assets #放置png等文件
│      logo.png
│
├─components #图表组件
│      area-chart.vue
│      histogram-chart.vue
│      pie-chart.vue
│
├─config #创建axios实例
│      httpConfig.js
│
├─pages #页面
│  │  daily.vue
│  │  month.vue
│  │  year.vue
│  │
│  ├─errorPage
│  │      404.vue
│  │
│  └─home
│          index.vue
│
└─router #路由配置
        dynamic-router.js
        router.js
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


