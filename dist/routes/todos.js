"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
// Hack because of weird error on Express type deifinitions
const router = new express_1.Router();
router.post('/', todos_1.createTodo);
router.get('/', todos_1.getTodos);
router.patch('/:id');
router.delete('/:id');
exports.default = router;
