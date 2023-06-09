import { useState } from 'react';
import { Button } from '../button/button';
import { Card } from '../card/card';

export function Tabs<T>({ 
  title,
  tabs, 
  defaultTab, 
  onChange, 
  renderTabContent,
}: TTabsProps<T>) {

  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (onChange) {
      onChange(tab);
    }
  };

  const activeTabData = tabs.find((tab) => tab.id === activeTab)?.data;

  return (
    <div>
      <Card title={title}>
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={activeTab === tab.id ? 'border-b-4 border-primary-400' : ''}
          >
            {tab.label}
          </Button>
        ))}
      </Card>
      {activeTabData && <div className="mt-8">
        {renderTabContent(activeTabData)}
      </div>}
    </div>
  );
}

type TTab<T> = {
  id: string;
  label: string;
  data: T;
};

type TTabsProps<T> = {
  tabs: TTab<T>[];
  defaultTab: string;
  onChange?: (tab: string) => void;
  renderTabContent: (data: T) => React.ReactNode;
  title?: string
};