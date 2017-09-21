import RaisedButton from 'material-ui/RaisedButton';
import {orange500} from 'material-ui/styles/colors';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import React from 'react';

class AddAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: {},
      price: '',
      location: '',
      fromTime: '',
      toTime: ''
    };
  }

  handleChange(option, event, instance) {
    const options = {
      'date': () => {this.setState({date: instance})},
      'price': () => this.setState({price: event.target.value}),
      'location': () => this.setState({location: event.target.value}),
      'fromTime': () => {this.setState({fromTime: instance})},
      'toTime': () => {this.setState({toTime: instance})}
    };
    options[option]();
  }

  handleSubmit() {
    if (JSON.stringify(this.state.date) === JSON.stringify({}) ||
      !this.state.price || isNaN(this.state.price) || !Number.isInteger(Number(this.state.price)) ||
      !this.state.location ||
      !this.state.fromTime ||
      !this.state.toTime) {
      return;
    }

    this.props.handleToggle();
    this.props.addAppointment({
      time: {
        from: this.state.fromTime,
        to: this.state.toTime
      },
      date: this.state.date,
      location: this.state.location,
      price: this.state.price
    });

    this.setState({
      date: {},
      price: '',
      location: '',
      fromTime: '',
      toTime: ''
    });
  }

  render() {
    const actions = [
      <FlatButton 
        label="Cancel"
        onClick={() => this.props.handleToggle({type: 'addOpen'})}
      />,
      <RaisedButton
        label="Create Appointment"
        onClick={this.handleSubmit.bind(this)}
      />
    ];

    return (
      <Dialog
        modal={false}
        actions={actions}
        open={this.props.addOpen}
        onRequestClose={() => this.props.handleToggle({type: 'addOpen'})}
        contentStyle={{
          height: '400px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <span style={{height: '30px'}}>
            Choose Appointment Date:
          </span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'flex-start'
          }}>
            <DatePicker 
              hintText="Date"
              value={this.state.date}
              onChange={this.handleChange.bind(this, 'date')}
            />
          </div>
          <span style={{height: '30px'}}></span>
          <span style={{height: '30px'}}>
            Choose Appointment Times:
          </span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'flex-start'
          }}>
            <TimePicker
              hintText="From"
              textFieldStyle={{width: '100px'}}
              onChange={this.handleChange.bind(this, 'fromTime')}
            />
            <span style={{width: '30px'}}></span>
            <TimePicker
              hintText="To"
              textFieldStyle={{width: '100px'}}
              onChange={this.handleChange.bind(this, 'toTime')}
            />
          </div>
          <span style={{height: '30px'}}></span>
          <span style={{height: '30px'}}>
            Choose a Location:
          </span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'flex-start'
          }}>
            <TextField 
              hintText="Location..."
              value={this.state.location}
              underlineFocusStyle={{borderColor: orange500}}
              onChange={this.handleChange.bind(this, 'location')}
            />
          </div>
          <span style={{height: '30px'}}></span>
          <span style={{height: '30px'}}>
            Set Your Price:
          </span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'flex-start'
          }}>
            <TextField
              hintText="price"
              value={this.state.price}
              underlineFocusStyle={{borderColor: orange500}}
              onChange={this.handleChange.bind(this, 'price')}
            />
          </div>
        </div>
      </Dialog>
    );
  }
}

export default AddAppointment;