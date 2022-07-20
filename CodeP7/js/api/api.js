class Api {
    constructor (url) {
        this.url = url;
    }

    async getRecettes () {
        return fetch(this.url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Work with JSON data here
            
            console.log(data);
            return data;
        })
        .catch((err) => {
            // Do something for an error here
        });
    }
}