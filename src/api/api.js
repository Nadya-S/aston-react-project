const url = 'https://api.kinopoisk.dev/v1.3/movie';
const token = 'SYZS55Z-83F4HN8-G86NA23-415354S';

export const fetchKinopoisk = () => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'X-API-KEY': token
        }
    })
        .then(response => response.json())
        .then(data => data)
}