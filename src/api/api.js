const url = "https://api.kinopoisk.dev/v1.3/movie";

// const token = "SYZS55Z-83F4HN8-G86NA23-415354S";
const token = "JEYYPR0-1A9MZG1-MBK5NWA-YYW4W9S";
// const token = "SNQEFPA-EHG4FJ8-NJFQZ6R-5DEJ5NN";
// const token = "YCN9SB4-XF2MYPQ-P0QBPEF-CXKQM5G";
// const token = "MCS53CT-Q7H45X3-J9SPNX1-750HK81";
// const token = "YWY55SA-QXA4Y0G-PB327FR-Q4EDHP3";

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

export const getOneCard = (id) => {
  return fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": token,
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const getFavorites = (id) => {
  return fetch(url + `?id=${id}`, {
    method: "GET",
    headers: {
      "X-API-KEY": token,
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};
