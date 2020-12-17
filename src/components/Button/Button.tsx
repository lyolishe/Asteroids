import React, { Component } from 'react';

type OwnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = OwnProps & {
    text: string
};

export default class Button extends Component<ButtonProps> {
    public render() {
        const { onClick, text, className } = this.props;

        return (
            <button className={className} onClick={onClick}>
                {text}
          </button>
        );
    }
}
