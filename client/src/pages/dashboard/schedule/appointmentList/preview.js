import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { parseDateFull } from './../../../../helpers/parseDate';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';
import { parseTime } from './../../../../helpers/parseTime';
import Star from 'material-ui/svg-icons/toggle/star';
import Avatar from 'material-ui/Avatar';
import React from 'react';

const css = {
  preview: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#BEBAB9',
    justifyContent: 'flex-start'
  },
  period: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '15px 0 15px 0'
  },
  date: {
    fontSize: '20px'
  },
  time: {
    color: 'gray'
  },
  location: {
    color: 'gray'
  },
  user: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#BEBAB9',
    justifyContent: 'flex-start'
  },
  frame: {
    display: 'flex',
    height: '200px',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '30px 0 30px 0'
  },
  image: {
    height: '100%',
    width: '50%'
  },
  rating: {
    paddingBottom: '15px'
  },
  name: {
    color: 'gray',
    fontSize: '20px',
    padding: '0 0 15px 0'
  },
  email: {
    fontSize: '20px'
  },
  phone: {
    fontSize: '20px'
  },
  goals: {
    fontSize: '20px'
  },
  unbooked: {
    fontSize: '20px'
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRating(rating, user) {
    for (let i = 0; i !== Math.floor(user.rating); i++) {
      rating.push(<Star key={i} style={{color: '#f44336'}}/>);
    }

    if (Math.ceil(user.rating) === rating.length + 1) {
      rating.push(<StarHalf key={.5} style={{color: '#f44336'}}/>);
    }

    for (let i = rating.length; i !== 5; i++ ) {
      rating.push(<StarBorder key={i} style={{color: '#f44336'}}/>);
    }

    return rating;
  }

  render() {
    const userElement = (user) => (
      user ?
      <div className="col-lg-8 col-sm-8" style={css.user}>
        <span style={css.frame}>{
          <Avatar style={css.image} src={
            user.image_url ||
            'https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg'
          }/>
        }</span>
        <span style={css.rating}>{
          user.rating ?
          this.renderRating([], user) :
          ''
        }</span>
        <span style={css.name}>{
          user.type === 'trainer' ?
          <strong>{user.first + ' ' + user.last}</strong> :
          <strong>{user.first + ' ' + user.last}</strong>
        }</span>
        <span>
          <span style={css.email}>{
            user.email ?
            <div><b>Email: </b><span>{user.email}</span></div> :
            ''
          }</span>
            <span style={css.phone}>{
            user.phone ?
            <div><b>Phone: </b><span>{user.phone}</span></div> :
            ''
          }</span>
          <span style={css.goals}>{
            user.goals ?
            <div><b>Goals: </b><span>{user.goals}</span></div> :
            ''
          }</span>
        </span>
      </div> :
      <div style={css.frame}>{
        <b style={css.unbooked}>
          UNBOOKED APPOINTMENT
        </b>
      }</div>
    );

    return (
      <div className="col-lg-8 col-sm-8" style={css.preview}>
        <div style={css.period}>{
          <b style={css.date}>{
            this.props.appointment ?
            `Date: ${parseDateFull(this.props.appointment.date)}` :
            'Select an appointment'
          }</b>
        }
          <b style={css.time}>{
            this.props.appointment ?
            `From: ${
              parseTime(this.props.appointment.time.from)
            } To: ${
              parseTime(this.props.appointment.time.to)
            }` :
            ''
          }</b>
          <b style={css.location}>{
            this.props.appointment ?
            'Location: ' + this.props.appointment.location :
            ''
          }</b>
        </div>{
          this.props.appointment ?
          this.props.session.type === 'trainer' ?
          userElement(this.props.appointment.receiver) :
          userElement(this.props.appointment.sender) :
          <div style={css.frame}>{
            <img src='https://saltandlighttv.org/images/loading_dots.gif' style={css.image}/> 
          }</div>
        }
      </div>
    );
  }
}

export default Preview;