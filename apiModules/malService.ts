
enum AnimeListStatus {
    COMPLETED = 2,
}


export class MALAPIService {

    createUALURL(username:string = '', offset:number = 0, status:number = 2) {
        return `https://myanimelist.net/animelist/${username}/load.json?offset=${offset}&status=${status}`;
    }

    async getUALData(username:string) {
        if(username) {
            return null;
        }

        let ualURL = this.createUALURL(username);

        let response = await fetch(ualURL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return null;
                }
            })

        if(response) {
            console.log('got here');
        }
        
    }
}
