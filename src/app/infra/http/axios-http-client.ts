/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios, { AxiosResponse } from "axios";
import { IDataHandler, TRequestParams, TResponse } from "../../domain";

const axiosImplementation = axios.create({
  baseURL: "https://the-one-api.dev/v2",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
  }
});

export class AxiosHttpClient implements IDataHandler {
  async get<TData>(params: TRequestParams): Promise<TResponse<TData>> {
    try {
      const response: AxiosResponse = await axiosImplementation.get(params.url);
      return {
        ...response.data,
        statusCode: response.status
      }
    } catch (e) {
      // @ts-ignore
      throw new Error(e);
    }
  }
}