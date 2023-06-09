import { IQuoteRepository, TQuote, TQuoteFilter } from "../../domain";
import { IDataHandler, TRequestSharedParams, TResponse } from "../../domain/data-handler";

export class QuoteRepository implements IQuoteRepository {
  constructor(
    readonly gateway: IDataHandler, 
  ) {} 

  async getAll({ page, pageSize, filterBy, searchQuery }: TRequestSharedParams & { filterBy?: TQuoteFilter }): Promise<TResponse<TQuote>> {      
    const response = await this.gateway.get<TQuote>({ 
      url: `/${filterBy ? `${filterBy.property}/${filterBy.value}/`: ''}quote?page=${page}&limit=${pageSize}${searchQuery ? `&dialog=/${searchQuery}/i` : ""}`,
    });
    return response;
  }
}