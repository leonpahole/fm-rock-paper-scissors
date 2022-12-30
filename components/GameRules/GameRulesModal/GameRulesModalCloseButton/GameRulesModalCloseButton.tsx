import Image from "next/image";
import CloseIcon from "../../../../public/images/icon-close.svg";
import gameRulesModalCloseButtonStyles from "./GameRulesModalCloseButton.module.scss";

interface IProps {
  showOn: "mobile" | "non-mobile";
  onClick(): void;
}

export const GameRulesModalCloseButton = ({ showOn, onClick }: IProps) => {
  const classMap: Record<typeof showOn, string> = {
    mobile: gameRulesModalCloseButtonStyles.showOnlyOnMobile,
    "non-mobile": gameRulesModalCloseButtonStyles.showOnlyOnNonMobile,
  };

  return (
    <button
      type="button"
      aria-label="Close modal"
      className={`${classMap[showOn]}`}
      onClick={onClick}
    >
      <Image alt="Close" src={CloseIcon} />
    </button>
  );
};
