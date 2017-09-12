import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../../components/navbar';
import Search from '../../components/search/search';
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
  }

  render() {

    return (

      <div style={{
        height: '100%',
        width: '100%'
      }}>

        <Navbar />

        <div className="col-sm-8 col-sm-offset-2" style={{
          height: '94.8%',
          backgroundColor: '#FFFFFF',
          padding: 0
        }}>

          <DashNav />

          <Route path={`${this.props.match.url}/schedule`} component={Schedule}/>
          <Route path={`${this.props.match.url}/trainers`} component={Search}/>
          <Route path={`${this.props.match.url}/profile`} component={Info}/>
          <Route exact path={`${this.props.match.url}`} component={Main}/>
        

        </div>


      </div>
    );

  }
}

export default Dashboard;