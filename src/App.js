import React, {useState, useEffect} from "react";
import Header from './components/Header.js';
import Card from './components/Card.js';

import axios from "axios";


const App = () => {

  const [categories, setCategories] = useState({ categories: [] });
  const [caseStudies, setCaseStudies] = useState({['case-studies']: [] });
  


  useEffect(() => {
    const getCategories = async () => {
        const response = await axios.get('https://plankdesign.com/wp-json/plank/v1/fed-test/categories');
        setCategories(response.data);
    };
    getCategories();

  }, []);


  useEffect(() => {
        const getCaseStudies = async () => {
          const response = await axios.get("https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies");
          setCaseStudies(response.data);
        };
        getCaseStudies();
      }, []);


 

  return (
    <div className="App">
      <div className="container px-4 py-5">
        <Header />
        
        <div className="grid grid-cols-2 gap-5">
          {caseStudies['case-studies'].map((caseStudy,i) => {
            return (
                <Card item={caseStudy} key={caseStudy.slug} />
              )
          })}
        </div> 
        
      </div>
    </div>
  );
};



export default App;



