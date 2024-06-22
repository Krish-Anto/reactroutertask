import React from 'react'
import Card from './Card';

function DataScience({data}) {

  const dataScience = data.filter((item) => item.content === "Data Science");

  return(
    <div className='container'>
        <div className="row py-5 d-flex justify-content-center">
        {dataScience.map((item, index) => {
          return (
            <>
              <Card item={item} index={index}/>
            </>
          );
        })}
      </div>
    </div>
  )
}

export default DataScience