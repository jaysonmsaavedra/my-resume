import React, { Component } from 'react'

import { Menu, Segment }    from 'semantic-ui-react'

export default class AppNavbar extends Component {
  state =  { activeItem: 'skills'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='skills' active={activeItem === 'skills'} onClick={this.handleItemClick} />
          <Menu.Item name='education' active={activeItem === 'education'} onClick={this.handleItemClick} />
          <Menu.Item name='experience' active={activeItem === 'experience'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Segment>
          <img src='/assets/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}
