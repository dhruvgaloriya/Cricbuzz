import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import MatchList from './MatchList'
import Find from "./Find"
import Player from "./Player"
import Home from "./Home"
import Whoops404 from "./Whoops404"
import Score from "./Score"
import LiveScore from './LiveScore'

const routes = (
    <div>
    	<Route exact path="/" component={Home}/>
        <Route path="/find" component={Find} />
        <Route path="/upcoming" component={MatchList} />
        <Route path="/player/:id" component={Player} />
        <Route exact path="/score" component={Score}/>
        <Route path="/score/:id" component={LiveScore} />
    </div>
);

export default routes;