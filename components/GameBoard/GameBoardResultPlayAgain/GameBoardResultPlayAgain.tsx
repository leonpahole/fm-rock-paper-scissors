import gameBoardResultStyles from "./GameBoardResultPlayAgain.module.scss";
import { GameModels } from "../../../models/game.models";

interface IProps {
  computerSelectedSymbol: GameModels.Symbol;
  selectedSymbol: GameModels.Symbol;
  onPlayAgain: () => void;
}

export const GameBoardResultPlayAgain = ({
  selectedSymbol,
  computerSelectedSymbol,
  onPlayAgain,
}: IProps) => {
  const roundResultText = GameModels.getRoundResultText(
    selectedSymbol,
    computerSelectedSymbol
  );

  return (
    <article className={gameBoardResultStyles.wrapper}>
      <h2 className={gameBoardResultStyles.heading}>{roundResultText}</h2>
      <button
        className={gameBoardResultStyles.button}
        type="button"
        onClick={onPlayAgain}
      >
        Play again
      </button>
    </article>
  );
};
