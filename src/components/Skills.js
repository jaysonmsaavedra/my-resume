import React, { Component } from 'react'
import { List }             from 'semantic-ui-react'

export default class Skills extends Component {
  render() {
    return(
      <div>
        <List>
          <List.Item>
            <List.Header>Languages/Frameworks</List.Header>
            <List.Content>
              bash, Git, Maven, DropWizard, PostgreSQL, AWS, HTML, CSS, NodeJS, ReactJS, jQuery, Bootstrap, SCSS, ASP.NET, ASPX
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}
