/* eslint-disable class-methods-use-this */

export interface IDataHandler {
  get<TData>(params: TRequestParams): Promise<TResponse<TData>>;
  // post(url: string, payload?: any): Promise<any>;
  // put(url: string, payload: any): Promise<any>;
  // delete(url: string): Promise<any>;
}

export type TRequestParams = {
  url: string
  // body?: object
}

export type TResponse<TDoc> = {
  statusCode: EHttpStatusCode
  docs: TDoc[]
  total: number
  limit: number
  offset: number
  page: number
  pages: number
} 

export type TRequestSharedParams = {
  page: number
  pageSize: number
  searchQuery?: string
}

export enum EHttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500
}
