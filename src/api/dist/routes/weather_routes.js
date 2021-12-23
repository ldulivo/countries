"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weather_controllers_1 = require("../controllers/weather_controllers");
const router = (0, express_1.Router)();
router.get('/:country', weather_controllers_1.gteInfo);
exports.default = router;
//# sourceMappingURL=weather_routes.js.map