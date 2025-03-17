import { Component, ErrorInfo, ReactNode } from 'react';

type TErrorBoundaryProps = {
  children: ReactNode;
};
type TErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component {
  state: TErrorBoundaryState;
  constructor(public props: TErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error);
    console.log(info);
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong.</h3>;
    }
    return this.props.children;
  }
}
