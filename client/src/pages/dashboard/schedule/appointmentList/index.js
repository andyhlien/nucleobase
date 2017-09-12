import ListComponent from './list';
import Preview from './preview';
import React from 'react';

class ApptList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointment: { time: {} }
    };
  }

  previewAppointment(appointment) {
    this.setState({
      appointment: appointment
    }, () => {
      console.log( this.state );
    });
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
            <ListComponent appointments={this.props.appointments} deleteAppointment={this.props.deleteAppointment.bind(this)} previewAppointment={this.previewAppointment.bind(this)}/>
          </div>
          <Preview appointment={this.state.appointment}/>
        </div>
      </div>
    );
  }
}

export default ApptList;