import { GamePicker } from "../GamePicker/GamePicker";
import { GameRules } from "../GameRules/GameRules";
import { GameScore } from "../GameScore/GameScore";

export const GameBoard = () => {
  return (
    <div>
      <GameScore />
      <GamePicker />
      <GameRules />
    </div>
  );
};
