const soap = require('soap')
const { daysAgo, today } = require('../libs/getDate')
const Controllers = () => {}

[]

const url = 'https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL'

Controllers.getAllTipoMonedas = (req, res) => {
  const args = {string: ''}

  soap.createClient(url, function(err, client) {
    client.VariablesDisponibles(args, function(err, result) {
      const data = result.VariablesDisponiblesResult.Variables.Variable
      console.log(data)
      res.render('index', { data, 'title': 'Tipo de Monedas' })
    })
  })
}

Controllers.getCambioDelDia = (req, res) => {
  const args = {string: ''}

  soap.createClient(url, function(err, client) {
    client.TipoCambioDia(args, function(err, result) {
      const data = result.TipoCambioDiaResult.CambioDolar.VarDolar[0]

      res.render('cambioDelDia', { data, 'title': 'Cambio del Día' })
    })
  })
}

Controllers.tipoCambioFechaInicial = (req, res) => {
  const args = {fechainit: daysAgo, fechafin: today}

  soap.createClient(url, function(err, client) {
    client.TipoCambioRango(args, function(err, result) {
      const data = result.TipoCambioRangoResult.Vars.Var
      //console.log(data)

      res.render('cambioFechaInicial', { data, 'title': 'Cambio desde hace 5 Días' })
    })
  })
}

module.exports = Controllers
