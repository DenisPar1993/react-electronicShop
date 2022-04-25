export const callBackendAPI = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };


  export const filtItem=(arr,company)=>{
    
    const midArr=[]
    let resArr=[]
    company.forEach(elem=>{
        midArr.push(arr.filter(item=>elem===item.characteristics.brand))
    })
    
    
    
    midArr.forEach((elem,i)=>{
    resArr= resArr.concat(elem)
    })
    return resArr
    
  }

  export const filtPrice=(arr,price=null)=>{
    
    let bu=arr
    
    if(price.from){
     bu= bu.filter(item=>item.price>price.from) 
    }
    if(price.before){
      bu= bu.filter(item=>item.price<price.before) 
    }
    console.log('asdsad ',bu);
    return bu
   

  }