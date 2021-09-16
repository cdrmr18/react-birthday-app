import React from 'react';
import Tour from './Tour';
const Tours = ({tours, deleteTourInfo}) => {
  return (
    <section>
      <div>
        {tours.map((tour)=>{
          return <Tour key={tour.id} {...tour} deleteTourInfo={deleteTourInfo} />
        })}
      </div>
    </section>
  )
};

export default Tours;
