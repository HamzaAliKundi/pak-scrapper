// import { zameenPropertyTypeRent, zameenPropertyTypeBuy, zameenCityUrlEnum } from '../utils/url-helper-enums';

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

export enum zameenType {
    "Rent" = "Rentals",
    "Buy" = "buy",
}

let zameenPropertyTypeRent: any = {
    "Home": "Rentals",
    "Plots": "Rentals_Plots",
    "Commercial": "Rentals_Commercial"
}

let zameenPropertyTypeBuy: any = {
    "Home": "Homes",
    "Plots": "Plots",
    "Commercial": "Commercial"
}

let zameenCityUrlEnum: any = {
    "Islamabad": "Islamabad-3",
    "Karachi": "Karachi-2",
    "Lahore": "Lahore-1",
    "Rawalpindi": "Rawalpindi-41",
    "Abbottabad": "Abbottabad-385",
    "Bahawalpur": "Bahawalpur-23",
    "Faisalabad": "Faisalabad-16",
    "Gujranwala": "Gujranwala-327",
    "Gujrat": "Gujrat-20",
    "Hyderabad": "Hyderabad-30",
    "Jhelum": "Jhelum-19",
    "Multan": "Multan-15",
    "Murree": "Murree-36",
    "Peshawar": "Peshawar-17",
    "Sargodha": "Sargodha-778",
    "Sialkot": "Sialkot-480",
    "Wah": "Wah-459",
}

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