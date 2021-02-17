import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// route
import { BrowserRouter as Router, Route } from 'react-router-dom'

// components
import CakeBoth from './components/CakeBoth'
import IceCream from './components/IceCream'

// redux
import { Provider } from 'react-redux'
import store from './store/store'
import Users from './components/Users'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={App} />
        <Route exact path='/icecreams' component={IceCream} />
        <Route exact path='/cakes' component={CakeBoth} />
        <Route exact path='/users' component={Users} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
