 const scriptURL
 const form
 const btn

function setUpGoogleSheets() {
    scriptURL = 'https://script.google.com/macros/s/AKfycbwLMqEvVQYSSxeAL58DGDdNPwcDPOUhPRbErxkIYY_ElKVK6vv0umVDW5z5WM6d07k/exec'
    form = document.querySelector('#scoutingForm')
    btn = document.querySelector('#submit')
}

function sendToGoogleSheets(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwLMqEvVQYSSxeAL58DGDdNPwcDPOUhPRbErxkIYY_ElKVK6vv0umVDW5z5WM6d07k/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    
}
