import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Details() {
    let navigate=useNavigate();
    const {id}=useParams();
    const [detail, setDetail] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => { 
     axios.get(`https://fakestoreapi.com/products/${id}`)
     .then((res)=>{setDetail(res.data);  setLoading(false)})
     .catch((err)=>console.log(err))
    }, [id])
    
  return (
    <div>
        
        {
            loading? <div class="ring">Loading  <span></span></div>: 

            <section className='popup'>
                <div className="content">
                    <h2  style={{display:'inline'}}>{detail.title} 
                    <div  style={{display:'inline'}}> ({ detail.price } €)</div></h2>            
                    <p className="rating">Rating : {detail.rating.rate}</p>
                    <div className="plot">
                        <img  src={detail.image} alt="img-detail"  className="" />
                        <p>{detail.description}</p>
                    </div>
                    <button className="back"  onClick={()=>navigate('/')}>Back</button>
                </div>
            </section>
        }
    </div>
  )
}

export default Details