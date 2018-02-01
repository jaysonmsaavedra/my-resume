import React, { Component } from 'react'
import { List }             from 'semantic-ui-react'

export default class Home extends Component {
  render() {
    return(
      <div>
        <List>
          <List.Item>
            <List.Header as='h3'>About Me</List.Header>
            <List.Content>
              I am an aspiring developer focused on doing things the right way the first time. I am a quick learner and
              will not rest until I have accomplished our goals. I have repeatedly demonstrated the ability to fix
              hardware and software problems. I’m  very pro-active and willing to take the lead. I thrive in a group
              environment always looking for the best outcome for the team. I crave learning new skills, and look
              forward to helping contribute to your team.
            </List.Content>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'>About this Website</List.Header>
            <List.Content>
              This page is built using ReactJS and it's being deployed on Netlify. The backend is a
              Docker image running a NodeJS server built with Express being hosted on an AWS EC2 instance. 
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}
