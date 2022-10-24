import { AllPokemon, Pokemon } from "~/models/Pokemon";
import api from "../api";

export const getAllPokemon = async () => {
  const response = await api.get(`/v2/pokemon`);
  return response.data as AllPokemon;
};

export const getPokemonById = async (id: number) => {
  const response = await api.get(`/v2/pokemon/${id}`);
  return response.data as Pokemon;
};

export const getPokemonByUrl = async (url: string) => {
  const response = await api.get(url);
  return response.data as Pokemon;
};
