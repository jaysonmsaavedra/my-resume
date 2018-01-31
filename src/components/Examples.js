import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

export default class Examples extends Component {
  state = { activeItem: 'demo1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item name='demo1' active={activeItem === 'demo1'} onClick={this.handleItemClick} />
            <Menu.Item name='demo2' active={activeItem === 'demo2'} onClick={this.handleItemClick} />
            <Menu.Item name='demo3' active={activeItem === 'demo3'} onClick={this.handleItemClick} />
            <Menu.Item name='demo4' active={activeItem === 'demo4'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={14}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
