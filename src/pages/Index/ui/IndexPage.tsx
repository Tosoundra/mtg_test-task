import { Header } from '@widgets/Header';
import { Main } from '@widgets/Main';
import React from 'react';

export class IndexPage extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}
