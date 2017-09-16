import {List, ListItem, makeSelectable} from 'material-ui/List';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import { parseDateAbrv } from './../../../../helpers/parseDate';
import { parseTime } from './../../../../helpers/parseTime';
import React from 'react';

class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  filter(appointment) {
    if (this.props.filter.length) {
      for (var key in appointment) {
        if (appointment[key]){
          for (var i = 0; i !== this.props.filter.length; i++) {
            if (this.props.filter[i]) {
              if (JSON.stringify(appointment[key]).toUpperCase().includes(this.props.filter[i].toUpperCase())) {
                return true;
              }
            }
          }
        }
      }
    } else {
      return true;
    }

    return false;
  }

  render() {
    const iconButtonElement = (appointment, index) => (
      <IconButton
        key={'k' + index}
        tooltip="Cancel"
        tooltipPosition="bottom-center"
        onClick={() => {this.props.deleteAppointment(appointment)}}
      >
        <ClearIcon/>
      </IconButton>
    );

    return (
      <div style={{
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
        display: 'list',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <List>
          <Subheader>
            Appointments
          </Subheader>
          {
            this.props.appointments.map((appointment, i) => {
              if (!this.filter(appointment)) {
                return;
              }

              if (typeof appointment.time === 'string') {
                appointment.time = JSON.parse(appointment.time);
                appointment.time.from = (new Date(Date.parse(appointment.time.from))).toString();
                appointment.time.to = (new Date(Date.parse(appointment.time.to))).toString();
              }

              return (
                <div key={'div' + i}>
                  <ListItem
                    key={i}
                    hoverColor="#C3D600"
                    primaryText={`${parseDateAbrv(appointment.date)}`}
                    secondaryText={
                      <div key={'div' + i} style={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                        <span key={'s' + i} >
                          {`${parseTime(appointment.time.from)} - ${parseTime(appointment.time.to)}`}
                        </span>
                      </div>
                    }
                    rightIconButton={iconButtonElement(appointment, i)}
                    style={{padding: '0'}}
                    onClick={() => this.props.previewAppointment(appointment)}
                  />
                  <Divider key={'x' + i} inset={true}/>
                </div>
              );
            })
          }
        </List>
      </div>
    );
  }
}

export default ListComponent;