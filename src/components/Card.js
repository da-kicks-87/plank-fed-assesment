import SvgArrowIcon from "./svgs/ArrowIcon.js";


const Card = ({item}) => {
  
    return (
      <>
            <div className="grid grid-cols-5 gap-7 z-20" key={item.id}> 
              <div className="col-span-2"><img src={item.thumbnail} className="block mr-4" /></div>
              <div className="col-span-3 ">
                  <h6 className="uppercase text-xs mb-1">{item.categories[0].title}</h6>
                  <hr className="mb-5" />
                  <h1 className="text-3xl font-black mb-5">{item.title}</h1>
                  <p className="font-medium pr-5 mb-12">{item.excerpt}</p>

                  <a href={item.link} className="uppercase border text-xs p-2 block w-[153px] mr-0 ml-auto">
                    View Case Study

                    <SvgArrowIcon className="inline-block align-baseline ml-3" />
                  
                  </a>
              </div>
            </div>
      </>
    );

  };
  
export default Card;


