import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';

const options = {
  url: BASE_URL,
  params: {
     maxResults: '50'
    },
  headers: {
    'X-RapidAPI-Key': '4763f15c15msha59c3dc82b3b4e4p1bda47jsnec1bfd0b2a8b' ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



export const fetchFromAPI = async (url) => {
const { data } = await axios.get(`${BASE_URL}/${url}`, options);

return data;

}




// process.env.REACT_APP_RAPID_API_KEY