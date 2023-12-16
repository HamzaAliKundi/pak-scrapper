import { zameenPropertyTypeRent, zameenPropertyTypeBuy, zameenCityUrlEnum } from '../utils/url-helper-enums';

export const getZameenExtractedCityName = (_city: string) => {
    const cityName = _city.split('-')[0]
    return cityName.toLowerCase();
}

export const getZameenExtractedType = (_type: string) => {
    let type =
        _type === "Rentals" ? "rent" :
            _type === "Rentals_Plots" ? "rent" :
                _type === "Rentals_Commercial" ? "rent" :
                    _type === "Homes" ? "buy" :
                        _type === "Plots" ? "buy" :
                            _type === "Commercial" ? "buy" :
                                ""
    return type;
}

export const getZameenExtractedPropertyType = (_propertType: string) => {
    let propertyType = _propertType === "Rentals" ? "home" :
        _propertType === "Rentals_Plots" ? "plots" :
            _propertType === "Rentals_Commercial" ? "commercial" :
                _propertType === "Homes" ? "homes" :
                    _propertType === "Plots" ? "plots" :
                        _propertType === "Commercial" ? "commercial" :
                            ""
    return propertyType
}

export const makeZameenUrl = (_proptyType: string, _city: string, _page: number) => {
    const url = `https://www.zameen.com/${_proptyType}/${_city}-${_page}.html?sort=date_desc`;
    return url;
};

export const propertTypes = [
    zameenPropertyTypeRent.Home,
    zameenPropertyTypeRent.Plots,
    zameenPropertyTypeRent.Commercial,
    zameenPropertyTypeBuy.Home,
    zameenPropertyTypeBuy.Plots,
    zameenPropertyTypeBuy.Commercial,
];
export const cities = [
    zameenCityUrlEnum.Islamabad,
    zameenCityUrlEnum.Karachi,
    zameenCityUrlEnum.Lahore,
    zameenCityUrlEnum.Rawalpindi,
    zameenCityUrlEnum.Abbottabad,
    zameenCityUrlEnum.Bahawalpur,
    zameenCityUrlEnum.Faisalabad,
    zameenCityUrlEnum.Gujranwala,
    zameenCityUrlEnum.Gujrat,
    zameenCityUrlEnum.Hyderabad,
    zameenCityUrlEnum.Jhelum,
    zameenCityUrlEnum.Multan,
    zameenCityUrlEnum.Murree,
    zameenCityUrlEnum.Peshawar,
    zameenCityUrlEnum.Sargodha,
    zameenCityUrlEnum.Sialkot,
    zameenCityUrlEnum.Wah
];