import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { Breakpoints } from "../../utils/breakpoints";
import gameScoreStyles from "./GameScore.module.scss";

interface IProps {
  score: number;
}

export const GameScore = ({ score }: IProps) => {
  return (
    <div className={gameScoreStyles.wrapper}>
      <div className={gameScoreStyles.logoWrapper}>
        <Image
          src={Logo}
          alt="Rock Paper Scissors"
          fill
          sizes={`
            (min-width: ${Breakpoints.md}) 159px,
            83px; 
          `}
        />
      </div>
      <div className={gameScoreStyles.scoreWrapper}>
        <p className={gameScoreStyles.scoreText}>Score</p>
        <p className={gameScoreStyles.scoreValueText}>{score}</p>
      </div>
    </div>
  );
};
