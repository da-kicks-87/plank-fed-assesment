import React, {useState, useEffect} from "react";
import Header from './components/Header.js';
import Card from './components/Card.js';
import SvgAsset1 from "./components/svgs/Asset1.js";
import SvgAsset2 from "./components/svgs/Asset2.js";
import SvgAsset3 from "./components/svgs/Asset3.js";


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

    <SvgAsset2 className="mr-0 ml-auto" />
      <div className="container px-4 py-5 z-10">
        
        <Header caseStudies={caseStudies} filteredCaseStudies={filteredCaseStudies} setFilteredCaseStudies={setFilteredCaseStudies} categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        <div className="grid grid-cols-1  md:grid-cols-2 gap-12">
          {filteredCaseStudies['case-studies'].map((caseStudy) => {
            return (
                <Card item={caseStudy} key={caseStudy.id} />
              )
          })}
        </div> 
        
      </div>

     
        <div className="flex justify-between items-end z-0 h-20 mt-10 md:mt-0 ">
            <SvgAsset3 className="z-0" />
            <SvgAsset1 className="z-0"/>
        </div>
     
      
    </div>
  );
};



export default App;



