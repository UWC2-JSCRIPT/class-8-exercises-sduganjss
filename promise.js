
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      const randNum = Math.random(); 
      console.log(randNum);
      if (randNum > .5) {
        resolve()
      } else {
        reject()
      }
      
    }, 1000);
  });
  
  
  myPromise
    .then(function() {
      console.log('success');
      console.log('complete');
    })
    .catch(function() {
      console.log('failure');
      console.log('complete');
    });
     
  
   

