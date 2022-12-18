import api from './api';

export default (url: string) => api(url).then((res) => res.data);
