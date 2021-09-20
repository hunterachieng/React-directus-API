import React ,{useState, useEffect} from 'react'




export default function Images(){
    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = "http://127.0.0.1:8080/product/items/product?fields=image.data.image"

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            console.log(result.data);
            setProducts(result.data);
            
            
           
        })
         .catch(error =>{
            setLoading(true);
            setError(error);
         })
    }, [])
   
    if(error){
        return <div> Error: {error}</div>;
    }
    else if(!loading){
        return <div>Loading ...</div>;
    }
    else{
      
        return(
     <div className="images">
        
              <div >
               {products &&  products.map(item =><img src={item.url} alt="mangoes"/> )}  
                
                 
                </div>
                 </div>
 
     )
    }
    
}