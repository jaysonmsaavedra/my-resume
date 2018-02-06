import React, { Component } from 'react'
import { List }             from 'semantic-ui-react'

export default class Home extends Component {
  render() {
    return(
      <div>
        <List className="List">
          <List.Item className="ListItem AboutMe">
            <List.Header as='h3'>About Me</List.Header>
            <List.Content>
              I am an aspiring developer focused on doing things the right way the first time. I am a quick learner and
              will not rest until I have accomplished our goals. I have repeatedly demonstrated the ability to fix
              hardware and software problems. I’m very pro-active and willing to take the lead. I thrive in a group
              environment and am always looking for the best outcome for the team. I crave learning new skills, and
              look forward to helping contribute to your team.
            </List.Content>
          </List.Item>
          <List.Item className="ListItem MyInterests">
            <hr />
            <List.Header as='h3'>My Interests</List.Header>
            <List.Content>
              Growing up my dad was a software developer and the concept of it has always intrigued me. One of the
              benefits of this is being exposed to programming concepts at a very young age and being surrounded by
              them. I took my first programming course at the age of 14 and since then I've worked on countless personal
              projects from all over the spectrum. The language I've found that fascinates me the most has been
              JavaScript, I love the initial simplicity and the ability to scale it to handle lots of different types of
              work.
            </List.Content>
          </List.Item>
        </List>
      </div>
    )
  }
}
