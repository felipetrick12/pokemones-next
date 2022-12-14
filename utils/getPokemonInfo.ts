import { clienteAxios } from "../config";
import { Pokemon, Sprites } from "../interfaces";

interface Props {
  id: number;
  name: string;
  sprites: Sprites;
}

export const getPokemonInfo = async (
  nameOrId: string
): Promise<Props | null> => {
  const { data } = await clienteAxios.get<Pokemon>(`/pokemon/${nameOrId}`);

  try {
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
