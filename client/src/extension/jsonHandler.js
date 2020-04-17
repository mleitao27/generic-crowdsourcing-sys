import axios from 'axios';
import config from '../extension/config';

import JSONdata from '../data/form.json';

const jsonHandler = props => {   
   // Render user list when button clicked

    const params = {data: JSONdata};
    axios.post(`${config.serverURL}/api/users/json`, params)
    .then(res => {
        // If successful set user list
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });

}

export default jsonHandler;