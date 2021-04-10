import axios from 'axios';

const instance=axios.create({
    baseURL:'https://whatsapp-cloneback.herokuapp.com'
})
export default instance;