import React, { Component } from 'react';

// https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods

class Counter extends Component {
  constructor(props) {
    super(props);

    console.log('Counter.constructor', props);
  }

  componentWillMount() {
    console.log('Counter.componentWillMount');
  }

  componentDidMount() {
    console.log('Counter.componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.group('update');
    console.log('Counter.componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Counter.shouldComponentUpdate', nextProps, nextState);

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Counter.componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Counter.componentDidUpdate', prevProps, prevState);
    console.groupEnd('update');
  }

  componentWillUnmount() {
    console.log('Counter.componentWillUnmount');
  }

  render() {
    const { value, increment } = this.props;

    return (
        <div>
          <button onClick={increment}>
            Click me!
          </button>
          {
            value ?
                <span> ({this.props.value} times clicked) </span>:
                null
          }
        </div>
    )
  }
}

class LifecycleExample extends Component {
  constructor(props) {
    super(props);

    this.state = {value: 0};
  }

  render() {
    return (
      <div>
        <Counter
            value={this.state.value}
            increment={() => {
              this.setState(state => ({value: state.value +1 }))
            }}
        />
      </div>
    );
  }
}

export default LifecycleExample;