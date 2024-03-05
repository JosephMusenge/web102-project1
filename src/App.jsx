import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div>
      {/*  */}
      <h2 className='heading'>This Week's Sports and Fitness Activities</h2>
      <div className='main'>
      <Card 
        image='https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Cycling'
        subtitle='Cycle around the town'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/3818832/pexels-photo-3818832.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Tennis'
        subtitle='Come and play tennis with us'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/3764538/pexels-photo-3764538.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Track and Field'
        subtitle='Excersice and have fun'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/33703/relay-race-competition-stadium-sport.jpg?auto=compress&cs=tinysrgb&w=600'
        title='Athletics'
        subtitle='Run and have fun'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Basketball'
        subtitle='Be a part of the team'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/4789457/pexels-photo-4789457.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Soccer'
        subtitle='Watch the ladies soccer team'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/9030279/pexels-photo-9030279.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Swimming'
        subtitle='Come and have fun in the pool'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/4804058/pexels-photo-4804058.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Boxing'
        subtitle='Train to fight like a pro'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/14133435/pexels-photo-14133435.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Yoga'
        subtitle='Relax and meditate'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/6787499/pexels-photo-6787499.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Deep Meditation'
        subtitle='Calm your mind and soul'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/6815684/pexels-photo-6815684.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Stretching'
        subtitle='Stretch your body and relax'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      <Card 
        image='https://images.pexels.com/photos/5916397/pexels-photo-5916397.jpeg?auto=compress&cs=tinysrgb&w=600'
        title='Rock Climbing'
        subtitle='Enjoy indoor rock climbing'
        link='https://www.eventbrite.com/blog/fitness-sport-event-ideas-ds00/'
      />
      </div>
    </div>
  )
}

export default App
