import React from 'react';
import Card from './Card';


function All({data}) {


  return (
    <div className='container'>
        <div className="row py-5 d-flex justify-content-center">
        {data.map((item,id) => {
          return (
            <>
              <Card id={id} item={item} />
            </>
          );
        })} 
      </div>
    </div> 
      )
}

      export default All;