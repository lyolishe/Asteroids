import React, { Component } from 'react';
import style from '../../components/Sign/style.css';
import {SignButtonsProps} from "../../components/Sign/SignButtons/SignButtons";
import Sign from "../../components/Sign";

interface State {
    fields: {
        label: string,
        name: string,
        className: string,
        type?: string
    }[];
    buttons: SignButtonsProps[]
}

type Props = {}

export default class Login extends Component<Props, State> {
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
                }
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
                    action: this.handleClick
                }
            ],
        };
    }

    private handleInputChange = (event: any) => {
        const { fields } = this.state;
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        const toggle = fields.map((input) => (input.name === name ? { ...input, value } : input));
        this.setState({
            fields: toggle,
        } as State);
    }

    private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(this.state);
    }

    public render() {
        const {buttons, fields} = this.state;
        return (
            <Sign typeBackground={'login'} title={'Авторизация'} buttons={buttons} fields={fields} handleInputChange={this.handleInputChange}/>
        );
    }
}
