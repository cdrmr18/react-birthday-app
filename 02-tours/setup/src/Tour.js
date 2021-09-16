import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, deleteTourInfo }) => {
  const [readMore, setReadMore] = useState(false);
   
  return (
    <section>
      <div>
        <article className="single-tour">
          <img src={image} alt={name} />
          <footer>
            <div className="tour-info">
              <h4>{name}</h4>
              <h4 className="tour-price">
                {price}
              </h4>
              </div>
              <p>
                {readMore ? info : info.substring(0,250)}
                <button onClick={() => setReadMore(!readMore)}>read more</button>
              </p>
              <button className="delete-btn" onClick={() => deleteTourInfo(id)}>Not Interested</button>
          </footer>
        </article>
      </div>
    </section>
  )
};

export default Tour;
