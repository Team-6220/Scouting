function sendToGoogleSheets(){

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch('https://script.google.com/macros/s/AKfycbwi17fq9jWzfv2EkuhCDd7JkybSQdRn6WeLvGiMqsJMLqKhPWn3iUbYt8HdzTBFL3BxNw/exec', { method: 'POST', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})
    
}
