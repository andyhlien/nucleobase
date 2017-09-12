import RaisedButton from 'material-ui/RaisedButton';
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
      addLocation: '',
      addDate: {},
      addPrice: '$',
      addFromTime: '',
      addToTime: ''
    };
  }

  addUpdater(event, option) {
    const options = {
      'location': () => this.setState({addLocation: event.target.value}),
      'price': () => this.setState({addPrice: event.target.value})
    };
    options[option.type]();
  }

  addDateUpdater(e, date) {
    this.setState({
      addDate: date
    });
  }

  addFromTimeUpdater(e, date) {
    this.setState({
      addFromTime: date
    });
  }

  addToTimeUpdater(e, date) {
    this.setState({
      addToTime: date
    });
  }

  handleAddSubmit() {
    var options = {
      time: JSON.stringify({
        from: this.state.addFromTime,
        to: this.state.addToTime
      }),
      date: this.state.addDate,
      price: this.state.addPrice.substr(1),
      location: this.state.addLocation
    };
    
    this.props.addAppointment(options);
    this.props.handleToggle({type: 'addOpen'});
  }

  render() {
    const addActions = [
      <FlatButton 
        label="Cancel"
        onClick={() => this.props.handleToggle({type: 'addOpen'})}
      />,
      <RaisedButton
        label="Create Appointment"
        onClick={this.handleAddSubmit.bind(this)}
      />
    ];

    return (
      <Dialog
        actions={addActions}
        modal={false}
        open={this.props.addOpen}
        onRequestClose={() => this.props.handleToggle({type: 'addOpen'})}
        contentStyle={{
          height: '400px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <span style={{height: '30px'}}>Choose Appointment Date:</span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center'
          }}>
            <DatePicker 
              hintText="Date"
              value={this.state.addDate}
              onChange={this.addDateUpdater.bind(this)}
            />
          </div>
          <span style={{height: '30px'}}></span>
          <span style={{height: '30px'}}>Choose Appointment Times:</span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center'
          }}>
            <TimePicker
              textFieldStyle={{width: '100px'}}
              hintText="From"
              onChange={this.addFromTimeUpdater.bind(this)}
            />
            <span style={{width: '30px'}}></span>
            <TimePicker
              textFieldStyle={{width: '100px'}}
              hintText="To"
              onChange={this.addToTimeUpdater.bind(this)}
            />
          </div>
          <span style={{height: '30px'}}></span>
          <span style={{height: '30px'}}>Choose a Location:</span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center'
          }}>
            <TextField 
              hintText="Location..."
              value={this.state.addLocation}
              onChange={(e) => this.addUpdater(e, {type: 'location'})}
            />
          </div>
          <span style={{height: '30px'}}></span>
          <span style={{height: '30px'}}>Set Your Price:</span>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignContent: 'center'
          }}>
            <TextField
              hintText="price"
              value={this.state.addPrice}
              onChange={(e) => this.addUpdater(e, {type: 'price'})}
            />
          </div>
        </div>
      </Dialog>
    );
  }
}

export default AddAppointment;