import React from 'react';
import logo from '@images/logo.png';

export class Logo extends React.Component {
  render(): React.ReactNode {
    return <img src={logo} alt="Logo" />;
  }
}
