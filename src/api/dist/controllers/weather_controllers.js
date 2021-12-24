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
exports.gteInfo = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const gteInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { country } = req.params;
    const dataCountry = yield countryMapBox(country);
    const data = yield countryData(dataCountry[0].lat, dataCountry[0].lng);
    res.json(data);
});
exports.gteInfo = gteInfo;
const countryMapBox = (myCountry) => __awaiter(void 0, void 0, void 0, function* () {
    /**
     * get the weather
     */
    const paramsMapbox = {
        'access_token': process.env.MAPBOX_KEY,
        'limit': 1,
        'language': 'en'
    };
    try {
        const instance = axios_1.default.create({
            baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${myCountry}.json`,
            params: paramsMapbox
        });
        const resp = yield instance.get();
        return resp.data.features.map((lugar) => ({
            id: lugar.id,
            nombre: lugar.place_name,
            lng: lugar.center[0],
            lat: lugar.center[1]
        }));
    }
    catch (error) {
        return [];
    }
});
const countryData = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = {
            lat,
            lon,
            'appid': process.env.OPENWEATHER_KEY,
            'lang': 'en',
            'units': 'metric'
        };
        const instance = axios_1.default.create({
            baseURL: `https://api.openweathermap.org/data/2.5/weather`,
            params
        });
        const resp = yield instance.get();
        return {
            desc: resp.data.weather[0].description,
            min: resp.data.main.temp_min,
            max: resp.data.main.temp_max,
            temp: resp.data.main.temp,
            lat,
            lon
        };
    }
    catch (error) {
        //console.log(error);
    }
});
//# sourceMappingURL=weather_controllers.js.map