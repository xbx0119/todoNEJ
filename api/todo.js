var express = require('express');
var router = express.Router();
var Todo = require('../models/todoModel');

const getAll = async function (req, res, next) {
    try {
        let list = await Todo.findAll();
        res.send(list);
    }catch(err) {
        res.send()
    }
}

const getUndo = async function (req, res, next) {
    try {
        let list = await Todo.findUndo();
        res.send(list);
    } catch (err) {
        res.send()
    }
}

const getDone = async function (req, res, next) {
    try {
        let list = await Todo.findDone();
        res.send(list);
    } catch (err) {
        res.send()
    }
}

const add = async function (req, res, next) {
    const item = {
        title: req.body.title,
        content: req.body.content,
        done: false
    }
    try {
        if(await Todo.add(item)) {
            res.send(true);
        }else {
            res.send()
        }
    } catch (err) {
        res.send()
    }
}

const del = async function (req, res, next) {
    const item = {
        title: req.body.title,
        content: req.body.content,
        done: false
    }
    try {
        if (await Todo.del(req.body.id, item)) {
            res.send(true);
        } else {
            res.send()
        }
    } catch (err) {
        res.send()
    }
}

const edit = async function (req, res, next) {
    try {
        if (await Todo.edit(req.body.id, item)) {
            res.send(true);
        } else {
            res.send()
        }
        res.send("edit");
    } catch (err) {
        res.send()
    }
}


exports.regist = function(router) {
    router.get('/api/todo_all', getAll);
    router.get('/api/todo_undo', getUndo);
    router.get('/api/todo_done', getDone);

    // 增加todo项
    router.post('/api/todo', add);
    // 删除todo项
    router.delete('/api/todo', del);
    // 修改todo项
    router.put('/api/todo', edit);
}