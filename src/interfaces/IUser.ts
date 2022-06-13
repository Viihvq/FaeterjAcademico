import { IDisciplinas } from "./IDisciplinas";
import { ITelefones } from "./ITelefones";

export interface IUser{
  id: number;
  nome: string;
  email: string;
  disciplinas: IDisciplinas[];
  telefones: ITelefones[];
}