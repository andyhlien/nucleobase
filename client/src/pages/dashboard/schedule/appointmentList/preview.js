import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { parseDateFull } from './../../../../helpers/parseDate';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import { parseTime } from './../../../../helpers/parseTime';
import Star from 'material-ui/svg-icons/toggle/star';
import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRating(rating) {
    for ( var i = 0; i !== Math.floor(this.props.appointment.sender.rating); i++) {
      rating.push(<Star key={i} style={{
        color: 'orange'
      }}/>);
    }

    if (Math.ceil(this.props.appointment.sender.rating) === Math.floor(this.props.appointment.sender.rating) + 1) {
      rating.push(<StarHalf key={.5} style={{
        color: 'orange'
      }}/>);
    }

    for (var i = rating.length; i !== 5; i++ ) {
      rating.push(<StarBorder key={i} style={{
        color: 'orange'
      }}/>);
    }

    return rating;
  }

  render() {
    return (
      <div className="col-lg-8 col-sm-8" style={{
        padding: '0',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#BEBAB9',
        justifyContent: 'flex-start'
      }}>
        <div style={{
          display: 'flex',
          paddingTop: '15px',
          alignItems: 'center',
          flexDirection: 'column'
        }}>{
          this.props.appointment.date ?
          <span style={{fontSize: '20px'}}>
            {`Date: ${parseDateFull(this.props.appointment.date)}`}
          </span> :
          'Select an appointment'
        }
          <span style={{color: 'gray'}}>{
            `From: ${
              this.props.appointment.time.from ? 
              parseTime(this.props.appointment.time.from) :
              '--'
            } To: ${
              this.props.appointment.time.to ?
              parseTime(this.props.appointment.time.to) :
              '--'
            }`
          }
          </span>
        </div>
        <div style={{
          display: 'flex', 
          height: '200px',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '30px 0 30px 0'
        }}>{
          this.props.appointment.date ?
          <img style={{height: '100%'}} src={
            this.props.session.image_url ||
            'https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg'
          }/> :
          <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/658625-200.png' style={{height: '100%'}}/> 
        }</div>
        <span style={{
          paddingBottom: '15px'
        }}>{
          this.props.appointment.sender.rating ?
          this.renderRating([]) :
          ''
        }</span>
        <span>{
          this.props.appointment.sender.id ?
          'ID: ' + this.props.appointment.sender.id :
          ''
        }</span>
        <span>{
          this.props.appointment.sender && this.props.appointment.sender.first && this.props.appointment.sender.last ?
          'Trainer: ' + this.props.appointment.sender.first + ' ' + this.props.appointment.sender.last :
          ''
        }</span>
        <span>
          {
          this.props.appointment.receiver && this.props.appointment.receiver.first && this.props.appointment.receiver.last ?
          'Client: ' + this.props.appointment.receiver.first + ' ' + this.props.appointment.receiver.last :
          ''
        }</span>
        <span>{
          this.props.appointment.location ?
          'Location: ' + this.props.appointment.location :
          ''
        }</span>
      </div>
    );
  }
}

export default Preview;