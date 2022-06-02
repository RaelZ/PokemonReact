import axios from "axios";
import { auth } from "../utils/config";
import { CreateUser } from "../models/CreateUser";
import { UserLogin } from "../models/UserLogin";
import { User } from "../models/User";

class PokedexApi {
  // Auth section
  SignIn = async (user: UserLogin): Promise<User> =>
    axios.post(auth.signIn, user).then((res) => res.data);
  SignUp = async (user: CreateUser): Promise<string> =>
    axios.post(auth.signIn, user).then((res) => res.data);
}

export const pokedexApi = new PokedexApi();
