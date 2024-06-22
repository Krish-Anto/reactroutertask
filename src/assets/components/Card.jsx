function Card({item,id}) {
  
    return (
      <>
      
        <div key={id} className="col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4" >
          <div className="card h-100"  >
            <img src={item.img} className="card-img-top image-with-box-shadow" height='200' alt="..." />
            <div cl assName="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-read">Read more »</p>
              
            </div>
            <div className="card-footer">
              <small className="custom-card-footer">{item.date}<li>No Comments</li></small>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Card;