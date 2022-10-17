// import data from "../data/episodes.json";

// export function getEpisodes() {
//     return new Promise((resolve, reject) => {   
//         window.setTimeout(() => {
//             resolve([...data.episodes]);
//         }, 2000);
//     });
// }

import axios from "axios";

export function getEpisodes() {
    return axios
        .get("https://2f807169-eb60-4cae-ae05-940d842c6739.mock.pstmn.io/episodes", {
            headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
            // headers: { authorization: `Bearer ZGKBU69na8IvQApqJRiu4XlwskjGtPqgkY6tScIr` },
        })
        .then((response) => response.data);
}

export function login(username, password) {
    return axios
        .post("https://2f807169-eb60-4cae-ae05-940d842c6739.mock.pstmn.io/login", { username, password })
        .then((response) => response.data);
}
