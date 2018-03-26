# todoNEJ
a Todo List App based on NEJ  
网易校招入职考核作业


## 功能描述


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
5. PUT /api/todo 
    * 更新todo
    * 参数 
        * id: Number, 需要修改的todo的id
        * todo: Object, 新的todo的对象
6. DELETE /api/todp 
    * 删除todo
    * 参数
        * id：Number, 需要删除的todo的id值 