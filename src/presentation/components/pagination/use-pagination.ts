import { useState } from "react";

export function usePagination() {
  const [page, setPage] = useState(1);

  return {
    page,
    setPage,
    pageSize: 10,
  }
}