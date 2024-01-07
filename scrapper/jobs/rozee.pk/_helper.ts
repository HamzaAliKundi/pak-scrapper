export const makeUrl = (page: number) => {
    let url = ""
    if (page === 1) {
        let pageUrl = `https://www.rozee.pk/job/jsearch/q/all/fpn/0`
        url = pageUrl
    } else {
        let pageUrl = `https://www.rozee.pk/job/jsearch/q/all/fpn/${20}`
        url = pageUrl
    }
}