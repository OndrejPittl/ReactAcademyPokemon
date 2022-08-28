import React from "react";
import axios, { AxiosInstance } from 'axios';
import { IFetchPokemonResponse } from "../interfaces/IFetchPokemonResponse";
import { ApiConfig } from "../config/ApiConfig";
import { IPokemonInfo } from "../interfaces/IPokemonInfo";

export abstract class TransportLayer {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: ApiConfig.BASE,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export class Api extends TransportLayer {
  
  /**
   * Fetches a list of pokemons.
   * @returns list of pokemons
   */
  public async getAll(): Promise<IFetchPokemonResponse> {
    // return this.api.get(ApiConfig.POKEMON.GET_ALL());
    try {
      const response = await this.api.get(ApiConfig.POKEMON.GET_ALL());
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
   * Fetches detail info of a pokemon.
   * @returns pokemon details
   */
  public async getOne(pokemon: string): Promise<IPokemonInfo> {
    // return this.api.get(ApiConfig.POKEMON.GET_ONE(pokemon));
    try {
      const response = await this.api.get(ApiConfig.POKEMON.GET_ONE(pokemon));
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
