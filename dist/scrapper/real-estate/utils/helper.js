"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cities = exports.propertTypes = exports.makeZameenUrl = exports.getZameenExtractedPropertyType = exports.getZameenExtractedType = exports.getZameenExtractedCityName = void 0;
const url_helper_enums_1 = require("./url-helper-enums");
const getZameenExtractedCityName = (_city) => {
    const cityName = _city.split('-')[0];
    return cityName.toLowerCase();
};
exports.getZameenExtractedCityName = getZameenExtractedCityName;
const getZameenExtractedType = (_type) => {
    let type = _type === "Rentals" ? "rent" :
        _type === "Rentals_Plots" ? "rent" :
            _type === "Rentals_Commercial" ? "rent" :
                _type === "Homes" ? "buy" :
                    _type === "Plots" ? "buy" :
                        _type === "Commercial" ? "buy" :
                            "";
    return type;
};
exports.getZameenExtractedType = getZameenExtractedType;
const getZameenExtractedPropertyType = (_propertType) => {
    let propertyType = _propertType === "Rentals" ? "home" :
        _propertType === "Rentals_Plots" ? "plots" :
            _propertType === "Rentals_Commercial" ? "commercial" :
                _propertType === "Homes" ? "homes" :
                    _propertType === "Plots" ? "plots" :
                        _propertType === "Commercial" ? "commercial" :
                            "";
    return propertyType;
};
exports.getZameenExtractedPropertyType = getZameenExtractedPropertyType;
const makeZameenUrl = (_proptyType, _city, _page) => {
    const url = `https://www.zameen.com/${_proptyType}/${_city}-${_page}.html?sort=date_desc`;
    return url;
};
exports.makeZameenUrl = makeZameenUrl;
exports.propertTypes = [
    url_helper_enums_1.zameenPropertyTypeRent.Home,
    url_helper_enums_1.zameenPropertyTypeRent.Plots,
    url_helper_enums_1.zameenPropertyTypeRent.Commercial,
    url_helper_enums_1.zameenPropertyTypeBuy.Home,
    url_helper_enums_1.zameenPropertyTypeBuy.Plots,
    url_helper_enums_1.zameenPropertyTypeBuy.Commercial,
];
exports.cities = [
    url_helper_enums_1.zameenCityUrlEnum.Islamabad,
    url_helper_enums_1.zameenCityUrlEnum.Karachi,
    url_helper_enums_1.zameenCityUrlEnum.Lahore,
    url_helper_enums_1.zameenCityUrlEnum.Rawalpindi,
    url_helper_enums_1.zameenCityUrlEnum.Abbottabad,
    url_helper_enums_1.zameenCityUrlEnum.Bahawalpur,
    url_helper_enums_1.zameenCityUrlEnum.Faisalabad,
    url_helper_enums_1.zameenCityUrlEnum.Gujranwala,
    url_helper_enums_1.zameenCityUrlEnum.Gujrat,
    url_helper_enums_1.zameenCityUrlEnum.Hyderabad,
    url_helper_enums_1.zameenCityUrlEnum.Jhelum,
    url_helper_enums_1.zameenCityUrlEnum.Multan,
    url_helper_enums_1.zameenCityUrlEnum.Murree,
    url_helper_enums_1.zameenCityUrlEnum.Peshawar,
    url_helper_enums_1.zameenCityUrlEnum.Sargodha,
    url_helper_enums_1.zameenCityUrlEnum.Sialkot,
    url_helper_enums_1.zameenCityUrlEnum.Wah
];
