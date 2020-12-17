import React, { Component } from 'react';
import style from './style.css';
import SignFields from './SignFields';
import SignButtons from "./SignButtons";
import {SignButtonsProps} from "./SignButtons/SignButtons";

interface State {
}

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

export default class Sign extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        // this.state = {
        //     fields: [
        //         {
        //             label: 'Логин',
        //             name: 'login',
        //             className: style.signFormInput,
        //         },
        //         {
        //             label: 'Пароль',
        //             name: 'password',
        //             className: style.signFormInput,
        //             type: 'password',
        //         }
        //     ],
        //     buttons: [
        //         {
        //             className: style.signFormButtonBlockFormSubmit,
        //             text: 'Авторизоваться',
        //             action: this.handleClick,
        //         },
        //         {
        //             className: style.signFormButtonBlockFormCancel,
        //             text: 'Нет аккаунта?',
        //             action: this.handleClick
        //         }
        //     ],
        // };
    }

    private getMainClassName = () => {
        let className = style.signForm;
        if (this.props.typeBackground && this.props.typeBackground === 'login') {
            className += ` ${style.loginBackground}`;
        } else {
            className += ` ${style.signBackground}`;
        }
        return className;
    }

    public render() {
        const { fields, buttons, handleInputChange } = this.props;

        return (
            <main className={this.getMainClassName()}>
                <div className={style.formTitle}>{this.props.title}</div>
                <form>
                    <SignFields inputOnChange={handleInputChange} fields={fields} />
                    <SignButtons buttons={buttons}/>
              </form>
          </main>

        );
    }
}
