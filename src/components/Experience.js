import React, { Component } from 'react'
import { List, Header, Input }             from 'semantic-ui-react'

export default class Experience extends Component {

  render() {
    return(
      <div>
        <Header as='h1'>Professional Experience</Header>
        <List>
          <List.Item>
            <List.Header as='h3'>Junior Full Stack Developer</List.Header>
            <List.Description as='h4'>DealerSocket, Inc. - August to Present</List.Description>
            <List.List>
              <List.Content>● Created custom legal forms using HTML and JavaScript</List.Content>
              <List.Content>● Worked directly with customers to gather and fulfill their custom requirements</List.Content>
              <List.Content>● Integrated the custome forms with the company's SQL database</List.Content>
            </List.List>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'>CRM Senior Support Agent</List.Header>
            <List.Description as='h4'>DealerSocket, Inc. - February to August</List.Description>
              <List.List>
                <List.Content>● Exceeded the required metrics of the senior agents</List.Content>
                <List.Content>
                  ● Led innovation on the company's case template, greatly improving the productivity of all of the agents
                </List.Content>
                <List.Content>● Diagnosed malfunctioning software on clients devices via remote access</List.Content>
              </List.List>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'>QA Engineering Intern</List.Header>
            <List.Description as='h4'>Parentsware, LLC. - June 2015</List.Description>
              <List.List>
                <List.Content>
                  ● Generated test data according to specification, accurately, and faster than expected
                </List.Content>
                <List.Content>● Participated in scrum; only one of three interns to do so</List.Content>
                <List.Content>
                  ● Installed JMeter, ran load tests, and accurately reported results to my supervisor
                </List.Content>
              </List.List>
          </List.Item>
        </List>
      </div>
    )
  }
}
