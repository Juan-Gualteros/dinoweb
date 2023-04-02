"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsController = void 0;
const database_1 = __importDefault(require("../database"));
class authorsControllers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const authors = yield database_1.default.query('SELECT * FROM authors');
            res.json(authors);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const authors = yield database_1.default.query('SELECT * FROM authors WHERE author_id = ?', [id]);
            if (authors.length > 0) {
                return res.json(authors[0]);
            }
            res.status(404).json({ text: "'The author does't exist" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE authors set ? WHERE author_id = ?', [req.body, id]);
            res.json({ message: 'The author was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM authros WHERE author_id = ?', [id]);
            res.json({ text: 'The author was deleted ' });
        });
    }
}
exports.AuthorsController = new authorsControllers();
