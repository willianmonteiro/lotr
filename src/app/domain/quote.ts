import { TMovieId } from "./movie"
import { TRequestSharedParams, TResponse } from "./data-handler"

export interface IQuoteRepository {
  // get(quoteId: string): Promise<TResponse<TQuote>>
  getAll(params: TRequestSharedParams & { filterBy: TQuoteFilter }): Promise<TResponse<TQuote>>
}

export type TQuote = {
	_id: string
  dialog: string
  movie: TMovieId
  character: string
  id: string
}

export type TQuoteFilter = {
  property: 'character' | 'movie'
  value: string
}