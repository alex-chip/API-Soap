const soap = require('soap')
const url = 'https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL'

const args = {string: ''}
const monedas = soap.createClient(url, function(err, client) {
  client.VariablesDisponibles(args, function (err, result) {
    const data = result.VariablesDisponiblesResult.Variables.Variable
    console.log(data)
    //console.log(data.sort(function(a, b) { return b.moneda - a.moneda }))
    console.log(data.sort((a, b) => b.moneda - a.moneda))
    return data
  })
})


