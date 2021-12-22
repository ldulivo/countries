"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_controllers_1 = require("../controllers/api_controllers");
const router = (0, express_1.Router)();
router.get('/', api_controllers_1.getAll);
router.get('/continent/:continent', api_controllers_1.getContinent);
exports.default = router;
//# sourceMappingURL=api_routes.js.map