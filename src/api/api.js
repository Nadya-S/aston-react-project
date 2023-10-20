const url = "https://api.kinopoisk.dev/v1.3/movie";
const token = 'SYZS55Z-83F4HN8-G86NA23-415354S';
// const token = "JEYYPR0-1A9MZG1-MBK5NWA-YYW4W9S";

export const fetchKinopoisk = (currentPage) => {
  return fetch(url + `?limit=10&page=${currentPage}`, {
    method: "GET",
    headers: {
      "X-API-KEY": token,
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const fetchSearchKinopoisk = (movie) => {
  return fetch(url + `?name=${movie}`, {
    method: "GET",
    headers: {
      "X-API-KEY": token,
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};
