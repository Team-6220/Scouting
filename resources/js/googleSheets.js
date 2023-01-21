 var scriptURL
 var form
 var btn

function setUpGoogleSheets() {
    scriptURL = 'https://script.google.com/macros/s/AKfycbwLMqEvVQYSSxeAL58DGDdNPwcDPOUhPRbErxkIYY_ElKVK6vv0umVDW5z5WM6d07k/exec'
    form = document.querySelector('#scoutingForm')
    btn = document.querySelector('#submit')
}

function sendToGoogleSheets(){

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})
    
}
