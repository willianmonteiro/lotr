import { TRequestSharedParams, TResponse } from "./data-handler"

export interface IMovieRepository {
  get(params: { movieId: TMovieId }): Promise<TResponse<TMovie>>
  getAll(params: TRequestSharedParams): Promise<TResponse<TMovie>>
}

export type TMovieId = string

export type TMovie = {
  _id: TMovieId
  name: string
  runtimeInMinutes: number
  budgetInMillions: number
  boxOfficeRevenueInMillions: number
  academyAwardNominations: number
  academyAwardWins: number
  rottenTomatoesScore: number
}