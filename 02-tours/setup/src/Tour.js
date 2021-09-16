import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price }) => {
  const [readMore, setReadMore] = useState(false);
  
  return (
    <section>
      <div>
        <article className="single-tour">
          <img src="" alt="" />
          <footer>
            <div className="tour-info">
              <p>
                details 
                <button>read more</button>
              </p>
              <button className="delete-btn">Not Interested</button>
            </div>
          </footer>
        </article>
      </div>
    </section>
  )
};

export default Tour;
