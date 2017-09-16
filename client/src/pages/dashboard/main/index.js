import AJAX from '../../../ajax.js';
import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Divider from 'material-ui/Divider';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: { 
        image_url: 'https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg',
      },
      received: [],
      sent: [],
    };
  }

  componentWillMount() {
    // // current user
    AJAX.get('/session', {}, (session) => {
      this.state.session = session;
    
      // message received
      AJAX.get('/messages', {receiver: this.state.session.id}, (received) => {
        this.state.received = received;
        // for each message find first of the sender
        received.forEach((mess, i) => {
          AJAX.get('/api/profiles/' + mess.sender, {}, (profile) => {
            this.state.received[i].sender = profile;
            this.forceUpdate();
          });
        });  
      });

      // message sent
      AJAX.get('/messages', {sender: this.state.session.id}, (sent) => {
        this.state.sent = sent;
        // for each message find first of the sender
        sent.forEach((mess, i) => {
          AJAX.get('/api/profiles/' + mess.receiver, {}, (profile) => {
            this.state.sent[i].receiver = profile;
            this.forceUpdate();
          });
        });  
      });
    });
  }

  /*
  <ul>
                {this.state.received.map((item, i) => <li key={i}>{'From: ' + item.sender.first + ' ' + item.message}</li>)}  
              </ul> 
              justifyContent: 'center',
              alignItems: 'center',
  */


  render() {


    console.log('RENDER: ', this.state);


    return (

      <div style={{height: '96%', width: '100%'}}>
        
        <div className="col-lg-3 col-sm-12" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}>
          <div className="row">
            <div className="col-lg-12 col-sm-4" style={{
              height: '200px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}>
              <img style={{height: '100%'}} src={
                this.state.session.image_url ||
                "https://lh3.googleusercontent.com/-_G3XieI-P7Y/AAAAAAAAAAI/AAAAAAAAAEY/AU_AGutjoWQ/s640/photo.jpg"
              }
              />
            </div>

            <div className="col-lg-12 col-sm-4" style={{
              height: '200px',
              display: 'flex',
              border: 'solid'
            }}>

              {this.state.session.first}






            </div>

            <div className="col-lg-12 col-sm-4" style={{
              height: '200px',
              display: 'flex',
              
              border: 'solid'
            }}>
              







            </div>
          </div>
        </div>

        <div className="col-lg-9 col-sm-12" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
          <div className="row">
            <div className="col-lg-12 col-sm-6 col-6" style={{
              height: '400px',
              display: 'flex',
              border: 'solid',
              flexWrap: 'wrap'
            }}>

              <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn colSpan="3" style={{fontSize: 20}}>
                      Received
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                  {this.state.received.map((item, i) =>  
                    <TableRow key={i}>
                      <TableRowColumn style={{width: '20%', fontSize: 15 }}>{'From: ' + item.sender.first}</TableRowColumn>
                      <TableRowColumn style={{width: '80%', fontSize: 15 }} >{item.message}</TableRowColumn>
                    </TableRow>)
                  }
                </TableBody>
              </Table>

              <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn colSpan="3" style={{fontSize: 20}}>
                      Sent
                    </TableHeaderColumn>
                  </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                  {this.state.sent.map((item, i) =>  
                    <TableRow key={i}>
                      <TableRowColumn style={{width: '20%', fontSize: 15 }}>{'To: ' + item.receiver.first}</TableRowColumn>
                      <TableRowColumn style={{width: '80%', fontSize: 15 }} >{item.message}</TableRowColumn>
                    </TableRow>)
                  }
                </TableBody>
              </Table>    


            </div>

            <div className="col-lg-12 col-sm-6 col-6" style={{
              height: '400px',
              display: 'flex',
              border: 'solid'
            }}>
               
                



            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default Main; 