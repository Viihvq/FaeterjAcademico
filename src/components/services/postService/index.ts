import httpCommon from '../httpCommon';

const getNoticias = () => {
  return httpCommon.get(`/noticias`);
};

export default {
  getNoticias,
}