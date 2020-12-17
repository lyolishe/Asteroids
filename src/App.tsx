import React, { PureComponent } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Sign from './components/Sign';

export default class App extends PureComponent {
    public render() {
        return (
            <div>
                <Sign typeBackground="login" title="Login" />
          </div>
        );
    }

    private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;

        this.setState({
            [name]: value,
        });
    }

    private handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(this.state);
    }
}
