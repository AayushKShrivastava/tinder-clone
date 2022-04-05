import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import axios from './axios';
import TinderLogo from './images/tinderLogo.png'

function TinderCards() {
    const [people, setPeople] = React.useState([]);

    React.useEffect(() => {
      async function fetchData(){
        const req = await axios.get("/tinder/cards");
        setPeople(req.data);
      }
      fetchData();
    }, [])

    console.log(people)

    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete + direction)
    }

    const outOfFrame = (name) => {
      console.log(name + ' left to the screen')
    }

  return (
    <div className='tinderCards'>
      <div className='tinderCards_cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div 
              className='card' style={{backgroundImage: "url(" + person.imgUrl + ")"}}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      
    </div>
  )
}

export default TinderCards