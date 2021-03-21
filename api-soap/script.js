// function soapRequest() {
//   const str = 'http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?op=TipoCambioDia'

//   function createCORSRequest(method, url) {
//     let xhr = new XMLHttpRequest()
//     if('withCredentials' in xhr) {
//       xhr.open(method, url, false)
//     } else if (typeof XDomainRequest in 'undefined') {
//       alert('hey')
//       xhr = new XDomainRequest()
//       xhr.open(method, url)
//     } else {
//       console.log('CORS not supported')
//       alert('CORS nor supported')
//       xhr = null
//     }
//     return xhr
//   }
//   let xhr = createCORSRequest('POST', 'http://localhost:5500')
//   if(!xhr) {
//     console.log('XHR issue')
//     return
//   }

//   xhr.onload = function() {
//     const results = xhr.responseText
//     console.log(results)
//   }

//   xhr.setRequestHeader('Content-Type', 'text/xml')
//   xhr.send(str)
// }

// soapRequest()

const app = document.querySelector('#app')
const getData = () => {
  const sr =
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
      '<soap:Body>' +
        '<TipoCambioDia xmlns="http://www.banguat.gob.gt/variables/ws" />' +
      '</soap:Body>' +
    '</soap:Envelope>'


  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?op=TipoCambioDia')

  xhr.onload = () => {
    //const data = JSON.stringify(xhr.response)
    data = xhr.responseText
    //console.log(data)
    app.innerHTML = data
    console.log(xhr.responseXML)
  }

  xhr.setRequestHeader('Content-Type', 'text/xml')
  xhr.setRequestHeader('SOAPAction', 'http://www.banguat.gob.gt/variables/ws/TipoCambioDia')
  xhr.send(sr)
}

getData()


// const reqListener = () => {
// }

// const oReq = new XMLHttpRequest()
// oReq.addEventListener('load', function() {

//   console.log(this.responseText)
// })
// oReq.open('GET', 'http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?op=TipoCambioDia/')
// oReq.send()


// function soap() {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.open('POST', 'http://www.banguat.gob.gt/variables/ws/TipoCambioDia', true);

//   // build SOAP request
//   var sr =
//     '<?xml version="1.0" encoding="utf-8"?>' +
//     '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
//       '<soap:Body>' +
//         '<TipoCambioDia xmlns="http://www.banguat.gob.gt/variables/ws/" />' +
//       '</soap:Body>' +
//     '</soap:Envelope>'

//   xmlhttp.onreadystatechange = function () {
//       if (xmlhttp.readyState == 4) {
//           if (xmlhttp.status == 200) {
//               alert(xmlhttp.responseText);
//               // alert('done. use firebug/console to see network response');
//           }
//       }
//   }
//   // Send the POST request
//   xmlhttp.setRequestHeader('Content-Type', 'text/xml')
//   xmlhttp.send(sr)
// }

// soap()