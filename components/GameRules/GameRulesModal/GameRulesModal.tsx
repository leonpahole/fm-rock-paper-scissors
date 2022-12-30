import Modal from "react-modal";
import Image from "next/image";
import ImageRules from "../../../public/images/image-rules.svg";
import gameRulesModalStyles from "./GameRulesModal.module.scss";
import { GameRulesModalCloseButton } from "./GameRulesModalCloseButton/GameRulesModalCloseButton";

interface IProps {
  isOpen: boolean;
  onClose(): void;
}

export const GameRulesModal = ({ isOpen, onClose }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Game rules"
      className={gameRulesModalStyles.modal}
      overlayClassName={gameRulesModalStyles.overlay}
    >
      <header className={gameRulesModalStyles.header}>
        <h2 className={gameRulesModalStyles.heading}>Rules</h2>
        <GameRulesModalCloseButton onClick={onClose} showOn="non-mobile" />
      </header>
      <section className={gameRulesModalStyles.imageWrapper}>
        <Image
          alt="An image showing that scissors beat paper, paper beats rock and rock beats scissors"
          src={ImageRules}
          width="305"
          height="271"
        />
      </section>
      <GameRulesModalCloseButton onClick={onClose} showOn="mobile" />
    </Modal>
  );
};
