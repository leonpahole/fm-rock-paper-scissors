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

  export const pickRandom = (): Symbol => {
    const symbols = Object.keys(SymbolMap) as Symbol[];
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
  };

  const ScoreStorageKey = "__current_score";

  export const fetchScore = (): number => {
    const storedGameScore = Number(localStorage.getItem(ScoreStorageKey)) ?? 0;
    if (storedGameScore < 0) {
      return 0;
    }

    return storedGameScore;
  };

  export const storeScore = (score: number): void => {
    localStorage.setItem(ScoreStorageKey, score.toString());
  };

  const BeatsMap: Record<Symbol, Symbol> = {
    paper: "rock",
    rock: "scissors",
    scissors: "paper",
  };

  export type RoundResult = "chosen-won" | "opponent-won" | "tie";

  export const getRoundResult = (
    chosen: Symbol,
    opponent: Symbol
  ): RoundResult => {
    if (chosen === opponent) {
      return "tie";
    }

    if (BeatsMap[chosen] === opponent) {
      return "chosen-won";
    }

    return "opponent-won";
  };

  export const getRoundResultText = (
    chosen: Symbol,
    opponent: Symbol
  ): string => {
    const map: Record<RoundResult, string> = {
      tie: "It's a tie!",
      "chosen-won": "You win",
      "opponent-won": "You lose",
    };

    const result = getRoundResult(chosen, opponent);
    return map[result];
  };
}
