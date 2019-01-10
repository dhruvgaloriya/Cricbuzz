import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class MainMenu extends Component {
	render() {
		return(
			<div class="navbar-fixed">
			  	<nav>
				    <Link to ="/" class="brand-logo center">Cricket Web App</Link>
				    <ul id="nav-mobile" class="right hide-on-med-and-down">
				       <li><Link to = "/upcoming">UpComing Matches</Link></li>
				       <li><Link to = "/find">Find Player</Link></li>
				       <li><Link to = "/score">Live Score</Link></li>
				    </ul>
			  	</nav>
		  	</div>
		)
	}
}

export default MainMenu