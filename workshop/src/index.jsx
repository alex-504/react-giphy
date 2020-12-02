import '../assets/stylesheets/application.scss';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'node-sass';

// const Hello = (props) => {
//   const { name } = props;
//   return <h1>Hi { props.name }, from React 😀</h1>
// };



class Hello extends Component {
  constructor(props) {
    super(props);
  }
    render() {
    const { name } = this.props;
    return <h1>Hi { props.name }, from React  Class 😀.</h1>
  }
 }


const root = document.querySelector('#root');
if (root) {
  // render some React code
  ReactDOM.render(<Hello name="Alexandre" />, root);
}