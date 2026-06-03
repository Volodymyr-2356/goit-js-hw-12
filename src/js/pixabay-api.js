import axios from "axios";


const instance = axios.create({
  baseURL: "https://pixabay.com/api/",
    params: {
        key: '56004619-5e359d977e1c08efaf1a151d7',  
        per_page: '15',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    }
    
});

export const getImagesByQuery = async (query,page) => {
  const response = await instance.get('', { params: { q: query, page, } })
  return response.data;   
 };