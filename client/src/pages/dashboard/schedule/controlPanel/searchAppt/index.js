import TextField from 'material-ui/TextField';
import React from 'react';

class SearchAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });

    this.props.filterAppointments(event);
  }

  render() {
    return (
      <TextField 
        hintText="Search appointments..."
        value={this.state.search}
        onChange={this.handleChange.bind(this)}
        onKeyPress={this.props.filterAppointments}
      />
    );
  }
}

export default SearchAppointment;