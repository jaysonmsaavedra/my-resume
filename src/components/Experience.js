import React, { Component } from 'react'
import { List, Header }             from 'semantic-ui-react'

export default class Experience extends Component {
  render() {
    return(
      <div>
        <Header as='h1'>Professional Experience</Header>
        <List>
          <List.Item>
            <List.Header as='h3'>DealerSocket, Inc.</List.Header>
            <List.Description as='h4'>Junior Full Stack Developer - August to Present</List.Description>
            <List.List>
              <List.Content>● Created custom legal forms using ASPX and PDF format</List.Content>
              <List.Content>● Worked directly with customers to gather and fulfill their custom requirements</List.Content>
              <List.Content>● Integrated the custom forms with the company’s SQL database</List.Content>
            </List.List>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'>DealerSocket, Inc.</List.Header>
            <List.Description as='h4'>CRM Senior Support Agent - February to August</List.Description>
            <List.List>
              <List.Content>● Exceeded the required metrics of the senior agents</List.Content>
              <List.Content>● Led innovation on the company’s case template, greatly increasing call stats for all agents</List.Content>
              <List.Content>● Diagnosed malfunctioning software on clients devices via remote access</List.Content>
              <List.Content>● Trained customers to continue resolving different system issues</List.Content>
            </List.List>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'>Parentsware, LLC</List.Header>
            <List.Description as='h4'>QA Engineering Intern - June 2015</List.Description>
            <List.List>
              <List.Content>● Generated test data according to specification, accurately, and faster than expected</List.Content>
              <List.Content>● Executed load tests that were above and beyond my duties</List.Content>
              <List.Content>● Participated in scrum (daily meeting); only one of three interns to do so</List.Content>
              <List.Content>● Installed JMeter, ran load tests, and accurately reported results to my supervisor</List.Content>
            </List.List>
          </List.Item>
        </List>
      </div>
    )
  }
}
