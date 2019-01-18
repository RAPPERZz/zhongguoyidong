import axios from 'axios';
import apis from './apis';
import gci from './config';

axios.defaults.withCredentials = true;

var ince = axios.create({
  baseURL: apis.baseURL
});

ince.interceptors.request.use(function(config) {
  if (config.url.endsWith('.json')) {
    return config;
  }
  if (gci.IS_YUNTI) {
    var methodMap = {
      get: 'query',
      post: 'save',
      delete: 'delete',
      update: 'update'
    };
    config.url = config.url.endsWith('/')
      ? config.url + methodMap[config.method]
      : config.url + '/' + methodMap[config.method];
  }
  return config;
});

ince.interceptors.response.use(res => {
  if (res.data.errcode == 4802) {
    window.location.href = `/${gci.BASEURL}#/login`;
  }
  return res.data;
}, err => {
  if ( err.message == 'Network Error' ) {
    window.location.href = `/${gci.BASEURL}#/login`;
  }
} );

export default ince;
export { apis };
