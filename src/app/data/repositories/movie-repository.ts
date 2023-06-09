import { IMovieRepository, TMovie } from "../../domain";
import { IDataHandler, TRequestSharedParams, TResponse } from "../../domain/data-handler";

export class MovieRepository implements IMovieRepository {
  constructor(
    readonly gateway: IDataHandler, 
  ) {} 
  
  async get({ movieId }: { movieId: string }): Promise<TResponse<TMovie>> {
    const response = await this.gateway.get<TMovie>({ url: `/movie/${movieId}` });
    return response;
  }
  
  async getAll({ page, pageSize, searchQuery = '' }: TRequestSharedParams): Promise<TResponse<TMovie>> {
    const response = await this.gateway.get<TMovie>({ 
      url: `/movie?page=${page}&limit=${pageSize}${searchQuery ? `&name=/${searchQuery}/i` : ""}`,
    });
    return response;
  }
}