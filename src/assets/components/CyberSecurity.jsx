import React from 'react'
import Card from './Card'

export default function CyberSecurity({data}) {
console.log(data);
const cybersec = data.filter((item)=>item.content === "Cyber Security");
console.log(cybersec);
  return (
    <div className='container'>
        <div className="row py-5 d-flex justify-content-center">
        {cybersec.map((item, id) => {
          return (
            <>
              <Card item={item} id={id}/>
            </>
          );
        })}
      </div>
    </div>
  )
}
