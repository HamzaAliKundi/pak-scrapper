import { cities, propertyTypes, types } from './_helper';

export const graanaScript = async () => {
    const makeGraanaUrl = (_type: string, _propertyType: string, _city: string, _page: number) => {
        const url = `https://www.graana.com/${_type}/${_propertyType}-${_city}/?page=${_page}&pageSize=30`;
        return url;
    };

    types
    propertyTypes
    cities

    for (let type of types) {
        for (let propertyType of propertyTypes) {
            for (let city of cities) {
                let page = 1;
                while (true) {
                    let url = makeGraanaUrl(type, propertyType, city, page);
                    console.log(url);
                    break;
                }
            }
        }
    }
};