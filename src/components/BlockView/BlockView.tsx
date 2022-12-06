import { ReactElement } from "react";
import { BlockData } from "../../globalTypes";
import "./BlockView.css";

interface Props {
  blockData: BlockData;
}

export const BlockView = (props: Props): ReactElement => {
  const { blockData } = props;
  console.log("🚀 ~ file: BlockView.tsx:10 ~ BlockView ~ blockData", blockData);
  return (
    <div id="BlockData">
      <h1 className="title">Latest Block Stats</h1>
      <section className="detailArea">
        <div className="dataPair">
          <div className="title">Block Hash</div>
          <div className="title">{blockData?.block_hash}</div>
        </div>
        <div className="dataPair">
          <div className="title">Block Height</div>
          <div className="title">{blockData?.header?.metadata?.height}</div>
        </div>
        <div className="dataPair">
          <div className="title">Total Transactions</div>
          <div className="title">{blockData?.transactions?.length}</div>
        </div>
        <div className="dataPair">
          <div className="title">Total Solutions</div>
          <div className="title">{blockData?.header?.metadata?.height}</div>
        </div>
      </section>
    </div>
  );
};
