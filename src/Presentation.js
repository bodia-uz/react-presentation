import React from 'react';
// Import Spectacle Core tags
import {
    Spectacle,
    Deck,
    Slide,
    Heading,
    Link,
    Text,
    CodePane,
    Table,
    TableRow,
    TableItem,
    Appear,
    List,
    ListItem,
    Layout,
    Fill
} from "spectacle";

import LifecycleExample from './LifecycleExample';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: '#2d2d2d',
  secondary: '#61dafb',
  tertiary: '#61dafb',
  quartenary: '#e9e9e9'
});

function Presentation() {
  return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide>
            <Heading size={1} fit lineHeight={1}>
              React
            </Heading>
            <Link href="https://facebook.github.io/react/" target='_blank'>
              <Text bold textColor='quartenary'>https://facebook.github.io/react</Text>
            </Link>
          </Slide>
          <Slide>
            <Heading size={1} fit lineHeight={1}>
              const view = f(data)
            </Heading>
          </Slide>
          <Slide>
            <Table>
              <TableRow>
                <TableItem>HTML</TableItem>
                <TableItem>
                  <CodePane lang='jsx' source={`
<ul class='list'>
  <li>one</li>
  <li>two</li>
</ul>`
                  }>
                  </CodePane>
                </TableItem>
              </TableRow>
              <TableRow>
                <Appear>
                  <TableItem>As an object?</TableItem>
                </Appear>
                <Appear>
                  <TableItem>
                    <CodePane lang='json' source={`
{
  type: 'ul',
  props: {
    class: 'list'
  },
  children: [
    { type: li, props: {}, children: 'One' }
    { type: li, props: {}, children: 'Two' }
  ]
}`
                  }>
                    </CodePane>
                  </TableItem>
                </Appear>
              </TableRow>
              <TableRow>
                <Appear>
                  <TableItem>Helpers?</TableItem>
                </Appear>
                <Appear>
                  <TableItem>
                    <CodePane lang='js' source={`
  createElement('ul', { class: 'list' },
    createElement('li', {}, 'One'),
    createElement('li', {}, 'Two')
  )`
                    }>
                    </CodePane>
                  </TableItem>
                </Appear>
              </TableRow>
              <TableRow>
                <Appear>
                  <TableItem>
                    JSX
                  </TableItem>
                </Appear>
                <Appear>
                  <TableItem>
                    <CodePane lang='js' source={`
  React.createElement('ul', { className: 'list' },
    React.createElement('li', {}, 'One'),
    React.createElement('li', {}, 'Two')
  );
  `
                    }>
                    </CodePane>
                  </TableItem>
                </Appear>
              </TableRow>
            </Table>
          </Slide>
          <Slide>
            <Heading>
              Implementation
            </Heading>
            <List>
              <ListItem>
                <Link href='http://jsbin.com/magafu/edit?js,output' target='_blank'>
                  <Text>Simple</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060' target='_blank'>
                  <Text>Complex</Text>
                </Link>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>
              Getting Started
            </Heading>
            <List>
              <ListItem>
                <Link href='https://jsfiddle.net/reactjs/69z2wepo/' target='_blank'>
                  <Text>JS Sandbox</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='https://github.com/facebookincubator/create-react-app' target='_blank'>
                  <Text>Create React App</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='http://lmgtfy.com/?q=react+starter+kit' target='_blank'>
                  <Text>Starter Kits?</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href='https://facebook.github.io/react/docs/package-management.html' target='_blank'>
                  <Text>Use npm, bower, etc..</Text>
                </Link>
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading fit>
              Smart and Dumb
            </Heading>
            <Layout>
              <Fill>
                <CodePane lang='jsx' source={`
  class Clock extends React.Component {
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
          <Icon type='time'/>
          <Time time={this.state.time}/>
        </div>
      );
    }
  }`
                }>
                </CodePane>
              </Fill>
              <Fill>
                <CodePane lang='jsx' source={`
  function Time({time}) {
    return (
      <time>{formatTime(time, 'HH:MM:SS')}</time>
    );
  }`
                }>
                </CodePane>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading>
              Lifecycle Methods
            </Heading>
            <Link href="https://facebook.github.io/react/docs/component-specs.html" target='_blank'>
              <Text textColor='quartenary'>https://facebook.github.io/react/docs/component-specs.html</Text>
            </Link>
            <CodePane lang='js' source={`
  class LifecycleExample extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    shouldComponentUpdate(nextProps, nextState) { return true; }

    componentWillUpdate(nextProps, nextState) {}

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
      return <div>{/* ... */}</div>
    }
  }`
            }/>
          </Slide>
          <Slide>
            <Heading fit>
              Lifecycle Example
            </Heading>
            <LifecycleExample />
          </Slide>
        </Deck>
      </Spectacle>
  );
}

export default Presentation;