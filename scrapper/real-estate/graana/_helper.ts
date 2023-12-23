let zameenCityUrlEnum = {
    "Islamabad": "islamabad-1",
    "Karachi": "karachi-169",
    "Lahore": "lahore-2",
    "Peshawar": "peshawar-176",
    "Rawalpindi": "rawalpindi-3",
    "Faisalabad": "faisalabad-170",
    "Gujranwala": "gujranwala-174",
    "Hyderabad": "hyderabad-183",
    "Jhelum": "jhelum-193",
    "Multan": "multan-168",
    "Queta": "quetta-187",
    "Sialkot": "sialkot-190",
}

export enum graanaType {
    "rent" = "rent",
    "buy" = "sale",
};

let graanaPropertyTypeRent = {
    "Residentials": "residential-properties-rent",
    "Plots": "plot-rent",
    "Commercial": "commercial-properties-rent"
};

let graanaPropertyTypeBuy = {
    "Residentials": "residential-properties-sale",
    "Plots": "plot-sale",
    "Commercial": "commercial-properties-sale"
}

export const makeGraanaUrl = (_type: string, _propertyType: string, _city: string, _page: number) => {
    const url = `https://www.graana.com/${_type}/${_propertyType}-${_city}/?orderBy=1&page=${_page}&pageSize=30`;
    return url;
};

export const types = [graanaType.rent, graanaType.buy];

export const propertyTypesRent = [
    graanaPropertyTypeRent.Residentials,
    graanaPropertyTypeRent.Plots,
    graanaPropertyTypeRent.Commercial,
];

export const propertyTypesBuy = [
    graanaPropertyTypeBuy.Residentials,
    graanaPropertyTypeBuy.Plots,
    graanaPropertyTypeBuy.Commercial,
];

export const cities = [
    zameenCityUrlEnum.Islamabad,
    zameenCityUrlEnum.Karachi,
    zameenCityUrlEnum.Lahore,
    zameenCityUrlEnum.Peshawar,
    zameenCityUrlEnum.Rawalpindi,
    zameenCityUrlEnum.Faisalabad,
    zameenCityUrlEnum.Gujranwala,
    zameenCityUrlEnum.Hyderabad,
    zameenCityUrlEnum.Jhelum,
    zameenCityUrlEnum.Multan,
    zameenCityUrlEnum.Queta,
    zameenCityUrlEnum.Sialkot,
];