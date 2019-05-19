import React, { Component } from 'react'
import { silentAuth } from './src/utils/auth'

class SessionCheck extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
    console.log('set loading to:', this.state.loading)
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => (
  <SessionCheck>{element}</SessionCheck>
)
