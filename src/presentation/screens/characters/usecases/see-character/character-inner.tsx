import { useNavigate } from "react-router";
import { Tabs } from "../../../../components/tabs/tabs";
import { useParams } from "react-router";
import { TabCharacterDetails } from "./tab-character-details";
import { TabCharacterQuotes } from "./tab-character-quotes";

const tabs = [
  { id: 'details', label: 'Details', data: <TabCharacterDetails /> },
  { id: 'quotes', label: 'Quotes', data: <TabCharacterQuotes /> },
];

export function CharacterInner() {
  const navigate = useNavigate();
  const { characterId, tabId = 'details' } = useParams();

  return (
    <Tabs
      tabs={tabs}
      defaultTab={tabId}
      renderTabContent={(data) => data}
      onChange={(to) => navigate(`/character/${characterId}/${to}`)}
    />
  )
}