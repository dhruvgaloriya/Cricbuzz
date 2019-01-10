import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import PlayerInfo from "./PlayerInfo";
import {Tabs,Tab,Table,Row,Preloader,Col,s} from  'react-materialize'

export default class Find extends Component {

    state = {
        playerList: [],
        error: false,
        loading:false
    }

    search = (pName) => {
        const url = `http://cricapi.com/api/playerFinder?apikey=rk46d9knBAUor0ymzSG7gWy2Lgq2&name=${pName}`
        fetch(url)
            .then(response => response.json())
            .then(
                (playerInfo) => {
                    this.setState(prevState => ({
                        playerList: playerInfo.data,
                        loading:true
                    }));
                },
                (error) => {
                    this.setState({
                        error: true
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <SearchBar onSearch={(pName) => this.search(pName)}/>
                <PlayerInfo playerList={this.state.playerList}/> :
            </div>
        )
    }
}