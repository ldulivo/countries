"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CountryModels {
    constructor() {
        this.country = [];
    }
    checkObjName(obj, name, country) {
        switch (obj) {
            case 'countryName':
                if (name.toLowerCase() === country.countryName.toLowerCase())
                    return true;
                break;
            case 'continentName':
                if (name.toLowerCase() === country.continentName.toLowerCase())
                    return true;
                break;
            default:
                return true;
                break;
        }
    }
    created(countries, obj = 'countryName', name = false, countryFind = false) {
        countries.country.map((country) => {
            if (name) {
                if (name.toLowerCase() === country.continentName.toLowerCase()) {
                    if (countryFind) {
                        if (country.countryName.includes(countryFind)) {
                            this.addCountry(country);
                        }
                    }
                    else {
                        this.addCountry(country);
                    }
                }
            }
            else {
                if (countryFind) {
                    if (country.countryName.includes(countryFind)) {
                        this.addCountry(country);
                    }
                }
                else {
                    this.addCountry(country);
                }
            }
        });
    }
    addCountry(country) {
        this.country.push({
            "countryCode": country.countryCode,
            "countryName": country.countryName,
            "currencyCode": country.currencyCode,
            "population": country.population,
            "fipsCode": country.fipsCode,
            "isoNumeric": country.isoNumeric,
            "capital": country.capital,
            "continentName": country.continentName,
            "continent": country.continent,
            "areaInSqKm": country.areaInSqKm,
            "languages": country.languages,
            "isoAlpha3": country.isoAlpha3,
            "geonameId": country.geonameId,
        });
    }
    orderBy(obj = 'countryName') {
        let aux = this.country.sort(function (x, y) {
            switch (obj) {
                case 'countryCode':
                    return x.countryCode.localeCompare(y.countryCode);
                    break;
                case 'countryName':
                    return x.countryName.localeCompare(y.countryName);
                    break;
                case 'currencyCode':
                    return x.currencyCode.localeCompare(y.currencyCode);
                    break;
                case 'population':
                    if (parseInt(x.population) < parseInt(y.population)) {
                        return -1;
                    }
                    if (parseInt(x.population) > parseInt(y.population)) {
                        return 1;
                    }
                    return 0;
                    break;
                case 'fipsCode':
                    return x.fipsCode.localeCompare(y.fipsCode);
                    break;
                case 'isoNumeric':
                    if (parseInt(x.isoNumeric) < parseInt(y.isoNumeric)) {
                        return -1;
                    }
                    if (parseInt(x.isoNumeric) > parseInt(y.isoNumeric)) {
                        return 1;
                    }
                    return 0;
                    break;
                case 'capital':
                    return x.capital.localeCompare(y.capital);
                    break;
                case 'continentName':
                    return x.continentName.localeCompare(y.continentName);
                    break;
                case 'continent':
                    return x.continent.localeCompare(y.continent);
                    break;
                case 'areaInSqKm':
                    if (parseInt(x.areaInSqKm) < parseInt(y.areaInSqKm)) {
                        return -1;
                    }
                    if (parseInt(x.areaInSqKm) > parseInt(y.areaInSqKm)) {
                        return 1;
                    }
                    return 0;
                    break;
                case 'languages':
                    return x.languages.localeCompare(y.languages);
                    break;
                case 'isoAlpha3':
                    return x.isoAlpha3.localeCompare(y.isoAlpha3);
                    break;
                case 'geonameId':
                    if (parseInt(x.geonameId) < parseInt(y.geonameId)) {
                        return -1;
                    }
                    if (parseInt(x.geonameId) > parseInt(y.geonameId)) {
                        return 1;
                    }
                    return 0;
                    break;
                default:
                    return x.countryName.localeCompare(y.countryName);
                    break;
            }
        });
        this.country = aux;
    }
    firstChar(char) {
        let aux = [];
        this.country.map(e => {
            if (char.toLowerCase() === e.countryName.toLowerCase().charAt(0)) {
                aux.push(e);
            }
        });
        this.country = aux;
    }
    data() {
        return this.country;
    }
}
exports.default = CountryModels;
//# sourceMappingURL=country_models.js.map