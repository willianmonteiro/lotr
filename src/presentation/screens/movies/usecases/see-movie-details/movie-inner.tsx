import { useNavigate } from "react-router";
import { Tabs } from "../../../../components/tabs/tabs";
import { useParams } from "react-router";
import { TabMovieDetails } from "./tab-movie-details";
import { TabMovieQuotes } from "./tab-movie-quotes";

const tabs = [
  { id: 'details', label: 'Details', data: <TabMovieDetails /> },
  { id: 'quotes', label: 'Quotes', data: <TabMovieQuotes /> },
];

export function MovieInner() {
  const navigate = useNavigate();
  const { movieId, tabId = 'details' } = useParams();

  return (
    <Tabs
      tabs={tabs}
      defaultTab={tabId}
      renderTabContent={(data) => data}
      onChange={(to) => navigate(`/movie/${movieId}/${to}`)}
    />
  )
}