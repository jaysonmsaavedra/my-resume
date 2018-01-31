import React, { Component } from 'react'
import { Image, Segment, Header, Responsive, List } from 'semantic-ui-react'
import axios from 'axios'

export default class Topbar extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: ''
  }

  getUserInfo() {
    axios.get('http://localhost:3006/api/personal')
      .then(res =>
        this.setState({
          first_name: res.data.data[0].firstName,
          last_name: res.data.data[0].lastName,
          email: res.data.data[0].email,
          phone_number: res.data.data[0].phoneNumber
        }
      )
    )
  }

  componentDidMount() {
    this.getUserInfo()
  }

  handleOnUpdate = (e, { width }) => this.setState({ width })

  render() {
    const { width } = this.state;
    const textAlign = width >= Responsive.onlyComputer.minWidth ? 'right': 'center'
    return (
      <div className='Topbar'>
        <Header as='h2' className='Header' stackable>
          <Image circular src='https://s3-us-west-2.amazonaws.com/my-resume-images/jaysonproshot.jpg' size='massive' />
          <Header.Content>
            {this.state.first_name} {this.state.last_name}
            <Header.Subheader>
              Junior Full Stack Developer
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Header.Content className='ContactInfo'>
          <Header.Subheader sub>
            <List>
              <List.Item>
                <List.Icon name='phone' />
                <List.Content><a href='tel:+1-760-213-5813'>{this.state.phone_number}</a></List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='mail' />
                <List.Content>
                  <a href='mailto:jaysonmsaavedra@gmail.com'>{this.state.email}</a></List.Content>
              </List.Item>
            </List>
          </Header.Subheader>
        </Header.Content>
      </div>
    )
  }
}
