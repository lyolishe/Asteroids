import React, { Component } from 'react';

import Input from '../../Input';
import { InputProps } from '../../Input/Input';

type Props = {
    inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fields: InputProps[]
};

export default class SignFields extends Component<Props> {
    public render() {
        const { inputOnChange, fields } = this.props;
        const listField = fields.map((field) => <Input key={field.name} name={field.name} onChange={inputOnChange} value={field.value} />);

        console.log(fields);

        return (
            listField
        );
    }
}
