import React, { Component } from 'react'
import { Image, Segment, Header, Responsive, Grid } from 'semantic-ui-react'

export default class Topbar extends Component {
  state = {}

  handleOnUpdate = (e, { width }) => this.setState({ width })

  render() {
    const { width } = this.state;
    const textAlign = width >= Responsive.onlyComputer.minWidth ? 'right': 'center'

    return (
      <div className='Topbar'>
        <Header as='h2' className='Header' stackable>
          <Image circular src='https://res.cloudinary.com/saavy1/image/upload/v1517409225/jaysonproshot_vcbkdd.jpg' size='large' />
          <Header.Content>
            Jayson Saavedra
            <Header.Subheader>
              Junior Full Stack developer
            </Header.Subheader>
          </Header.Content>
        </Header>
        <Header.Content>
          <Header.Subheader sub>
            <a href='tel:+1-760-213-5813'>(760) 213-5813</a><br/>
            <a href='mailto:jaysonmsaavedra@gmail.com'>jaysonmsaavedra@gmail.com</a>
          </Header.Subheader>
        </Header.Content>
      </div>
    )
  }
}
