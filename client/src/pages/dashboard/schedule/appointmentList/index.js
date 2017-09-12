import AJAX from '../../../../ajax.js';
import ListComponent from './list';
import Preview from './preview';
import React from 'react';

class ApptList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: null
    };
    this.updatePreview = this.updatePreview.bind(this);
    this.cancelAppointment = this.cancelAppointment.bind(this);
  }

  previewAppointment(appointment) {
    this.setState({
      appointment: appointment
    });
  }

  cancelAppointment() {
    console.log('CANCEL_APPOINTMENT_FUNCTION');
  }

  render() {

    return (

      <div style={{
        height: '100%',
        display: 'flex',
        minWidth: '500px',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="row" style={{
          width: '100%',
          height: '600px'
        }}>

          <div className="col-lg-4 col-sm-4" style={{
            padding: '0',
            height: '100%',
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
            session={this.props.session}
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







