const ks = require('node-key-sender');

console.log('Starting script in 5 seconds...');

setTimeout(() => {
  console.log('Sending ENTER key...');
  // ks.sendKey('tab')
  
  ks.sendKey('enter');

  setTimeout(() => {
    console.log('Sending CTRL+TAB...');
    
    ks.sendCombination(['control', 'tab']);
    
    console.log('Script finished.');
  }, 100); 

}, 5000); 
