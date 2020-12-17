import React, { PureComponent } from 'react';
import SignIn from "./views/SignIn";

export default class App extends PureComponent {
  public render(): JSX.Element {
    return (
      <SignIn />
    );
  }
}
