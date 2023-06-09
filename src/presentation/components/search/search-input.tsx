import { ChangeEvent } from "react";
import { Button } from "../button/button";

export function SearchInput({ 
  searchQuery, 
  changeFilter, 
  resetFilter 
}: TSearchFilterProps ) {
  return (
    <>
       <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={changeFilter}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
        </div>

        {(searchQuery && resetFilter) && (
          <div className="mb-4 flex justify-end">
            <Button
              onClick={resetFilter}
              className="font-bold py-2 px-4 rounded"
            >
              Reset Filter
            </Button>
          </div>
        )}
    </>
  )
}

type TSearchFilterProps = {
  searchQuery: string
  changeFilter(e: ChangeEvent<HTMLInputElement>): void
  resetFilter?: (() => void) | null
}