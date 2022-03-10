const createFetchTemplate = (url, headers) =>
    fetch(url, headers)
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(err => console.log(err));

class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getCards(keyword) {
        return createFetchTemplate(`${this._baseUrl}/search/photos?query=${keyword}&per_page=30&orientation=landscape`, { headers: this._headers })
    };

    getInitialCards() {
        return createFetchTemplate(`${this._baseUrl}/search/photos?query='nature'&per_page=30&orientation=landscape`, { headers: this._headers })
    }
}

const api = new Api({
    baseUrl: 'https://api.unsplash.com/',
    headers: {
        authorization: "Client-ID 5g6Rtqz0EA22lyLodE4DNLddxuHYBPWlHKQwNS3j8-M",
        "Content-Type": "application/json",
    }
});

export default api;
