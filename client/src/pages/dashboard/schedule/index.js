import ControlPanel from './controlPanel';
import ApptList from './appointmentList';
import AJAX from '../../../ajax.js';
import React from 'react';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {},
      appointments: [],
      filter: []
    };
  }

  componentWillMount() {
    AJAX.get('/session', {}, (session) => {
      this.setState({session: session}, () => {
        if (this.state.session.type === 'trainer') {
          var options = {
            sender: this.state.session.id
          }
        } else {
          var options = {
            //receiver: this.state.session.id
          }
        }

        AJAX.get('/appointments', options, (appointments) => {
          this.setState({appointments: appointments});
        });
      });
    });
  }

  addAppointment(appointment) {
    appointment.sender = this.state.session.id;

    AJAX.post('/appointments', appointment, () => {
      if ( this.state.session.type === 'trainer' ) {
        var options = {
          sender: this.state.session.id
        }
      } else {
        var options = {
          //receiver: this.state.session.id
        }
      }

      AJAX.get('/appointments', options, (appointments) => {
        this.setState({appointments: appointments});
      });
    });
  }

  deleteAppointment(appointment) {
    AJAX.delete('/appointments', {id: appointment.id}, () => {
      if ( this.state.session.type === 'trainer' ) {
        var options = {
          sender: this.state.session.id
        }
      } else {
        var options = {
          //receiver: this.state.session.id
        }
      }

      AJAX.get('/appointments', options, (appointments) => {
        this.setState({appointments: appointments});
      });
    });
  }

  filterAppointments(event) {
    var words = event.target.value.split(' ');
    var filter = [];

    for (var i = 0; i !== words.length; i++) {
      if (words[i]) {
        filter.push(words[i]);
      }
    }

    this.setState({
      filter: filter
    });
  }

  render() {
    return (
      <div style={{
        height: '96%',
        width: '100%'
      }}>
        <div className="col-lg-3 col-xsm-6" style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
          <ControlPanel
            addAppointment={this.addAppointment.bind(this)}
            filterAppointments={this.filterAppointments.bind(this)}
          />
        </div>
        <div className="col-lg-9 col-xsm-6" style={{
          height: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly', 
          padding: '0'
        }}>
          <ApptList
            filter={this.state.filter}
            appointments={this.state.appointments}
            deleteAppointment={this.deleteAppointment.bind(this)}
          />
        </div>
        <div className="row" style={{
          margin: '0',
          minHeight: '295px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#111822'
        }}>
          Some content down here
        </div>
      </div>
    );
  }
}

export default Schedule;