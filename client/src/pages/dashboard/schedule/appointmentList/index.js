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
    this.updatePreview = this.updatePreview.bind(this);
    this.cancelAppointment = this.cancelAppointment.bind(this);
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

  cancelAppointment() {
    console.log('CANCEL_APPOINTMENT_FUNCTION');
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


// Will need a function to be able to lift the currently selected appointment window into the state to pass it down to the preview component

// Keep in mind that the trip information that is mocked up does not have any referrence
// to the users who have paid for the appointment, or the user who has created the appointment
// The preview component could stand to use any of that information to be displayed in a much more fancy way.







