import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const {id, image, job, name, text} = people[index]


  const prevPerson = () => {
    setIndex((index) => {
      const new_index = index - 1
      return checkNumber(new_index)
    })
  }


  const nextPerson = () => {
    setIndex((index) => {
      const new_index = index - 1
      return checkNumber(new_index)
    })
  }

  const checkNumber = (number) =>{
    if (number > people.length - 1){
      return 0
    }
    if (number < 0){
      return people.length - 1
    }
    return number
  }

  const randomPerson = () => {
    let new_index = Math.floor(Math.random() * people.length)
    if (new_index === index){
      new_index = new_index + 1
    }
    new_index = checkNumber(new_index)
    setIndex(new_index)

  }




  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
