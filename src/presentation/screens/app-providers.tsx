import { QueryClient, QueryClientProvider } from 'react-query';
import { AxiosHttpClient } from '../../app/infra/http/axios-http-client';
import { MovieRepository } from '../../app/data/repositories/movie-repository';
import { ReactNode, createContext } from 'react';
import { Characterepository, QuoteRepository } from '../../app/data';

const queryConfig = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
    },
  }
});

function createInitialContext() {
  const httpClient = new AxiosHttpClient();
  return {
    movieRepository: new MovieRepository(httpClient),
    characterRepository: new Characterepository(httpClient),
    quoteRepository: new QuoteRepository(httpClient),
  };
}

const initialContext = createInitialContext();

export const AppServicesContext = createContext(initialContext);
AppServicesContext.displayName = 'AppServicesContext';


export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryConfig}>
       <AppServicesContext.Provider value={initialContext}>
          {children}
      </AppServicesContext.Provider>
    </QueryClientProvider>
  );
}