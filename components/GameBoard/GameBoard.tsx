import { useCallback, useState } from "react";
import { Flipper } from "react-flip-toolkit";
import { GameModels } from "../../models/game.models";
import gameBoardStyles from "./GameBoard.module.scss";
import { GameBoardPicker } from "./GameBoardPicker/GameBoardPicker";
import { GameBoardResult } from "./GameBoardResult/GameBoardResult";

interface IProps {
  onWin: () => void;
}

export const GameBoard = ({ onWin }: IProps) => {
  const [selectedSymbol, setSelectedSymbol] =
    useState<GameModels.Symbol | null>(null);

  const [computerSelectedSymbol, setComputerSelectedSymbol] =
    useState<GameModels.Symbol | null>(null);

  const onSelect = (symbol: GameModels.Symbol) => {
    setSelectedSymbol(symbol);
    setComputerSelectedSymbol(GameModels.pickRandom());
  };

  const onPlayAgain = () => {
    setSelectedSymbol(null);
    setComputerSelectedSymbol(null);
  };

  const onResultRevealed = useCallback(() => {
    if (!selectedSymbol || !computerSelectedSymbol) {
      return;
    }

    const hasWon =
      GameModels.getRoundResult(selectedSymbol, computerSelectedSymbol) ===
      "chosen-won";
    if (hasWon) {
      onWin();
    }
  }, [computerSelectedSymbol, onWin, selectedSymbol]);

  const showResult = selectedSymbol && computerSelectedSymbol;

  let content;
  if (showResult) {
    content = (
      <GameBoardResult
        selectedSymbol={selectedSymbol!}
        computerSelectedSymbol={computerSelectedSymbol!}
        onRevealed={onResultRevealed}
        onPlayAgain={onPlayAgain}
      />
    );
  } else {
    content = <GameBoardPicker onSelect={onSelect} />;
  }

  return (
    <Flipper flipKey={showResult} className={gameBoardStyles.wrapper}>
      {content}
    </Flipper>
  );
};
