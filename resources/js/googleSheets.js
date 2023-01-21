function sendToGoogleSheets(){

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch('https://script.google.com/macros/s/AKfycbwLMqEvVQYSSxeAL58DGDdNPwcDPOUhPRbErxkIYY_ElKVK6vv0umVDW5z5WM6d07k/exec', { method: 'POST', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})
    
}
