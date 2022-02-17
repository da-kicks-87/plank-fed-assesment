import React, {useEffect} from 'react';
import axios from "axios";



const Card = ({item}) => {
  
    return (
      <>
            <div className="grid grid-cols-3" key={item.id}> 
              <div className="col-span-1"><img src={item.thumbnail} /></div>
              <div className="col-span-2">
                  <h3>{item.categories[0].title}</h3>
                  <hr className="mb-5" />

                  <h2>{item.title}</h2>
                  <p>{item.excerpt}</p>
              </div>
            </div>
      </>
    );

  };
  
export default Card;


