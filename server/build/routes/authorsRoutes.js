"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authorsController_1 = require("../controllers/authorsController");
class authors {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', authorsController_1.AuthorsController.list);
        this.router.get('/:id', authorsController_1.AuthorsController.getOne);
        this.router.put('/:id', authorsController_1.AuthorsController.update);
        this.router.delete('/:id', authorsController_1.AuthorsController.delete);
    }
}
const Authors = new authors();
exports.default = Authors.router;
