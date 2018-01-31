import React, { Component } from 'react'

import Routes from './Routes.js'

import { Menu, Segment }    from 'semantic-ui-react'
import { Link }             from 'react-router-dom'

export default class AppNavbar extends Component {
  state =  { activeItem: 'skills'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item as={Link} to='/skills' name='skills' active={activeItem === 'skills'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/education' name='education' active={activeItem === 'education'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to='/experience' name='experience' active={activeItem === 'experience'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/contact' name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Segment>
          <Routes />
        </Segment>
      </div>
    )
  }
}
