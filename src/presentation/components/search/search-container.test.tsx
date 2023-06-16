/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-env jest */
import { render, screen } from '@testing-library/react';
import { SearchContainer } from './search-container';
import { UseQueryResult } from 'react-query';
import { TResponse } from '../../../app/domain';


// jest.mock('./loading.css', () => ({}));

jest.mock('./use-search', () => ({
  useSearchFilter: jest.fn(() => ({
    searchQuery: 'mockSearchQuery',
    changeFilter: jest.fn(),
    resetFilter: jest.fn(),
  })),
}));

jest.mock('../pagination/use-pagination', () => ({
  usePagination: jest.fn(() => ({
    page: 1,
    pageSize: 10,
    setPage: jest.fn(),
  })),
}));

jest.mock('./use-debounce', () => ({
  useDebounce: jest.fn((value) => value),
}));

const mockService = jest.fn(() => ({
  isLoading: false,
  isError: false,
  isFetching: false,
  error: null,
  data: {
    docs: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
    ],
    total: 2,
  },
}));

const itemDisplayMapper = jest.fn((data) =>
  data.map((item: { id: number; name: string }) => <div key={item.id}>{item.name}</div>)
);

const mockSearch = {
  service: mockService,
  property: 'mockProperty',
  testId: 'searchTestId',
};

const mockProps = {
  search: mockSearch,
  itemDisplayMapper: itemDisplayMapper,
};

describe('SearchContainer', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state while data is being fetched', () => {
    const mockResponse = { isLoading: true } as UseQueryResult<TResponse<unknown>, string>;
    render(<SearchContainer {...mockProps} search={{ ...mockSearch, service: () => mockResponse }} />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  test('renders search input and item list when data is available', () => {
    // @ts-ignore
    render(<SearchContainer {...mockProps} />);
    expect(screen.getByTestId('search-input')).toBeTruthy();
    expect(screen.getByTestId('searchTestId')).toBeTruthy();
    expect(screen.getByText('Item 1')).toBeTruthy();
    expect(screen.getByText('Item 2')).toBeTruthy();
  });
});
