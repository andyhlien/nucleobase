import React from 'react';
import $ from 'jquery';
import { Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Search from '../../components/search/search';
import Profile from '../../components/profiles/profiles';
import Info from '../../components/edit/info';
import DashNav from './dashnav';

import Main from './main';
import Schedule from './schedule';
import Trainers from './trainers';
import Clients from './clients';
import EditProfile from './editProfile';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: ''
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/session',
      type: 'GET',
      success: (data) => {
        this.setState({
          session: data
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  render() {

    const { session } = this.state;

    return (

      <div style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar session={session}/>

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '94.8%',
          backgroundColor: '#FFFFFF',
          padding: 0
        }}>

          <DashNav />

          <Route path={`${this.props.match.url}/schedule`} component={Schedule}/>
          <Route path={`${this.props.match.url}/trainers`} component={Trainers}/>
          <Route path={`${this.props.match.url}/profile`} component={Info}/>
          <Route exact path={`${this.props.match.url}`} component={Main}/>
        

        </div>


      </div>
    );

  }
}

export default Dashboard;