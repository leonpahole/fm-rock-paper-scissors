import { Flipped } from "react-flip-toolkit";
import gameBoardResultStyles from "./GameBoardResult.module.scss";
import { GameBoardCircle } from "../GameBoardCircle/GameBoardCircle";
import { GameModels } from "../../../models/game.models";
import { useDelayValue } from "../../../hooks/useDelayValue";
import { GameBoardResultPlayAgain } from "../GameBoardResultPlayAgain/GameBoardResultPlayAgain";

interface IProps {
  selectedSymbol: GameModels.Symbol;
  computerSelectedSymbol: GameModels.Symbol;
  onRevealed: () => void;
  onPlayAgain: () => void;
}

export const GameBoardResult = ({
  selectedSymbol,
  computerSelectedSymbol,
  onRevealed,
  onPlayAgain,
}: IProps) => {
  const computerSelectedSymbolAnimated = useDelayValue(
    computerSelectedSymbol,
    3000,
    onRevealed
  );

  const result = GameModels.getRoundResult(
    selectedSymbol,
    computerSelectedSymbol
  );

  return (
    <div className={gameBoardResultStyles.wrapper}>
      <article className={gameBoardResultStyles.article}>
        <h2 className={gameBoardResultStyles.heading}>You picked</h2>
        <Flipped flipId={selectedSymbol}>
          <div className={gameBoardResultStyles.circleWrapper}>
            <GameBoardCircle
              symbol={selectedSymbol}
              onClick={() => {}}
              size="large"
              disableInteractivity
              hasWon={
                !!computerSelectedSymbolAnimated && result === "chosen-won"
              }
            />
          </div>
        </Flipped>
      </article>
      <GameBoardResultPlayAgain
        computerSelectedSymbol={computerSelectedSymbol}
        selectedSymbol={selectedSymbol}
        onPlayAgain={onPlayAgain}
        show={!!computerSelectedSymbolAnimated}
      />
      <article className={gameBoardResultStyles.article}>
        <h2 className={gameBoardResultStyles.heading}>The house picked</h2>
        <div className={gameBoardResultStyles.circleWrapper}>
          <GameBoardCircle
            symbol={computerSelectedSymbolAnimated}
            onClick={() => {}}
            size="large"
            disableInteractivity
            hasWon={
              !!computerSelectedSymbolAnimated && result === "opponent-won"
            }
          />
        </div>
      </article>
    </div>
  );
};
