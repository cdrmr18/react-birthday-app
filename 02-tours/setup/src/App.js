import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  return (
    <main>
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
                <button class="delete-btn"></button>
              </div>
            </footer>
          </article>
        </div>

      </section>
    </main>
  )
}

export default App
