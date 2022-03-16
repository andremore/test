import axios from './axios';

const budy = document.querySelector('body');
const creator = document.createElement('p');

// axios
//     .get('https://catfact.ninja/fact')
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

axios
    .get('https://catfact.ninja/fact')
    .then(function (response) {
        // handle success
        console.log(response.data.fact);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });

creator.innerHTML = 'Me';

budy.append(creator);
