import React, { Component } from 'react';
import {Link} from "react-router-dom";

class PlayerInfo extends Component {
	// state = {
	// 	PlayerDetails:[]
	// }

	// handleClick = (id) => {
	// 	const url = `http://cricapi.com/api/playerStats?apikey=rk46d9knBAUor0ymzSG7gWy2Lgq2&pid=${id}`
	// 	fetch(url)
 //        .then(response => response.json())
 //        .then(
 //            (PlayerDetails) => {
 //              this.setState(prevState => ({
 //                PlayerDetails:PlayerDetails
 //              }));
 //            },
 //             (error) => {
 //              this.setState({
 //                error:true
 //              });
 //            }
 //          )
 //    }

	render() {
	    const player = this.props.playerList.map((item, index) => {
            return (
                <div class="col s6 m4" key={index}>
                    <Link to={`/player/${item.pid}`}>
                        <div class="card blue-grey darken-1"
                             style={{"cursor": "pointer"}}>
                            <div class="card-content white-text">
                                <p>Name : {item.name}</p>
                            </div>
                            <div class="card-content card-action white-text">
                                <p>Full-Name : {item.fullName}</p>
                            </div>
                            <div class="card-content card-action white-text">
                                <p>ID: {item.pid}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
        return (
            <div class="row">
                {player}
            </div>
        )
    }
 }

export default PlayerInfo