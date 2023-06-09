import { ReactNode } from "react";
import { UseQueryResult } from "react-query";
import { useSearchFilter } from "./use-search";
import { SearchInput } from "./search-input";
import { usePagination } from "../pagination/use-pagination";
import { Card } from "../card/card";
import { Pagination } from "../pagination/pagination";
import { Loading } from "../loading/loading";
import { EmptyList } from "../error/empty-list";
import { TResponse } from "../../../app/domain";
import { useDebounce } from "./use-debounce";

export function SearchContainer<TData>({ 
  search,
  itemDisplayMapper,
}: TSearchContainerProps<TData>) {
  const { page, pageSize, setPage } = usePagination();
  const { searchQuery, changeFilter, resetFilter } = useSearchFilter();
  const debounceSearchQuery = useDebounce(searchQuery, 2000);
  const { isLoading, isError, isFetching, error, data } = search.service({ 
    page, 
    pageSize, 
    searchQuery: debounceSearchQuery,
    ...(search.params || {}) 
  });

  if (isLoading || isFetching) return <Loading />;
  if (isError) throw new Error(error || 'Unexpected Error');
  if (!data?.docs.length) return <EmptyList description={`There are no items to display ${searchQuery ? `for your search "${searchQuery}"`: ""}.`} />;

  return (
    <>
      <SearchInput 
        searchQuery={searchQuery}
        changeFilter={changeFilter}
        resetFilter={debounceSearchQuery ? resetFilter : null}
      />

      <div 
        data-testid={search.testId}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {itemDisplayMapper(data?.docs)}
      </div>

      <div className="mt-8">
        <Card>
          <Pagination
            totalItems={data.total}
            itemsPerPage={pageSize}
            currentPage={page}
            onPageChange={setPage}
          />
        </Card>
      </div>
    </>
  )
}

type TSearchContainerProps<TData> = {
  search: {
    service: (params: any) => UseQueryResult<TResponse<TData>, string>
    property: string
    params?: {[key: string]: any}
    testId: string
  }
  itemDisplayMapper(filtered: TData[]): ReactNode[]
};