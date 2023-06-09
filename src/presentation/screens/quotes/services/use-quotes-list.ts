import { useQuery } from "react-query";
import { useDeps } from "../../use-deps";
import { TQuote, TQuoteFilter, TResponse } from "../../../../app/domain";

export function useQuotesList({ page, pageSize, filterBy, searchQuery }: { 
  page: number, 
  pageSize: number
  filterBy?: TQuoteFilter,
  searchQuery?: string,
}) {
  const { quoteRepository } = useDeps();

  const result = useQuery<TResponse<TQuote>, string>({
    queryKey: ['quotes-list', page, pageSize, filterBy, searchQuery],
    queryFn: () => quoteRepository.getAll({ page, pageSize, filterBy, searchQuery }),
  })
  
  return result
}