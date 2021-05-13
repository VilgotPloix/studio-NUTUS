import React from 'react'
import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home/index'
import Works from './pages/Works/index'
import About from './pages/About/index'
import DetailPage from './pages/DetailPage/index'

import ThemeContextProvider from './data/ThemeContext'


export default function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Router>
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/works" exact>
                <Works />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/works/:slug'>
                <DetailPage />
              </Route>
            </Switch>
          </main>
        </Router>
      </ThemeContextProvider>
    </div>
  )
}
