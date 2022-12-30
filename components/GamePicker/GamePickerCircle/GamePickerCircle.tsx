import gamePickerCircleStyles from "./GamePickerCircle.module.scss";

interface IProps {
  imageSrc: string;
  imageAlt: string;
}

export const GamePickerCircle = ({ imageAlt, imageSrc }: IProps) => {
  return (
    <div className={gamePickerCircleStyles.wrapper}>
      {imageAlt} {imageSrc}
    </div>
  );
};
