console.log('outside');

document.addEventListener(
  'load',
  (() => {console.log('inside iif  load addEvenetListtern');})())
  
  document.addEventListener(
  'DOMContentLoaded',
  (() => {console.log('inside iif DOMContentLoaded addEvenetListtern');})())
  
  document.addEventListener(
  'load',
  () => {console.log('inside load addEvenetListtern');})
  
  document.addEventListener(
  'DOMContentLoaded',
  () => {console.log('inside DOMContentLoaded addEvenetListtern');})
