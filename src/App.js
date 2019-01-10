import React, {Component} from 'react';
import MainMenu from './MainMenu'
import './index.css';
import routes from "./routes";



class App extends Component {
  state = {
    error:false,
    loading:false,
    data:[],
    PlayerInfo:[]
  }

  upComingClick = () => {
    this.setState(prevState => ({
      loading:true
    }))
    fetch("https://cricapi.com/api/matchCalendar?apikey=rk46d9knBAUor0ymzSG7gWy2Lgq2")
      .then(response => response.json())
      .then(
        (data) => {
          this.setState(prevState => ({
            loading:true,
            data:data.data
          }));
        },
         (error) => {
          this.setState({
            loading:false,
            error:true
          });
        }
      )
  }

  render() {
    return (
        <div>
          <MainMenu upComingClick={this.upComingClick}/>
          {routes}
        </div>
    )
  }
}

export default App;
