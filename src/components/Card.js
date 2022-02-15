import React, {useEffect} from 'react';
import axios from "axios";



const Card = () => {

    useEffect(() => {
        async function getCaseStudies() {
          const response = await axios.get("https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies");
          console.log(response);
        }
        getCaseStudies();
      }, []);

    return (
      <>
       <div className="grid grid-cols-3"> 
        <div className="col-span-1">Image here</div>
        <div className="col-span-2">
            <h3>Category here</h3>
            <hr className="mb-5" />

            <h2>Title Here</h2>
            <p>In quis ipsum neque. Sed non bibendum libero. Etiam malesuada sit amet lacus 
                in iaculis. Cras arcu turpis, euismod eget laoreet a, ullamcorper eu turpis.</p>
        </div>

       </div>
      </>
    );

  };
  
export default Card;


