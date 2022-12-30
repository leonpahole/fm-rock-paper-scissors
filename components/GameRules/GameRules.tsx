import { useState } from "react";
import gameRulesStyles from "./GameRules.module.scss";
import { GameRulesModal } from "./GameRulesModal/GameRulesModal";

export const GameRules = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={gameRulesStyles.wrapper}>
      <button
        type="button"
        className={gameRulesStyles.button}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Rules
      </button>
      <GameRulesModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};
