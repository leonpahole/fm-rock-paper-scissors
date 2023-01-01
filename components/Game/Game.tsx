import gameStyles from "./Game.module.scss";
import { GameBoard } from "../GameBoard/GameBoard";
import { GameRules } from "../GameRules/GameRules";
import { GameScore } from "../GameScore/GameScore";

export const Game = () => {
  return (
    <div className={gameStyles.wrapper}>
      <GameScore />
      <GameBoard />
      <GameRules />
    </div>
  );
};
