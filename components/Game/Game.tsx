import { useCallback, useEffect, useState } from "react";
import gameStyles from "./Game.module.scss";
import { GameBoard } from "../GameBoard/GameBoard";
import { GameRules } from "../GameRules/GameRules";
import { GameScore } from "../GameScore/GameScore";
import { GameModels } from "../../models/game.models";

export const Game = () => {
  const [gameScore, setGameScore] = useState<number>(0);

  useEffect(() => {
    setGameScore(GameModels.fetchScore());
  }, []);

  const incrementScore = useCallback(() => {
    setGameScore((s) => {
      const newScore = s + 1;
      GameModels.storeScore(newScore);
      return newScore;
    });
  }, []);

  return (
    <div className={gameStyles.wrapper}>
      <GameScore score={gameScore} />
      <GameBoard onWin={incrementScore} />
      <GameRules />
    </div>
  );
};
