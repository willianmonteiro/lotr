/** @type {import('jest')} */

import { Characterepository } from './character-repository';
import { IDataHandler, TResponse, TCharacter, EHttpStatusCode } from '../../domain';

const mockDataHandler: IDataHandler = {
  async get<T>(): Promise<TResponse<T>> {
    return {
      statusCode: EHttpStatusCode.ok,
      docs: [],
      total: 1,
      limit: 1,
      offset: 0,
      page: 1,
      pages: 1,
    };
  },
};

describe("Characterepository", () => {
  let characterRepository: Characterepository;

  beforeEach(() => {
    characterRepository = new Characterepository(mockDataHandler);
  });

  describe("get", () => {
    it("should call the gateway's get method with the correct URL", async () => {
      const mockCharacterId = "123";
      const mockResponse: TResponse<TCharacter> = {
         docs: [
          {
            _id: mockCharacterId,
            name: "John Doe",
          } as TCharacter
         ]
      } as TResponse<TCharacter>;

      mockDataHandler.get = jest.fn().mockResolvedValue(mockResponse);
      const result = await characterRepository.get({ characterId: mockCharacterId });
      expect(mockDataHandler.get).toHaveBeenCalledWith({ url: `/character/${mockCharacterId}` });
      expect(result).toEqual(mockResponse);
    });
  });
});
