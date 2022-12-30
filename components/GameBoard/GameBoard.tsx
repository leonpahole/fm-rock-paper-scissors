import gameBoardStyles from "./GameBoard.module.scss";
import { GamePicker } from "../GamePicker/GamePicker";
import { GameRules } from "../GameRules/GameRules";
import { GameScore } from "../GameScore/GameScore";

export const GameBoard = () => {
  return (
    <div className={gameBoardStyles.wrapper}>
      <GameScore />
      <GamePicker />
      <GameRules />
    </div>
  );
};
