window.onload = (() => {
  console.log('inside window.onload');
  })
  
 
      window.onload = ((() => {
  console.log('inside iif window.onload');
  })())
