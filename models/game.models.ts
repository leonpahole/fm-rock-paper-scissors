import PaperIcon from "../public/images/icon-paper.svg";
import RockIcon from "../public/images/icon-rock.svg";
import ScissorsIcon from "../public/images/icon-scissors.svg";

export namespace GameModels {
  export type Symbol = "rock" | "paper" | "scissors";
  export type Color = "red" | "yellow" | "blue";

  export interface SymbolData {
    color: Color;
    image: {
      src: string;
      alt: string;
    };
  }

  const SymbolMap: Record<Symbol, SymbolData> = {
    rock: {
      color: "red",
      image: {
        src: RockIcon,
        alt: "Scissors",
      },
    },
    paper: {
      color: "blue",
      image: {
        src: PaperIcon,
        alt: "Paper",
      },
    },
    scissors: {
      color: "yellow",
      image: {
        src: ScissorsIcon,
        alt: "Scissors",
      },
    },
  };

  export const getSymbolData = (symbol: Symbol): SymbolData => {
    return SymbolMap[symbol];
  };

  export type SymbolList = {
    symbol: Symbol;
    className: string;
  }[];
}
