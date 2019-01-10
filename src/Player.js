import React, {Component} from 'react';
import {Tabs,Tab,Table,Row,Preloader,Col,s} from  'react-materialize'
import './index.css'

class Player extends Component {
    state = {
        player: null,
        loading: false,
        error: false,
    }

    componentDidMount() {
        const pid = this.props.match.params.id;
        const url = `http://cricapi.com/api/playerStats?apikey=rk46d9knBAUor0ymzSG7gWy2Lgq2&pid=${pid}`;
        fetch(url)
            .then(response => response.json())
            .then(player => {
                this.setState({
                  player,
                  loading:true
                });
            })
            .catch((error) => {
                this.setState({
                  error: true,
                });
            })
            
    }

    render() {
        const defaultImageUrl = "./person.png";
        const player = this.state.player || {};
        if(this.state.loading){
        return (
            <div class="col s12 m12">
                <div class="card horizontal">
                  <div class="card-image">
                    <img src={player.imageURL || defaultImageUrl}/>
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <p>{player.profile || "Bio not found"}</p>
                    </div>
                    <div class="card-action">
                      <h4>{player.fullName}</h4>
                    </div>
                  </div>
                </div>
                <Tabs className='tab-demo z-depth-1'>
                    <Tab title="TEST MATCH" active>
                        <Table className = "tab">
                          <thead>
                            <tr>
                              <th data-field="id">Batting</th>
                              <th data-field="name">Bolwing</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Total No 50 : {player.data.batting.tests["50"]}</td>
                              <td>5 Wickets : {player.data.bowling.tests["5w"]}</td>
                            </tr>
                            <tr>
                              <td>Total No 100 : {player.data.batting.tests["100"]}</td>
                              <td>4 Wickets : {player.data.bowling.tests["4w"]}</td>
                            </tr>
                            <tr>
                              <td>HighScore: {player.data.batting.tests["HS"]}</td>
                              <td>Strike Rate :  {player.data.bowling.tests["SR"]}</td>
                            </tr>
                            <tr>
                              <td>Average : {player.data.batting.tests["Ave"]}</td>
                              <td>Eco : {player.data.bowling.tests["Econ"]}</td>
                            </tr>
                            <tr>
                              <td>TotalRuns : {player.data.batting.tests["Runs"]}</td>
                              <td>Total Wickets : {player.data.bowling.tests["Wkts"]}</td>
                            </tr>
                            <tr>
                              <td>Innings : {player.data.batting.tests["Inns"]}</td>
                              <td>Innings : {player.data.bowling.tests["Inns"]}</td>
                            </tr>
                            <tr>
                              <td>Matches : {player.data.batting.tests["Mat"]}</td>
                              <td>Matches : {player.data.bowling.tests["Mat"]}</td>
                            </tr>
                          </tbody>
                        </Table>
                    </Tab>
                    <Tab title="ODI MATCH">
                        <Table className = "tab">
                          <thead>
                            <tr>
                              <th data-field="id">Batting</th>
                              <th data-field="name">Bolwing</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Total No. 50 : {player.data.batting.ODIs["50"]}</td>
                              <td>5 Wickets : {player.data.bowling.ODIs["5w"]}</td>
                            </tr>
                            <tr>
                              <td>Total No. 100 : {player.data.batting.ODIs["100"]}</td>
                              <td>4 Wickets : {player.data.bowling.ODIs["4w"]}</td>
                            </tr>
                            <tr>
                              <td>HighScore: {player.data.batting.ODIs["HS"]}</td>
                              <td>Strike Rate : {player.data.bowling.ODIs["SR"]}</td>
                            </tr>
                            <tr>
                              <td>Average : {player.data.batting.ODIs["Ave"]}</td>
                              <td>Eco : {player.data.bowling.ODIs["Econ"]}</td>
                            </tr>
                            <tr>
                              <td>TotalRuns : {player.data.batting.ODIs["Runs"]}</td>
                              <td>Total Wickets : {player.data.bowling.ODIs["Wkts"]}</td>
                            </tr>
                            <tr>
                              <td>Innings : {player.data.batting.ODIs["Inns"]}</td>
                              <td>Innings : {player.data.bowling.ODIs["Inns"]}</td>
                            </tr>
                            <tr>
                              <td>Matches : {player.data.batting.ODIs["Mat"]}</td>
                              <td>Matches : {player.data.bowling.ODIs["Mat"]}</td>
                            </tr>
                          </tbody>
                        </Table>
                    </Tab>
                    <Tab title="T20 MATCH">
                        <Table className = "tab">
                          <thead>
                            <tr>
                              <th data-field="id">Batting</th>
                              <th data-field="name">Bolwing</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Total No 50 : {player.data.batting.T20Is["50"]}</td>
                              <td>5 Wickets : {player.data.bowling.T20Is["5w"]}</td>
                            </tr>
                            <tr>
                              <td>Total No 100 : {player.data.batting.T20Is["100"]}</td>
                              <td>4 Wickets : {player.data.bowling.T20Is["4w"]}</td>
                            </tr>
                            <tr>
                              <td>HighScore: {player.data.batting.T20Is["HS"]}</td>
                              <td>Strike Rate : {player.data.bowling.T20Is["SR"]}</td>
                            </tr>
                            <tr>
                              <td>Average : {player.data.batting.T20Is["Ave"]}</td>
                              <td>Eco : {player.data.bowling.T20Is["Econ"]}</td>
                            </tr>
                            <tr>
                              <td>TotalRuns : {player.data.batting.T20Is["Runs"]}</td>
                              <td>Total Wickets : {player.data.bowling.T20Is["Wkts"]}</td>
                            </tr>
                            <tr>
                              <td>Innings : {player.data.batting.T20Is["Inns"]}</td>
                              <td>Innings : {player.data.bowling.T20Is["Inns"]}</td>
                            </tr>
                            <tr>
                              <td>Matches : {player.data.batting.T20Is["Mat"]}</td>
                              <td>Matches : {player.data.bowling.T20Is["Mat"]}</td>
                            </tr>
                          </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </div>
        );
      } else {
        return(
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

export default Player