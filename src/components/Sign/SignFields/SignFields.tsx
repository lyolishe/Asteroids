import React, { Component } from 'react';
import Input from '../../Input';
import { InputProps } from '../../Input/Input';
import style from './signFields.css';

type FieldProps = InputProps & {
    label: string
}

type Props = {
    inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fields: FieldProps[]
};

export default class SignFields extends Component<Props> {
    private getFieldList = () => {
      const { inputOnChange, fields } = this.props;
      return fields.map((field) => (
        <div key={field.name} className={style.inputBlock}>
          <label className={style.formLabel}>
            {field.label}
            <Input
              type={field.type}
              className={field.className}
              name={field.name}
              onChange={inputOnChange}
              value={field.value}
            />
          </label>
        </div>
      ));
    }

    public render(): JSX.Element[] {
      return (
        this.getFieldList()
      );
    }
}
