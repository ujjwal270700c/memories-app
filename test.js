const Unique=(arr)=>{
    var UniqueArray=[];
     arr.forEach((element,index) => {
      const num= UniqueArray.find(e => e==element);
      if(!num){
        UniqueArray.push(element)
      }
     });
     return UniqueArray
  }
  
 console.log(Unique([1,1,5,7,3,8,2,4,4])); 