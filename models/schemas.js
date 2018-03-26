var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// todo
var todoSchema = new Schema({
    id: Number,
    title: String,
    content: String,
    done: Boolean // false 未完成 true 已完成
});
exports.todoSchema = todoSchema;

