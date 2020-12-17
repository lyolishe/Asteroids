import React, { Component } from 'react';
import style from './style.css';
import SignFields from './SignFields';
import SignButtons from './SignButtons';
import { SignButtonsProps } from './SignButtons/SignButtons';

type Props = {
    typeBackground: string,
    title: string,
    fields: {
        label: string,
        name: string,
        className: string,
        type?: string
    }[];
    buttons: SignButtonsProps[],
    handleInputChange: (event: any) => void
}

export default class Sign extends Component<Props> {
    private getMainClassName = () => {
      const { typeBackground } = this.props;
      let className = style.signForm;
      if (typeBackground === 'login') {
        className += ` ${style.loginBackground}`;
      } else {
        className += ` ${style.signBackground}`;
      }
      return className;
    }

    public render(): JSX.Element {
      const {
        fields, buttons, handleInputChange, title,
      } = this.props;

      return (
        <main className={this.getMainClassName()}>
          <div className={style.formTitle}>{title}</div>
          <form>
            <SignFields inputOnChange={handleInputChange} fields={fields} />
            <SignButtons buttons={buttons} />
          </form>
        </main>

      );
    }
}
