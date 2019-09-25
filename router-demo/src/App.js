import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Topics from './Topics'

class App extends React.Component {
	render() {
		return(
			<div className="App">
				<Router>
					<div className="left">
						<ul>
							<li>
							<Link to="/">Home</Link>
							</li>
							<li>
							<Link to="/about">About</Link>
							</li>
							<li>
							<Link to="/topics">Topics</Link>
							</li>
						</ul>
					</div>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/topics" component={Topics} />
				</Router>
			</div>
		)
	}
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default App