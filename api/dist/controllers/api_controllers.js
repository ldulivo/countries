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
exports.getContinent = exports.getAll = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const db_connect_1 = __importDefault(require("../bin/db_connect"));
const country_models_1 = __importDefault(require("../models/country_models"));
dotenv_1.default.config();
const file = process.env.DB_FILE;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fileData = yield (0, db_connect_1.default)(file);
    const countryModel = new country_models_1.default;
    let { countryFind, orderBy = "countryName", firstChar = false } = req.query;
    countryModel.created(fileData.countries, 'all', false, countryFind);
    countryModel.orderBy(String(orderBy));
    if (firstChar) {
        countryModel.firstChar(String(firstChar));
    }
    const data = countryModel.data();
    /* res.json({
        data
    }) */
    res.status(200).send(data);
});
exports.getAll = getAll;
const getContinent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fileData = yield (0, db_connect_1.default)(file);
    const countryModel = new country_models_1.default;
    let { continent } = req.params;
    let { countryFind, orderBy = "countryName", firstChar = false } = req.query;
    continent = continent.toLowerCase();
    countryModel.created(fileData.countries, 'continentName', continent, countryFind);
    countryModel.orderBy(String(orderBy));
    if (firstChar) {
        countryModel.firstChar(String(firstChar));
    }
    const data = countryModel.data();
    /* res.json({
        data
    }) */
    res.status(200).send(data);
});
exports.getContinent = getContinent;
//# sourceMappingURL=api_controllers.js.map