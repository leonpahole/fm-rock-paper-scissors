import gameBoardCircleStyles from "./GameBoardCircle.module.scss";

interface IProps {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  color: "red" | "yellow" | "blue";
}

export const GameBoardCircle = ({
  onClick,
  className,
  color,
  children,
}: IProps) => {
  const colorClassMap: Record<typeof color, string> = {
    blue: gameBoardCircleStyles.blue,
    red: gameBoardCircleStyles.red,
    yellow: gameBoardCircleStyles.yellow,
  };

  return (
    <button
      className={`${gameBoardCircleStyles.imageBorderOuter} ${
        className || ""
      } ${colorClassMap[color]}`}
      type="button"
      onClick={onClick}
    >
      <div className={gameBoardCircleStyles.imageBorderHover} />

      <div className={gameBoardCircleStyles.imageBorderInner}>
        <div className={gameBoardCircleStyles.imageWrapperOuter}>
          <div className={gameBoardCircleStyles.imageWrapperInner}>
            {children}
          </div>
        </div>
      </div>
    </button>
  );
};
