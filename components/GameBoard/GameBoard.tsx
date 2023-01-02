import { useState } from "react";
import { GameModels } from "../../models/game.models";
import gameBoardStyles from "./GameBoard.module.scss";
import { GameBoardPicker } from "./GameBoardPicker/GameBoardPicker";
import { GameBoardResult } from "./GameBoardResult/GameBoardResult";

export const GameBoard = () => {
  const [selectedSymbol, setSelectedSymbol] =
    useState<GameModels.Symbol | null>(null);

  let content;
  if (selectedSymbol) {
    content = <GameBoardResult selectedSymbol={selectedSymbol} />;
  } else {
    content = <GameBoardPicker onSelect={setSelectedSymbol} />;
  }

  return <div className={gameBoardStyles.wrapper}>{content}</div>;
};
