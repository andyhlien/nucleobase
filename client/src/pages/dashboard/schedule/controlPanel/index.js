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
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <SearchAppointment/>
        </div>
        <div className="col-lg-12 col-sm-4" style={{
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <RaisedButton
            label="Create"
            labelPosition="before"
            labelColor="#ffffff"
            backgroundColor="#4DC1EA"
            icon={<AddCircle />}
            onClick={() => this.handleToggle({type: 'addApp'})}
          />
          <AddAppointment 
            handleToggle={this.handleToggle.bind(this)}
            addOpen={this.state.addOpen}
            addAppointment={this.props.addAppointment}
          />
        </div>
      </div>
    );
  }
}

export default ControlPanel;