import httpCommon from '../httpCommon';

const getUserById = (id?: number) => {
  return httpCommon.get(`/aluno/${id}`);
};

export default {
  getUserById
}