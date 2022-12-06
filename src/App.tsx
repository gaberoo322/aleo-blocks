import { useEffect, useState } from "react";
import { getBlocks } from "./WebService";
import { BlockData } from "./globalTypes";
import { BlockView } from "./components/BlockView/BlockView";

import "./App.css";

function App() {
  const [blockData, setBlockData] = useState<BlockData>();

  const initialize = async () => {
    const data: BlockData = (await getBlocks()) as unknown as BlockData;
    setBlockData(data);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div id="App">
      <div className="Layout">
        <header className="header">
          <div className="logo"></div>
          <div className="links"></div>
          <div className="connectButton"></div>
        </header>
        <BlockView blockData={blockData as BlockData} />
      </div>
    </div>
  );
}

export default App;
