import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

import Contact from './Contact'

export default class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <Image src='https://goo.gl/4wCyfw' size='tiny' circular />
        <Contact />
      </div>
    )
  }
}
