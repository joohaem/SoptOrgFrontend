import { useState } from 'react';
import { ExtraPart, PartExtraType } from '@src/lib/types/universal';
import Sopticles from '../Sopticles';
import TabBar from '../TabBar';

const Content = () => {
  const [selectedTab, setSelectedTab] = useState<ExtraPart>(PartExtraType.ALL);

  return (
    <>
      <TabBar onTabClick={setSelectedTab} selectedTab={selectedTab} />
      <Sopticles selectedTab={selectedTab} />
    </>
  );
};

export default Content;
