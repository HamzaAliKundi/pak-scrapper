export const makeUrl = (_page: number) => {
    let url = ""
    if (_page === 0) {
        let pageUrl = `https://www.rozee.pk/job/jsearch/q/all`
        url = pageUrl
    } else {
        let pageUrl = `https://www.rozee.pk/job/jsearch/q/all/fpn/${_page}`
        url = pageUrl
    }

    return url;
};