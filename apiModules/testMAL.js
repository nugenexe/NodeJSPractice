import fetch from "node-fetch";

// let request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/users');
// request.send();
// request.onload = (test) => {
//     console.log(test);
//     console.log(request);
//     if(request.status == 200) {
//         console.log(`hello [${JSON.parse(request.response)}]`);
//     } else {
//         console.log(`error [${request.status}] + [${request.statusText}]`);
//     }
// }

let ualAnimeDetail = {
    status: 2,
    score: 7,
    tags: "",
    is_rewatching: 0,
    num_watched_episodes: 22,
    anime_title: "3-gatsu no Lion",
    anime_num_episodes: 22,
    anime_airing_status: 2,
    anime_id: 31646,
    anime_studios: [
        {
            id: 44,
            name: "Shaft",
        },
    ],
    anime_licensors: [
        {
            id: 493,
            name: "Aniplex of America",
        },
    ],
    anime_season: null,
    has_episode_video: true,
    has_promotion_video: true,
    has_video: true,
    video_url: "/anime/31646/3-gatsu_no_Lion/video",
    anime_url: "/anime/31646/3-gatsu_no_Lion",
    anime_image_path: "https://cdn.myanimelist.net/r/96x136/images/anime/6/82898.jpg?s=85b3b56c78d3b46331672f082c50687e",
    is_added_to_list: false,
    anime_media_type_string: "TV",
    anime_mpaa_rating_string: "PG-13",
    start_date_string: "01-22-20",
    finish_date_string: "02-18-20",
    anime_start_date_string: "10-08-16",
    anime_end_date_string: "03-18-17",
    days_string: 28,
    storage_string: "",
    priority_string: "Low",
}

let createUALURL = (offset = 0, status = 2) => {
    return `https://myanimelist.net/animelist/nugen_exe/load.json?offset=${offset}&status=${status}`;
}

var userAnimeListURL = createUALURL();

let response = await fetch(userAnimeListURL)
    .then(response => {
        if (response.ok) {
            response.JSON;
            return response.json();
        } else {
            return null;
        }
    })

console.log('hello');

// .catch(err => console.log(err)); // todo test if errors are normally logged to console



// let spam = 

//The application will get a user's MyAnimeList ratings and compare them to the mean score. The goal is to predict bias, based on a multitude on settings (such as genres, time period that could impact strictness, anime's popularity, etc.). Another goal is to plot and graph a pattern over time (such as genre changes, score strictness, tendency to pick obscure shows, etc.). The final goal is to predict shows the user would enjoy.
