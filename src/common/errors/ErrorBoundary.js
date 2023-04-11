import {Component} from "react";

export default class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch (errors, errorInfo) {
    console.log(errors, errorInfo);
    this.setState({
      error: true
    })
  }

  render() {
    if(this.state.error) {
       return <h2>Errors, look on console</h2>
    }
    return this.props.children;

  }
}