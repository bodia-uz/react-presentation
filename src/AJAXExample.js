import React, { Component } from 'react';

import {
    Layout,
    Fill,
    Link,
    Text,
    Image
} from "spectacle";

// https://facebook.github.io/react/tips/initial-ajax.html
// http://andrewhfarmer.com/react-ajax-best-practices/

class AJAXExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      examples: []
    };
  }

  componentDidMount() {
    fetch(`/data.json`)
        .then(response => response.json())
        .then(examples => {
          this.setState({examples: examples});
        })
  }

  render() {
    const examples = this.state.examples;

    return (
        <div>
            <Layout>
              {examples.map(({title, url}) =>
                <Fill key={url}>
                  <Link href={url} target='_blamk'>
                    <Text>
                      {title}
                    </Text>
                  </Link>
                </Fill>
              )}
            </Layout>
            <Layout style={{verticalAlign: 'top'}}>
              {examples.map(({imageUrl}) =>
                <Fill key={imageUrl}>
                  <Image
                      src={imageUrl}
                      width='200px'
                  />
                </Fill>
              )}
            </Layout>
        </div>
    )
  }
}

export default AJAXExample;