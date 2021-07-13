import axios from "axios";

export class UserService {

    finduser = (email,password) => {
        return axios.post(`http://localhost:8080/loginCheck?email=${email}&password=${password}`).then(res => res.data);
    }

    getAllDoctors = () => {
        return axios.get('http://localhost:8080/getDoctors').then(res => res.data);
    }

}