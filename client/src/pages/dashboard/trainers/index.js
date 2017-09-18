import Affiliations from './components/Affiliations.js';
import AJAX from '../../../ajax.js';
import React from 'react';

class Trainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
      trainers: [],
      session: {}
    };
  }

  componentWillMount() {
    AJAX.get('/session', {}, (session)=>{
      this.setState({session: session}, () => {
        if ( this.state.session.type === 'trainer' ) {
          AJAX.get('/appointments', {sender: this.state.session.id}, (appointments) => {
            var trainees = {};

            appointments.forEach((appointment) => {
              if (appointment.receiver && !trainees[appointment.receiver.id]) {
                trainees[appointment.receiver.id] = true;

                this.state.trainees.push(appointment.receiver);
              }
            });

            this.setState({trainees: this.state.trainees});  
          });
        } else {
          AJAX.get('/appointments', {receiver: this.state.session.id}, (appointments) => {
            var trainers = {};

            appointments.forEach((appointment) => {
              if (appointment.sender && !trainers[appointment.sender.id]) {
                trainers[appointment.sender.id] = true;

                this.state.trainers.push(appointment.receiver);
              }

              this.setState({trainers: this.state.trainers});
            });
          });
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