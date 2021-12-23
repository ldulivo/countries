"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_routes_1 = __importDefault(require("../routes/api_routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Initials methods
        this.middlewares();
        // Define routes
        this.routers();
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Body reading
        this.app.use(express_1.default.json());
        // Public folder
        this.app.use(express_1.default.static('public'));
    }
    routers() {
        this.app.use('/api', api_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running on port: ', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map