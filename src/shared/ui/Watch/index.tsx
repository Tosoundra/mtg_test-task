import React, { Component, ReactNode } from 'react';

interface WatchState {
  time: Date;
}

export class Watch extends React.Component<{}, WatchState> {
  private intervalID?: NodeJS.Timeout;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  updateTime() {
    this.setState({
      time: new Date(),
    });
  }

  render(): ReactNode {
    const { time } = this.state;
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0');

    return (
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    );
  }
}
