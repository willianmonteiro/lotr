import { ICharacterRepository, TCharacter } from "../../domain";
import { IDataHandler, TRequestSharedParams, TResponse } from "../../domain/data-handler";

export class Characterepository implements ICharacterRepository {
  constructor(
    readonly gateway: IDataHandler, 
  ) {} 
  
  async get({ characterId }: { characterId: string }): Promise<TResponse<TCharacter>> {
    const response = await this.gateway.get<TCharacter>({ url: `/character/${characterId}` });
    return response;
  }
  
  async getAll({ page, pageSize, searchQuery }: TRequestSharedParams): Promise<TResponse<TCharacter>> {
    const response = await this.gateway.get<TCharacter>({ 
      url: `/character?page=${page}&limit=${pageSize}${searchQuery ? `&name=/${searchQuery}/i` : ""}`,
    });
    return response;
  }
}