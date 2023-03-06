/* eslint-disable react/prop-types */
import { Component } from 'react';

interface ErrorBoundaryProps {
  children: JSX.Element;
}

interface ErrorBoundaryState {
  hasError: boolean;
}
export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps, state: ErrorBoundaryState) {
    super(props, state);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <p>Something wrong with this page or component. Please, try later.</p>
      );
    }

    return children;
  }
}
