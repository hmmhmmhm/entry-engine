import * as React from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import "./../assets/scss/App.scss"

const App = (props) => {
    return (
        <Router>
          <div className = "app">
            <Route exact = {true} path = "/" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/topics" component = {Topics} />
            <Route component = {Unknown} />
          </div>
        </Router>
    )
}

function Unknown() {
    return (
        <div>
            <Header/>
            <h2>Unknown URL</h2>
        </div>
    )
}

function Home() {
    return (
        <div>
            <Header/>
            <h2>Home</h2>
        </div>
    )
}

function About() {
    return (
        <div>
            <Header/>
            <h2>About</h2>
        </div>
    )
}

function Topic({ match }) {
    return (
        <div>
            <Header/>
            <h3>Requested Param: {match.params.id}</h3>
        </div>
    )
}

function Topics({ match }) {
    return (
      <div>
        <Header/>
        <h2>Topics</h2>

        <ul>
          <li>
            <Link to = {`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to = {`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>

        <Route path = {`${match.path}/:id`} component = {Topic} />
        <Route
          exact = {true}
          path = {match.path}
          render = {() => <h3>Please select a topic.</h3>}
        />
      </div>
    )
}

function Header() {
    return (
      <ul>
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/about">About</Link>
        </li>
        <li>
          <Link to = "/topics">Topics</Link>
        </li>
      </ul>
    )
}

export default App
