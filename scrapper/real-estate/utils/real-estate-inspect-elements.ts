type IConfig = {
    [key: string]: any
}

export const Config: IConfig = {
    zameen: {
        articleKey: "li.ef447dde",

        price: "span.f343d9ce",
        beds: 'span._984949e5[aria-label="Beds"]',
        baths: 'span._984949e5[aria-label="Baths"]',
        area: 'span._984949e5[aria-label="Area"] span',
        location: "div._162e6469",
        title: "h2.c0df3811",
        url: 'a._7ac32433[aria-label="Listing link"]',
        pictureClass: 'picture._219b7e0a',
        imgClass: "img._8f499ba9"
    },

    graana: {
        articleKey: "div.mui-style-17zbhp0",

        price: "div.mui-style-gz23my",
        beds: 'div.MuiTypography-root.MuiTypography-body2New.mui-style-1548769',
        baths: 'div.MuiTypography-root.MuiTypography-body2New.mui-style-1548769',
        area: 'div.MuiTypography-root.MuiTypography-body2New.mui-style-1548769',
        location: "h5.mui-style-3bzwbl",
        title: "h2.c0df3811",
        propertyType: "div.mui-style-18id7mx"
        // url: 'a._7ac32433[aria-label="Listing link"]',
        // pictureClass: 'picture._219b7e0a',
        // imgClass: "img._8f499ba9"
    }
};
