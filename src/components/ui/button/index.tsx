import { ButtonHTMLAttributes, ReactNode } from "react";
import { Spinner } from "../../../../node_modules/phosphor-react/dist/index";
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  loading?: boolean;
}

export function Button({ children, loading }: ButtonProps){
  return(
    <button className={styles.button} disabled={loading}>
     {loading ? (
        <Spinner size={32} weight="fill" className={styles.spin}/>
      ) : (
        <a className="text-white">{children}</a>
      )}
      
      
    </button>
  ) 
}