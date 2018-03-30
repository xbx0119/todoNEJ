var mongoose = require('mongoose');
var Schemas = require('./schemas');
var Todo = mongoose.model('todo', Schemas.todoSchema);

var TodoModel = {};


TodoModel.findOne = async function (id) {
    try {
        var list = await Todo.find({
            _id: id
        });
        if (list) {
            return list;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

TodoModel.findAll = async function () {
    try {
        var list = await Todo.find({}).sort({ "_id": -1 });
        if (list) {
            return list;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

TodoModel.findUndo = async function () {
    try {
        var list = await Todo.find({
            flag: 0
        }).sort({ "_id": -1 });
        if (list) {
            return list;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

TodoModel.findDone = async function () {
    try {
        var list = await Todo.find({
            flag: 1
        }).sort({ "_id": -1 });
        if (list) {
            return list;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}


TodoModel.add = async function (data) {
    try {
        var item = await Todo.create(data);
        if (item) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

TodoModel.edit = async function (id, data) {
    try {
        var item = await Todo.update({
            _id: id
        }, data);
        if (item) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

TodoModel.del = async function (id) {
    console.log("remove " + id)
    try {
        var item = await Todo.remove({
            _id: id
        });
        if (item) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
}

module.exports = TodoModel;