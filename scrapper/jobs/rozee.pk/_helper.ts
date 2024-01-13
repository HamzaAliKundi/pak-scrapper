export const makeUrl = (page: number) => {
    let url = ""
    if (page === 0) {
        let pageUrl = `https://www.rozee.pk/job/jsearch/q/all`
        url = pageUrl
    } else {
        let pageUrl = `https://www.rozee.pk/job/jsearch/q/all/fpn/${20}`
        url = pageUrl
    }

    return url;
};