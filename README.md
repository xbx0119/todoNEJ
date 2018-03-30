# todoNEJ
a Todo List App based on NEJ  

演示地址：norma0119.cn:3000  
页面主要面向移动端，未对pc端做调优，请使用手机访问或将pc浏览器调整到手机设备模式  


## 仓库分支说明
* master
* use-nej-module: 使用nej的模块化，开发中


## 功能描述
* 查看todo项
* 增加todo项
* 删除todo项
* 修改todo项

待开发功能：
* 搜索框搜索
* 勾选完成


## 数据库说明
* 采用MongoDB数据库
* Todo表的内容
    * _id: MongoDB自动为新建的记录添加的唯一id值
    * title: todo标题, String
    * content: todo的内容, String
    * done: todo项是否完成, Boolean


## api列表
1. GET /api/todo_all 
    * 获取所有todo列表
    * 参数： 无
2. GET /api/todo_undo 
    * 获取未完成的todo
    * 参数： 无
3. GET /api/todo_done 
    * 获取已完成的todo
    * 参数： 无
4. POST /api/todo 
    * 添加新的todo
    * 参数 
        * title: String, todo的标题, 
        * content: String, todo的内容 
5. PUT /api/todo/:id
    * 更新todo
    * 参数 
        * todo: Object, 新的todo的对象
6. DELETE /api/todp/:id 
    * 删除todo
    * 参数：无