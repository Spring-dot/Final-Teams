import React, { Component } from 'react'
import Landingpage from './landingpage'
import Video from './Video'
import Home from './Home'
import Chatroom from './Chat'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" exact component={Landingpage} />
						<Route path="/home" exact component={Home} />
						<Route path="/:url" component={Video} />
						<Route path="/:url" component={Chatroom} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;