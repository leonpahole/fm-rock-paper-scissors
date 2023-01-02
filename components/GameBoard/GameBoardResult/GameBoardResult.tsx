import gameBoardResultStyles from "./GameBoardResult.module.scss";
import { GameBoardCircle } from "../GameBoardCircle/GameBoardCircle";
import { GameModels } from "../../../models/game.models";

interface IProps {
  selectedSymbol: GameModels.Symbol;
}

export const GameBoardResult = ({ selectedSymbol }: IProps) => {
  return (
    <div className={gameBoardResultStyles.wrapper}>
      <article className={gameBoardResultStyles.article}>
        <h2 className={gameBoardResultStyles.heading}>You picked</h2>
        <div className={gameBoardResultStyles.circleWrapper}>
          <GameBoardCircle
            symbol={selectedSymbol}
            onClick={() => {}}
            size="large"
            disableInteractivity
          />
        </div>
      </article>
      <article className={gameBoardResultStyles.article}>
        <h2 className={gameBoardResultStyles.heading}>The house picked</h2>
        <div className={gameBoardResultStyles.circleWrapper}>
          <GameBoardCircle
            symbol={null}
            onClick={() => {}}
            size="large"
            disableInteractivity
          />
        </div>
      </article>
    </div>
  );
};
