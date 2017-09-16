import AddCircle from 'material-ui/svg-icons/content/add-circle';
import RaisedButton from 'material-ui/RaisedButton';
import SearchAppointment from './searchAppt';
import AddAppointment from './addAppt';
import React from 'react';

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addOpen: false,
    };
  }

  handleToggle(option) {
    const toggles = {
      'addOpen': this.setState({addOpen: !this.state.addOpen})
    };
    toggles[option.type];
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-sm-4" style={{
          display: 'flex',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <SearchAppointment
            filterAppointments={this.props.filterAppointments}
          />
        </div>
        <div className="col-lg-12 col-sm-4" style={{
          display: 'flex',
          height: '100px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <RaisedButton
            label="Create"
            icon={<AddCircle />}
            labelColor="#ffffff"
            labelPosition="before"
            backgroundColor="#4DC1EA"
            onClick={() => this.handleToggle({type: 'addApp'})}
          />
          <AddAppointment 
            addOpen={this.state.addOpen}
            addAppointment={this.props.addAppointment}
            handleToggle={this.handleToggle.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default ControlPanel;