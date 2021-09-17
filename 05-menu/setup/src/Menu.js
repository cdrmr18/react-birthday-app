import React from 'react';

const Menu = (props) => {
  return (
    <section className="menu-section">
      {props.items.map((item)=>{
        const {id, img, title, price, desc} = item;
        return (
          <article key={id} className="menu-item">
          <img src={img} alt={title} className="photo"/>
          <div className="item-info">
            <header>
              <h4>{title}</h4>
              <h4 className="price">
                {price}
              </h4>
            </header>
            <p className="item-next">
              {desc}
            </p>
          </div>
        </article>
        )
      })}
    </section>
  )
};

export default Menu;
