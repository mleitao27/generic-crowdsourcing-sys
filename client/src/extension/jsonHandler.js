import axios from 'axios';
import config from '../extension/config';

const jsonHandler = (param, email)  => {   
   // Render user list when button clicked
   
   const params = {
       'json': param,
       'email': email
   };

    axios.post(`${config.serverURL}/api/surveys/submit`, params)
    .then(res => {
        // If successful set user list
        console.log(res.status);
    })
    .catch(error => {
        console.log(error);
    });

};

export default jsonHandler;