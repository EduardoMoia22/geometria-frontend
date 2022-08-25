import { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../../../../node_modules/phosphor-react/dist/index";
import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isCorrect: boolean;
}

export function AnswerButton({ children, isCorrect, ...rest }: ButtonProps) {
  return (
    <button className={styles.button} {...rest}>
      <span>{children}</span>
    </button>
  );
}
