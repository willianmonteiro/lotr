import { TQuote, TQuoteFilter } from "../../../../../app/domain";
import { Card } from "../../../../components/card/card";
import { Fallback } from "../../../../components/error/error-fallback";
import { SearchContainer } from "../../../../components/search/search-container";
import { useQuotesList } from "../../services/use-quotes-list";

export function QuoteList({ by, filterBy }: TQuoteListProps) {
  return (
    <Fallback>
      <SearchContainer
        search={{
          service: useQuotesList,
          property:'dialog',
          params: {
            filterBy
          },
          testId: 'quotes-list'
        }}
        itemDisplayMapper={(filtered: TQuote[]) => filtered.map(({ _id, dialog }: TQuote) => (
          <Card key={_id}>
            <blockquote className="text-xl italic font-semibold text-gray-900">
              <p>"{dialog}"</p>
              {!!by && (
                <small>- {by}</small>
              )}
            </blockquote>
          </Card>
        ))}
      />
    </Fallback>
  )
}

type TQuoteListProps = {
  by?: string
  filterBy?: TQuoteFilter
}
