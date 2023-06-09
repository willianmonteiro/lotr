import { TRequestSharedParams, TResponse } from "./data-handler"

export interface ICharacterRepository {
  get(params: { characterId: TCharacterId }): Promise<TResponse<TCharacter>>
  getAll(params: TRequestSharedParams): Promise<TResponse<TCharacter>>
}

export type TCharacterId = string

export type TCharacter = {
  _id: TCharacterId
  height: string
  race: string
  gender: string
  birth: string
  spouse: string
  death: string
  realm: string
  hair: string
  name: string
  wikiUrl: string
}
