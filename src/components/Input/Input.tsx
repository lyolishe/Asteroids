import React, { Component } from 'react';

type OwnProps = React.InputHTMLAttributes<HTMLInputElement>;
export type InputProps = OwnProps;

export default class Input extends Component<InputProps> {
    public render() {
        const { onChange, value, name, className, type } = this.props;

        return (
            <input type={type} className={className} name={name} onChange={onChange} value={value} />
        );
    }
}
