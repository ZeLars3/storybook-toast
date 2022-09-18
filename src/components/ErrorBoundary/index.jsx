import { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <h1>Something wrong</h1>
    }

    return children
  }
}
