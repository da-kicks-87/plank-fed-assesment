import {useEffect} from "react";

const Header = ({caseStudies, filteredCaseStudies, setFilteredCaseStudies, categories, activeCategory, setActiveCategory}) => {

    useEffect(() => {
      if (activeCategory === 'All') {
        setFilteredCaseStudies(caseStudies);
        return;
      }
      const filtered = caseStudies['case-studies'].filter(item => item.categories[0].title === activeCategory);
      
      setFilteredCaseStudies({['case-studies']: filtered });
    
    }, [activeCategory]);

    return (
      <>
        <header className="mb-10">
            <h1 className="text-5xl font-bold uppercase mb-5">
                Work
            </h1>
            <nav className="flex flex-row py-5">
                <button className={'uppercase px-4 ' + (activeCategory === 'All' ? 'active' : '')} 
                onClick={() => setActiveCategory('All')}>
                  All
                </button>  
                {categories.categories.map((category) => {
                  return (
                    <button className={'uppercase px-4 ' + (activeCategory === category.title ? 'active' : '')}  onClick={() => setActiveCategory(category.title)} key={category.slug}>{category.title}</button>
                  )
                })}
            </nav>
            <hr />
        </header>
      </>
    );
  };
  
export default Header;