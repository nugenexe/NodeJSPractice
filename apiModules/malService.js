var AnimeListStatus;
(function (AnimeListStatus) {
    AnimeListStatus[AnimeListStatus["COMPLETED"] = 2] = "COMPLETED";
})(AnimeListStatus || (AnimeListStatus = {}));
export class MALAPIService {
    createUALURL(username = '', offset = 0, status = 2) {
        return `https://myanimelist.net/animelist/${username}/load.json?offset=${offset}&status=${status}`;
    }
    async getUALData(username) {
        if (username) {
            return null;
        }
        let ualURL = this.createUALURL(username);
        let response = await fetch(ualURL)
            .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                return null;
            }
        });
        if (response) {
            console.log('got here');
        }
    }
}
