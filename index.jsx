/** @jsx createElement */

import { createElement } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import { batchedSubscribe } from 'redux-batched-subscribe'
import { composeWithDevTools } from 'redux-devtools-extension'

function App (props) {
  return <input type='text' value={props.value} onChange={function (e) { props.update(e.target.value) }} />
}

var ConnectedApp = connect(
  function (props) { return props },
  { update: update }
)(App)

var UPDATE = 'update'

function update (payload) {
  return {
    type: UPDATE,
    payload: payload
  }
}

function reducer (state, action) {
  if (action.type === UPDATE) {
    return { value: action.payload }
  }
  return { value: '' }
}

var store = createStore(
  reducer,
  composeWithDevTools(
    batchedSubscribe((notify) => notify())
  )
)

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
, window.document.getElementById('app'))
