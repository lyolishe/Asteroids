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

export default class SignIn extends Component<Props, State> {
  private handleInputChange: OmitThisParameter<(event: any) => void>;

  constructor(props: Props) {
    super(props);
    this.state = {
      fields: [
        {
          label: 'Имя',
          name: 'first_name',
          className: style.signFormInput,
          type: 'text',
        },
        {
          label: 'Фамилия',
          name: 'second_name',
          className: style.signFormInput,
          type: 'text',
        },
        {
          label: 'Логин',
          name: 'login',
          className: style.signFormInput,
          type: 'text',
        },
        {
          label: 'Почта',
          name: 'email',
          className: style.signFormInput,
          type: 'text',
        },
        {
          label: 'Телефон',
          name: 'phone',
          className: style.signFormInput,
          type: 'text',
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
          text: 'Регистрация',
          action: this.handleClick,
        },
        {
          className: style.signFormButtonBlockFormCancel,
          text: 'Войти',
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
        typeBackground="signIn"
        title="Регистрация"
        buttons={buttons}
        fields={fields}
        handleInputChange={this.handleInputChange}
      />
    );
  }
}
