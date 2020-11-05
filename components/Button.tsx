import * as React from 'react'
import { ReactNode } from 'react';
import styles from './Button.module.css'

type myString = string;

type Props = {
    text?: string;
    children: ReactNode;
    handleOnClick: () => void;
};

const Button = (props: Props) => {
    //const { text, children, handleOnClick } = props;
    const text = props.text;
    const children = props.children;
    const handleOnClick = props.handleOnClick;

    return (
        <button
            className={styles.Button}
            onClick={handleOnClick}
        >
            {children}
        </button>
    );
}

export default Button;