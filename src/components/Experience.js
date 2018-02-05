import React, { Component } from 'react'
import { List, Header, Input }             from 'semantic-ui-react'

export default class Experience extends Component {

  render() {
    return(
      <div>
        <Header as='h1'>Professional Experience</Header>
        <List>
          <List.Item>
            <List.Header as='h3'></List.Header>
            <List.Description as='h4'> - August to Present</List.Description>
            <List.List>
              <List.Content>● </List.Content>
              <List.Content>● </List.Content>
              <List.Content>● </List.Content>
            </List.List>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'></List.Header>
            <List.Description as='h4'> - February to August</List.Description>
              <List.List>
                <List.Content>● </List.Content>
                <List.Content>● </List.Content>
                <List.Content>● </List.Content>
              </List.List>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'></List.Header>
            <List.Description as='h4'> - June 2015</List.Description>
              <List.List>
                <List.Content>● </List.Content>
                <List.Content>● </List.Content>
                <List.Content>● </List.Content>
                <List.Content>● </List.Content>
              </List.List>
          </List.Item>
        </List>
      </div>
    )
  }
}
