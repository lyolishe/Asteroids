import React, { Component } from 'react';
// import './style.css';
import style from './style.css';
import SignFields from './SignFields';

interface State {
    fields: Record<string, unknown>[];
    addText: string;
    filterText: string;
}

type Props = {
    typeBackground: string,
    title: string
}

export default class Sign extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            fields: [
                { name: 'name' },
            ],
            addText: '',
            filterText: '',
        };
    }

    private getMainClassName = () => {
        let className = style.menu;
        if (this.props.typeBackground && this.props.typeBackground === 'login') {
            className += ` ${style.loginBackground}`;
        } else {
            className += ` ${style.signBackground}`;
        }
        return className;
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

    // private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     console.log(this.state);
    // }

    public render() {
        const { addText, fields, filterText } = this.state;

        return (
            <main className={this.getMainClassName()}>
                <div className={style}>{this.props.title}</div>
                <form>
                    <SignFields inputOnChange={this.handleInputChange} fields={fields} />
              </form>
          </main>

        );
    }
}
