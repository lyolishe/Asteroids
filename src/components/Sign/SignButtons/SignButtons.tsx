import React, { Component } from 'react';
import style from './signButtons.css';
import Button from "../../Button";
import {ButtonProps} from "../../Button/Button";

export type SignButtonsProps = ButtonProps & {
    text: string,
    action: (event: any) => void
}

type Props = {
    buttons: SignButtonsProps[]
};

export default class SignButtons extends Component<Props> {
    public render() {
        return (
            <div className={style.buttonBlock}>
                {this.getButtonList()}
            </div>
        );
    }

    private getButtonList = () => {
        const { buttons } = this.props;
        return buttons.map((button, index) => {
            return (
                <Button key={index} className={button.className} text={button.text} onClick={button.action}/>
            )
        });
    }
}
