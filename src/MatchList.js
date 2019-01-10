import React, { Component } from 'react';
import {Tabs,Tab,Table,Row,Preloader,Col,s} from  'react-materialize'

class MatchList extends Component{

    state = {
        loading: false,
        data: [],
        error: false
    };
    componentDidMount() {  
            fetch("https://cricapi.com/api/matchCalendar?apikey=rk46d9knBAUor0ymzSG7gWy2Lgq2")
                .then(response => response.json())
                .then(
                    (data) => {
                        this.setState(prevState => ({
                            data: data.data,
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
    render(){
        if(this.state.loading){
        var matches = this.state.data.map((item,index) => {
        return (
            <div class="col s6 m4" key = {index}>
                <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <p>{item.name}</p>
                </div>
                <div class="card-content card-action white-text">
                    <p>{item.date}</p>
                </div>
                </div>
            </div>
            )
        })
        return (
            <div class="row" >
            {matches}
            </div>
        )}else{
        return(
        <center class = "preloader">
            <Row>
              <Col s={12}>
                <Preloader size='big'/>
              </Col>
            </Row>
          </center>
        )}
    }
}
    export default MatchList