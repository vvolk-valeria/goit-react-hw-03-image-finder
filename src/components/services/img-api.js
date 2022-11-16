// const baseURL = 'https://pixabay.com/api/';
//   const API_KEY = '30134376-fefd65acec5dcb1f681d352f7';
//   const seachParams = new URLSearchParams({
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   })

//   let per_page = 12;

//   export async function getImg(searchQuery, page) {
//     const response = await axios.get(`/?key=${API_KEY}&q=${searchQuery}&${seachParams}&page=${page}&per_page=${per_page}`);
//     // page += 1;
//     return {response, page};

//   };


// export function fetchImg(searchQuery, page) { 
//  return fetch(`${baseURL}/?key=${API_KEY}&q=${searchQuery}&${seachParams}&page=${page}&per_page=${per_page}`)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(new Error(`Нет изображений по запросу ${searchQuery}`));
//         })
// };



import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '30134376-fefd65acec5dcb1f681d352f7';
const seachParams = new URLSearchParams({
  image_type: 'photo',
  orientation: 'horizontal', 
  safesearch: true,
})

//let per_page = 12;


export async function fetchImg(searchQuery, page,PER_PAGE) {
  const response = await axios.get(`/?key=${API_KEY}&q=${searchQuery}&${seachParams}&page=${page}&per_page=${PER_PAGE}`);

  return response.data;
};

