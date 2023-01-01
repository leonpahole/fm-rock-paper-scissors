import Image from "next/image";
import gameBoardStyles from "./GameBoard.module.scss";
import { GameBoardCircle } from "./GameBoardCircle/GameBoardCircle";
import PaperIcon from "../../public/images/icon-paper.svg";
import RockIcon from "../../public/images/icon-rock.svg";
import ScissorsIcon from "../../public/images/icon-scissors.svg";
import TriangleIcon from "../../public/images/bg-triangle.svg";

export const GameBoard = () => {
  return (
    <div className={gameBoardStyles.wrapper}>
      <div className={gameBoardStyles.imageWrapper}>
        <Image src={TriangleIcon} alt="" className={gameBoardStyles.image} />
        <GameBoardCircle
          color="yellow"
          onClick={() => {}}
          className={`${gameBoardStyles.circle} ${gameBoardStyles.scissors}`}
        >
          <Image src={ScissorsIcon} alt="Scissors" />
        </GameBoardCircle>
        <GameBoardCircle
          color="blue"
          onClick={() => {}}
          className={`${gameBoardStyles.circle} ${gameBoardStyles.paper}`}
        >
          <Image src={PaperIcon} alt="Paper" />
        </GameBoardCircle>
        <GameBoardCircle
          color="red"
          onClick={() => {}}
          className={`${gameBoardStyles.circle} ${gameBoardStyles.rock}`}
        >
          <Image src={RockIcon} alt="RockIcon" />
        </GameBoardCircle>
      </div>
    </div>
  );
};
