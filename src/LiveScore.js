import React, {Component} from 'react';
import {Tabs,Tab,Table,Row,Preloader,Col,s} from  'react-materialize'
import './index.css'

class LiveScore extends Component {
	state = {
		loading:false,
		livescore :null,
		error:false,
		squad:null,
	}

	componentDidMount() {
		const uid = this.props.match.params.id;
		const url = `http://cricapi.com/api/cricketScore?apikey=rk46d9knBAUor0ymzSG7gWy2Lgq2&unique_id=${uid}`
		const squadurl = `http://cricapi.com/api/fantasySquad?apikey=rk46d9knBAUor0ymzSG7gWy2Lgq2&unique_id=${uid}`
		fetch(url)
			.then(response => response.json())
			.then(livescore => {
				this.setState({
					livescore,
					loading:true
					
				});
			})
			.catch((error) => {
				this.setState({
					error:true
				});
			})
		fetch(squadurl)
			.then(response => response.json())
			.then(squad => {
				this.setState({
					squad,
					loading:true
					
				})
			})
			.catch(error => {
				this.setState({
					error:true
				})
			})
	}
	render() {
		const score = this.state.livescore || {};
		if(this.state.loading) {
			//console.log(this.state.squad.squad[0].players[0])
			const squad = this.state.squad.squad.map((item,index) => {
				return(
					<div class="col s12 m6" key = {index}>
					    <div class="card-panel teal">
					       <h3 class="white-text">{item.name} Squad</h3>
					    </div>
					</div>
				)
			})
			
			const team1 = this.state.squad.squad[0].players.map((item,index) => {
				return(
					<div class="col s12 m6" key = {index}>
					    <div class="card-panel teal">
					       <span class="white-text">{item.name}</span>
					    </div>
					</div>
				)
			})

			const team2 = this.state.squad.squad[1].players.map((item,index) => {
				return(
					<div class="col s12 m6" key = {index}>
					    <div class="card-panel teal">
					       <span class="white-text">{item.name}</span>
					    </div>
					</div>
				)
			})
			return(
				<div>
				<div class= "row">
					<div class="col s12 m12">
					 	<div class="card blue-grey darken-1">
					   	<div class="card-content white-text">
					     	<span class="card-title">{score["team-1"]} Vs {score["team-2"]}</span>
					   	</div>
					   	<div class="card-action white-text">
					     	<p>{score.score}</p>
					   	</div>
					 	</div>
					</div>
				</div>
					<div class = "row">
						{squad}
					</div>
					<div class = "row">
						<div class = "col s12 m6">
						{team1}
						</div>
						<div class = "col s12 m6">
						{team2}
						</div>
					</div>
				</div>
			) 
		} else {
			return (
				<center class = "preloader">
			        <Row>
				        <Col s={12}>
				        <Preloader size='big'/>
				        </Col>
				    </Row>
			    </center>
				)
			}
		}
	}

export default LiveScore