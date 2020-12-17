import React, { Component } from 'react';
import style from '../../components/Sign/style.css';
import { SignButtonsProps } from '../../components/Sign/SignButtons/SignButtons';
import Sign from '../../components/Sign';
import handleInputChange from '../../utils/handleInputChange';

interface State {
  fields: {
    label: string,
    name: string,
    className: string,
    type?: string
  }[];
  buttons: SignButtonsProps[]
}

type Props = Record<string, unknown>

export default class Login extends Component<Props, State> {
  private handleInputChange: OmitThisParameter<(event: any) => void>;

  constructor(props: Props) {
    super(props);
    this.state = {
      fields: [
        {
          label: 'Логин',
          name: 'login',
          className: style.signFormInput,
        },
        {
          label: 'Пароль',
          name: 'password',
          className: style.signFormInput,
          type: 'password',
        },
      ],
      buttons: [
        {
          className: style.signFormButtonBlockFormSubmit,
          text: 'Авторизоваться',
          action: this.handleClick,
        },
        {
          className: style.signFormButtonBlockFormCancel,
          text: 'Нет аккаунта?',
          action: this.handleClick,
        },
      ],
    };
    this.handleInputChange = handleInputChange.bind(this);
  }

  private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(this.state);
  }

  public render(): JSX.Element {
    const { buttons, fields } = this.state;
    return (
      <Sign
        typeBackground="login"
        title="Авторизация"
        buttons={buttons}
        fields={fields}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}
