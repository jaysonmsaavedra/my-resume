import React, { Component } from 'react'
import { List, Header, Input }             from 'semantic-ui-react'
import axios from 'axios'

export default class Experience extends Component {
  state = {
    company1: '',
    position1: '',
    res1_1: '',
    res1_2: '',
    res1_3: '',
    res1_4: '',
    res1_5: '',
    company2: '',
    position2: '',
    res2_1: '',
    res2_2: '',
    res2_3: '',
    res2_4: '',
    res2_5: '',
    company3: '',
    position3: '',
    res3_1: '',
    res3_2: '',
    res3_3: '',
    res3_4: '',
    res3_5: ''
  }

  getJobInfo() {
    axios.get('http://487057627162.dkr.ecr.us-west-2.amazonaws.com/rest_api:3006/api/experience')
      .then(res => {
        this.setState({
          company1: res.data.data[0].company,
          position1: res.data.data[0].position,
          res1_1: res.data.data[0].res1,
          res1_2: res.data.data[0].res2,
          res1_3: res.data.data[0].res3,
          res1_4: res.data.data[0].res4,
          res1_5: res.data.data[0].res5,
          company2: res.data.data[1].company,
          position2: res.data.data[1].position,
          res2_1: res.data.data[1].res1,
          res2_2: res.data.data[1].res2,
          res2_3: res.data.data[1].res3,
          res2_4: res.data.data[2].res4,
          res2_5: res.data.data[2].res5,
          company3: res.data.data[2].company,
          position3: res.data.data[2].position,
          res3_1: res.data.data[2].res1,
          res3_2: res.data.data[2].res2,
          res3_3: res.data.data[2].res3,
          res3_4: res.data.data[2].res4,
          res3_5: res.data.data[2].res5,
        })
      })
  }

  componentDidMount() {
    this.getJobInfo()
  }

  render() {
    return(
      <div>
        <Header as='h1'>Professional Experience</Header>
        <List>
          <List.Item>
            <List.Header as='h3'>{this.state.company1}</List.Header>
            <List.Description as='h4'>{this.state.position1} - August to Present</List.Description>
            <List.List>
              <List.Content>● {this.state.res1_1}</List.Content>
              <List.Content>● {this.state.res1_2}</List.Content>
              <List.Content>● {this.state.res1_3}</List.Content>
            </List.List>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'>{this.state.company2}</List.Header>
            <List.Description as='h4'>{this.state.position2} - February to August</List.Description>
              <List.List>
                <List.Content>● {this.state.res2_1}</List.Content>
                <List.Content>● {this.state.res2_2}</List.Content>
                <List.Content>● {this.state.res2_3}</List.Content>
              </List.List>
          </List.Item>
          <hr />
          <List.Item>
            <List.Header as='h3'>{this.state.company3}</List.Header>
            <List.Description as='h4'>{this.state.position3} - June 2015</List.Description>
              <List.List>
                <List.Content>● {this.state.res3_1}</List.Content>
                <List.Content>● {this.state.res3_2}</List.Content>
                <List.Content>● {this.state.res3_3}</List.Content>
                <List.Content>● {this.state.res3_4}</List.Content>
              </List.List>
          </List.Item>
        </List>
      </div>
    )
  }
}
