import React, { PureComponent } from 'react';

type OwnProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = OwnProps & {
    text: string
};

export default class Button extends PureComponent<ButtonProps> {
  public render(): JSX.Element {
    const { onClick, text, className } = this.props;

    return (
      <button className={className} onClick={onClick}>
        {text}
      </button>
    );
  }
}
