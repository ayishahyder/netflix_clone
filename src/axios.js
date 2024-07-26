import axios from 'axios';
import { API_KEY} from './Constants/Constants';

const Instance = axios.create({
  Api_key:API_KEY,

});

export default Instance;
