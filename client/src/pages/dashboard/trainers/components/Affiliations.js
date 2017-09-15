import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import React from 'react';

class Affiliations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        <Subheader>
          {this.props.trainers.length ? 'My Trainers' : ''}
        </Subheader>
        <div>
          {
            this.props.trainers.map((trainer, index) => {
              return (
                <ListItem
                  key={index}
                  leftAvatar={
                    <Avatar
                      src='https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg'
                    />
                  }
                >
                  {trainer.first + ' ' + trainer.last}
                </ListItem>
              );
            })
          }
        </div>
        <Subheader>
          {this.props.trainees.length ? 'My Trainees' : ''}
        </Subheader>
        <div>
          {
            this.props.trainees.map((trainee, index) => {
              return (
                <ListItem
                  key={index}
                  leftAvatar={
                    <Avatar
                      src='https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg'
                    />
                  }
                >
                  {trainee.first + ' ' + trainee.last}
                </ListItem>
              );
            })
          }
        </div>
      </List>
    );
  }
}

export default Affiliations;