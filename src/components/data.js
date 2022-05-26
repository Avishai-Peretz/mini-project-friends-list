import axios from 'axios';

let url = 'https://628e7cc0368687f3e717b665.mockapi.io/users'

export const data = async () => {
        const data = await axios.get(url).then(data => data.data);
        return data
    
}

export const postData = async (inputValue) => {
   
    await axios.post(url, { ...inputValue })
}

export const putData = async (inputValue, id) => {
   
    await axios.put(`${url + "/" + id}`, { ...inputValue })
}

  
export const deleteData = async (id) => {
  
    await axios.delete(`${url + "/" + id}`)
}
