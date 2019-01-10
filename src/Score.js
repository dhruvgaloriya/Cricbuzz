import React, { Component } from 'react';
import './index.css'
import {Tabs,Tab,Table,Row,Preloader,Col,s} from  'react-materialize'
import {Link} from "react-router-dom";

class Score extends Component {
	state = {
		loading:false,
		data:[],
		error:false,
		selectedOption:'Test'
	}

	componentDidMount() {
		fetch("http://cricapi.com/api/matches?apikey=rk46d9knBAUor0ymzSG7gWy2Lgq2")
			.then(response => response.json())
			.then(
				(data) => {
					this.setState(prevState => ({
						data:data.matches,
						loading:true,
					}))
				},
				(error) => {
					this.setState(prevState => ({
						error:true
					}))
				}
			)


	}

	handleOptionChange = (changeEvent) => {
		this.setState({
    		selectedOption: changeEvent.target.value
  		});
	}

	render() {
		if(this.state.loading) {
		var match = this.state.data.map((item,index) => {
			if((item.type)===(this.state.selectedOption))
			{
				return (
					<Link to = {`/score/${item.unique_id}`}>
					    <div class="col s12 m6" key={index}>  
						      <div class="card blue-grey darken-1" style={{"cursor": "pointer"}}>
						        <div class="card-content white-text ">
						          <span class="card-title">{item["team-1"]} Vs {item["team-2"]}</span>
						        </div>
						        <div class="card-action white-text">
						        {	(item.matchStarted)?
							        <lable>Toss : {item.toss_winner_team}</lable> :
							        <lable>Toss : Match Not started yet</lable>
							    }
							    </div>
							    <div class="card-action white-text">
							    {
							    	(item.type == "")?
							        <lable>Type : Not Decided </lable>:
							        <lable>Type : {item.type}</lable>
							    }
							    </div>
							    <div class="card-action white-text">
							    {
							    	(item.winner_team == null && item.matchStarted)?
							        <lable>Winner: Match is Going on</lable>:
							        <lable>Winner : {item.winner_team}</lable>
							    }
							    </div>
							    <div class="card-action white-text">
							    	<lable>Date:{item.date}</lable>
							    </div>
						      </div>    
					    </div>
				    </Link>
				)
			}
		})}else {
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
		return (
			<div>
				<center class="filterForm">
					<p>
					    <label>
					       <input value = "Test" name="group1" type="radio" checked = {this.state.selectedOption === 'Test'} 
					        onChange={this.handleOptionChange}/>
					       <span>Test</span>
					    </label>
					   </p>
					<p>
					  	<label>
						    <input value = "Twenty20" name="group1" type="radio" checked = {this.state.selectedOption === 'Twenty20'}
						     onChange={this.handleOptionChange} />
						    <span>Twenty20</span>
					  	</label>
					</p>
					<p>
					  	<label>
						    <input value = "First-class" name="group1" type="radio" checked = {this.state.selectedOption === 'First-class'}
						     onChange={this.handleOptionChange} />
						    <span>First-class</span>
					  	</label>
					</p>
					<p>
					  	<label>
						    <input value = "ListA" name="group1" type="radio" checked = {this.state.selectedOption === 'ListA'} 
						     onChange={this.handleOptionChange}/>
						    <span>ListA</span>
					  	</label>
					</p>
					<p>
					  	<label>
						    <input value = "ODI" name="group1" type="radio" checked = {this.state.selectedOption === 'ODI'}
						     onChange={this.handleOptionChange} />
						    <span>ODI</span>
					  	</label>
					</p>
					<p>
					  	<label>
						    <input value = "" name="group1" type="radio" checked = {this.state.selectedOption === 'Tamilnadu Primier League'}
						     onChange={this.handleOptionChange} />
						    <span>Tamilnadu Primier League Twenty20</span>
					  	</label>
					</p>
				</center>
				<div class = "row">
					{match}
				</div>
			</div>
		)
	}
}

export default Score