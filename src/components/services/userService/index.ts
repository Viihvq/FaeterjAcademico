import httpCommon from '../httpCommon';

const getUserById = (id?: number) => {
  return httpCommon.get(`/aluno/${id}`);
};

const getUserByEmail = (email?: string | unknown) => {
  return httpCommon.get(`/aluno/email?value=${email}`);
};

const putUser = (user: any) => {
  return httpCommon.put(`/aluno/${user?.id}`, {
    email: user.email,
    id: user.id,
    nome: user.nome,
    }
)
}

export default {
  getUserById,
  getUserByEmail,
  putUser
}