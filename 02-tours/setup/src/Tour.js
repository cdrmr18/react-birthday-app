import React, { useState } from 'react';

const Tour = () => {
  

  return (
    <section>
      <div className="title">
        <h2>tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        <article className="single-tour">
          <img src="" alt="" />
          <footer>
            <div className="tour-info">
              <p>
                details 
                <button>read more</button>
              </p>
              <button class="delete-btn">Not Interested</button>
            </div>
          </footer>
        </article>
      </div>
    </section>
  )
};

export default Tour;
