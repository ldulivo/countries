"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const loadFile = (file) => {
    if (!fs_1.default.existsSync(file)) {
        return;
    }
    const info = fs_1.default.readFileSync(file, { encoding: 'utf-8' });
    if (info === "[]" || info === "")
        return;
    const data = JSON.parse(info);
    return data;
};
exports.default = loadFile;
//# sourceMappingURL=db_connect.js.map