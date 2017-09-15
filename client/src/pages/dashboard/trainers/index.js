import Affiliations from './components/Affiliations.js';
import AJAX from '../../../ajax.js';
import React from 'react';

class Trainers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: [this.state.session, this.state.session],
      trainees: [this.state.session, this.state.session],
      session: {}
    };
  }

  componentWillMount() {
    AJAX.get('/session', {}, (session)=>{
      this.setState({
        session: session
      }, () => {
        if ( this.state.session.type === 'trainer' ) {
          this.setState({
            trainees: [this.state.session, this.state.session]
          })
          console.log("YOU NEED TO GET THE TRAINERS'S TRAINEES");
        } else {
          this.setState({
            trainers: [this.state.session, this.state.session]
          })
          console.log("YOU NEED TO GET THE TRAINEE'S TRAINERS");
        }
      });
    });
  }

  render() {
    return (
      <div>
        <Affiliations trainers={this.state.trainers} trainees={this.state.trainees}/>
      </div>
    );
  }
}

export default Trainers;