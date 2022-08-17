import axios from "axios";

export const clienteAxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
