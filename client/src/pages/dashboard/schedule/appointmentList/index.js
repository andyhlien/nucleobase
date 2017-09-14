import ListComponent from './list';
import Preview from './preview';
import React from 'react';
import AJAX from '../../../../ajax.js';

class ApptList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: {
        time: {},
        sender: {
          id: '',
          first: '',
          last: ''
        },
        receiver: {
          id: '',
          first: '',
          last: ''
        },
        rating: '',
        location: ''
      }
    };
  }

  previewAppointment(appointment) {
    if (!appointment.rating) {
      appointment.rating = 'Not yet rated';
    }

    if (typeof appointment.sender === 'number') {
      AJAX.get('/api/profiles/' + appointment.sender, {}, (sender) => {
        appointment.sender = sender;

        if (typeof appointment.receiver === 'number') {
          AJAX.get('/api/profiles/' + appointment.receiver, {}, (receiver) => {
            appointment.receiver = receiver;

            this.setState({
              appointment: appointment
            });
          });
        } else {
          this.setState({
            appointment: appointment
          });
        }
      });
    } else {
      this.setState({
        appointment: appointment
      });
    }
  }

  render() {
    return (
      <div style={{
        height: '100%',
        minWidth: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div className="row" style={{
          width: '100%',
          height: '600px',
        }}>
          <div className="col-lg-4 col-sm-4" style={{
            height: '100%',
            padding: '0',
            backgroundColor: '#DCD8D7'
          }}>
            <ListComponent
              filter={this.props.filter}
              appointments={this.props.appointments}
              deleteAppointment={this.props.deleteAppointment}
              previewAppointment={this.previewAppointment.bind(this)}
            />
          </div>
          <Preview
            appointment={this.state.appointment}
          />
        </div>
      </div>
    );
  }
}

export default ApptList;