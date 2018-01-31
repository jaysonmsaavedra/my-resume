import React, { Component } from 'react'

import Routes from './Routes.js'

import { Menu, Segment, Image, Container }    from 'semantic-ui-react'
import { Link }             from 'react-router-dom'

export default class AppNavbar extends Component {
  state =  { activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className='AppNavbar'>
        <Menu className='Menu' stackable pointing secondary>
          <Menu.Item className='menuItem' as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item className='menuItem' as={Link} to='/skills' name='skills' active={activeItem === 'skills'} onClick={this.handleItemClick} />
          <Menu.Item className='menuItem' as={Link} to='/education' name='education' active={activeItem === 'education'} onClick={this.handleItemClick} />
          <Menu.Item className='menuItem' as={Link} to='/experience' name='experience' active={activeItem === 'experience'} onClick={this.handleItemClick} />
          <Menu.Item className='menuItem' as={Link} to='/examples' name='examples' active={activeItem === 'examples'} onClick={this.handleItemClick} />
        </Menu>

        <Segment>
          <Routes style={{ height: '100vh' }} />
        </Segment>
      </div>
    )
  }
}
