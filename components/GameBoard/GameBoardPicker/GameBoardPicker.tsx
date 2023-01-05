import Image from "next/image";
import { Flipped } from "react-flip-toolkit";
import gameBoardPickerStyles from "./GameBoardPicker.module.scss";
import { GameBoardCircle } from "../GameBoardCircle/GameBoardCircle";
import TriangleIcon from "../../../public/images/bg-triangle.svg";
import { GameModels } from "../../../models/game.models";
import { usePrefersReducedMotion } from "../../../hooks/usePrefersReducedMotion";

interface IProps {
  onSelect: (symbol: GameModels.Symbol) => void;
}

export const GameBoardPicker = ({ onSelect }: IProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const symbols: GameModels.SymbolList = [
    {
      symbol: "scissors",
      className: gameBoardPickerStyles.scissors,
    },
    {
      symbol: "rock",
      className: gameBoardPickerStyles.rock,
    },
    {
      symbol: "paper",
      className: gameBoardPickerStyles.paper,
    },
  ];

  return (
    <div className={gameBoardPickerStyles.imageWrapper}>
      <Image
        src={TriangleIcon}
        alt=""
        className={gameBoardPickerStyles.image}
      />
      {symbols.map(({ className, symbol }) => (
        <Flipped flipId={symbol} shouldFlip={() => !prefersReducedMotion}>
          {(flippedProps) => (
            <GameBoardCircle
              key={symbol}
              symbol={symbol}
              onClick={() => {
                onSelect(symbol);
              }}
              className={`${gameBoardPickerStyles.circle} ${className}`}
              flippedProps={flippedProps}
            />
          )}
        </Flipped>
      ))}
    </div>
  );
};
