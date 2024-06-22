import React from 'react'
import Card from './Card';


function FullStack({data}) {

const fullstack = data.filter((item) => item.content === "Full Stack Development");

  return (
    <div className='container'>
        <div className="row py-5 d-flex justify-content-center">
        {fullstack.map((item, id) => {
          return (
            <>
              <Card key={id} item={item} />
            </>
          );
        })}
      </div>
    </div>
  )
}

export default FullStack;
