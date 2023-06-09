import { ChangeEvent, useState } from "react";

export function useSearchFilter() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e?.target?.value || '');
  };

  const handleResetFilter = () => {
    setSearchQuery('');
  };

  return {
    searchQuery: searchQuery.toLocaleLowerCase(), 
    changeFilter: handleChangeFilter,
    resetFilter: handleResetFilter,
  }
}