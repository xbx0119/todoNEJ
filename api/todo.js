var express = require('express');
var router = express.Router();
var Todo = require('../models/todoModel');

const getTodo = async function (req, res, next) {
    try {
        let list = await Todo.findOne(req.params.id);
        res.send(list);
    }catch(err) {
        res.send()
    }
}

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
    try {
        if (await Todo.del(req.params.id)) {
            res.send(true);
        } else {
            res.send()
        }
    } catch (err) {
        res.send()
    }
}

const edit = async function (req, res, next) {
    const item = {
        title: req.body.title,
        content: req.body.content
    }
    try {
        if (await Todo.edit(req.params.id, item)) {
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
    router.get('/api/todo/:id', getTodo);
    router.get('/api/todo_all', getAll);
    router.get('/api/todo_undo', getUndo);
    router.get('/api/todo_done', getDone);

    // 增加todo项
    router.post('/api/todo', add);
    // 删除todo项
    router.delete('/api/todo/:id', del);
    // 修改todo项
    router.put('/api/todo/:id', edit);
}