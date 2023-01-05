import Image from "next/image";
import { GameModels } from "../../../models/game.models";
import gameBoardCircleStyles from "./GameBoardCircle.module.scss";

interface IProps {
  onClick: () => void;
  className?: string;
  symbol: GameModels.Symbol | null;
  size?: "large" | "regular";
  disableInteractivity?: boolean;
  hasWon?: boolean;
}

const GameBoardCircleEmpty = ({ className }: { className?: string }) => {
  return (
    <div className={`${gameBoardCircleStyles.emptyCircle} ${className}`} />
  );
};

const GameBoardCircleWithImage = ({
  symbol,
  size = "regular",
  onClick,
  className,
  disableInteractivity = false,
  hasWon = false,
}: IProps) => {
  const symbolData = GameModels.getSymbolData(symbol!);
  const colorClassMap: Record<GameModels.Color, string> = {
    blue: gameBoardCircleStyles.blue,
    red: gameBoardCircleStyles.red,
    yellow: gameBoardCircleStyles.yellow,
  };

  const sizeClassMap: Record<typeof size, string> = {
    regular: gameBoardCircleStyles.regularSize,
    large: gameBoardCircleStyles.largeSize,
  };

  return (
    <button
      className={`${gameBoardCircleStyles.imageBorderOuter} ${
        className || ""
      } ${colorClassMap[symbolData.color]} ${sizeClassMap[size]} ${
        hasWon ? gameBoardCircleStyles.hasWon : ""
      }`}
      type="button"
      onClick={onClick}
      disabled={disableInteractivity}
    >
      {!disableInteractivity && (
        <div className={gameBoardCircleStyles.imageBorderHover} />
      )}

      <div className={gameBoardCircleStyles.imageBorderInner}>
        <div className={gameBoardCircleStyles.imageWrapperOuter}>
          <div className={gameBoardCircleStyles.imageWrapperInner}>
            <Image src={symbolData.image.src} alt={symbolData.image.alt} />
          </div>
        </div>
      </div>
    </button>
  );
};

export const GameBoardCircle = (props: IProps) => {
  const { symbol } = props;
  if (symbol == null) {
    return <GameBoardCircleEmpty />;
  }

  return <GameBoardCircleWithImage {...props} />;
};
