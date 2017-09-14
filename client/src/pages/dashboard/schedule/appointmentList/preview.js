import { parseDateFull } from './../../../../helpers/parseDate';
import { parseTime } from './../../../../helpers/parseTime';
import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-8 col-sm-8" style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#BEBAB9',
        padding: '0'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '15px'
        }}>
          {
            this.props.appointment.date ? 
              <span style={{fontSize: '20px'}}>{`Date: ${parseDateFull(this.props.appointment.date)}`}</span> :
              'Select an appointment'
          }
          <span style={{color: 'gray'}}>
            {
              `From: ${
                this.props.appointment.time.from ? 
                  parseTime(this.props.appointment.time.from) :
                  '--'
              }
              To: ${
                this.props.appointment.time.to ?
                parseTime(this.props.appointment.time.to) :
                '--'
              }`
            }
          </span>
        </div>
        <div style={{
          height: '200px',
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          padding: '30px 0 30px 0'
        }}>
          {
            this.props.appointment.date ?
              <img src='https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg' style={{height: '100%'}}/> :
              <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/658625-200.png' style={{height: '100%'}}/> 
          }
        </div>
        <span style={{
          paddingBottom: '15px'}}
        >
          {
            this.props.appointment.rating ?
            'Rating: ' + this.props.appointment.rating :
            '' 
          }
        </span>
        <span>
          {
            this.props.appointment.sender.id ?
            'ID: ' + this.props.appointment.sender.id :
            ''
          }
        </span>
        <span>
          {
            this.props.appointment.sender && this.props.appointment.sender.first && this.props.appointment.sender.last ?
            'Trainer: ' + this.props.appointment.sender.first + ' ' + this.props.appointment.sender.last :
            ''
          }
        </span>
        <span>
          {
            this.props.appointment.receiver && this.props.appointment.receiver.first && this.props.appointment.receiver.last ?
            'Client: ' + this.props.appointment.receiver.first + ' ' + this.props.appointment.receiver.last :
            ''
          }
        </span>
        <span>
          {
            this.props.appointment.location ?
            'Location: ' + this.props.appointment.location :
            ''
          }
        </span>
      </div>
    );
  }
}

export default Preview;