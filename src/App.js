import React, {useState, useEffect} from "react";
import Header from './components/Header.js';
import Card from './components/Card.js';

import axios from "axios";


const App = () => {

  const [categories, setCategories] = useState({ categories: [] });
  const [activeCategory, setActiveCategory] = useState('All');

  const [caseStudies, setCaseStudies] = useState({['case-studies']: [] });
  const [filteredCaseStudies, setFilteredCaseStudies] = useState({['case-studies']: [] });

  
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get('https://plankdesign.com/wp-json/plank/v1/fed-test/categories');
    setCategories(response.data);
  };


  useEffect(() => {
      getCaseStudies();
    }, []);


  const getCaseStudies = async () => {
    const response = await axios.get("https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies");
    setCaseStudies(response.data);
    setFilteredCaseStudies(response.data);
  };    

 

  return (
    <div className="App text-soft-grey">
      <div className="container px-4 py-5">
        
        <Header caseStudies={caseStudies} filteredCaseStudies={filteredCaseStudies} setFilteredCaseStudies={setFilteredCaseStudies} categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        <div className="grid grid-cols-2 gap-12">
          {filteredCaseStudies['case-studies'].map((caseStudy) => {
            return (
                <Card item={caseStudy} key={caseStudy.id} />
              )
          })}
        </div> 
        
      </div>
    </div>
  );
};



export default App;



