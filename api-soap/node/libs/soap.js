const soap = require('soap')
const url = 'https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL'

function tipoCambioFechaInicial() {

  for (let i = 1; i <= 15; i++) {
    let args = { fechainit: '15/02/2021', moneda: i}
    soap.createClient(url, function(err, client) {
      client.TipoCambioFechaInicialMoneda(args, function(err, result) {
        const data = result.TipoCambioFechaInicialMonedaResult.Vars
        console.log(data)

        //res.render('cambioFechaInicial', { data, 'title': 'Cambio desde hace 5 Días' })
      })
    })
  }
}

tipoCambioFechaInicial()
