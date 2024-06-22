import React from 'react'
import Card from './Card'

export default function Career({data}) {

    const career = data.filter((item)=>item.content === "Career")

  return (
    <div className='container'>
        <div className="row py-5 d-flex justify-content-center" >
        {career.map((item, id) => {
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
