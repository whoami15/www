import React, { Component } from 'react'
import { debounce } from 'lodash'

export default function debounceRender (ComponentToDebounce, wait = 300) {
  return class DebouncedContainer extends Component {
    updateDebounced = debounce(this.forceUpdate, wait)

    shouldComponentUpdate () {
      this.updateDebounced()
      return false
    }

    componentWillUnmount () {
      this.updateDebounced.cancel()
    }

    render () {
      return <ComponentToDebounce {...this.props} />
    }
  }
}
