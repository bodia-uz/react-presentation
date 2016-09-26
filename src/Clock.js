import React, { Component } from 'react';
import format from 'date-fns/format';

function Time({time}) {
  return (
      <time>{format(time, 'HH:MM:ss')}</time>
  );
}

function Icon() {
  return (
      <span>&#9716;</span>
  );
}

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {time: Date.now()};
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({time: Date.now()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
        <div>
          <Icon type='time' />
          &nbsp;
          <Time time={this.state.time}/>
        </div>
    );
  }
}

export default Clock;
