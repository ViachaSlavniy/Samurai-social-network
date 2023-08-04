import React from "react";
import cn from 'classnames';
import styles from './button.module.scss';

type ButtonProps = {
    className?: string;
    buttonType: "primary" | "secondary";
    onClick?: () => void;
    type?: "submit" | "reset" | "button";
    children: React.ReactNode;
}

//TODO Реализовать флаг inProgress для дизейбла кнопки

export const Button = ({buttonType, type, onClick, className, children}: ButtonProps) => {
    return (
        <button className={cn(styles.button, className, styles[`button-${buttonType}`])}
                type={type ? type : "button"}
                onClick={onClick}
        >
            {children}
        </button>
    );
};
