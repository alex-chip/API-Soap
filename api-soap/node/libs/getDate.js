const fecha = new Date() // instancia de Date

// Calculamos el presente dia
const toDay = fecha.getDate() > 10 ? fecha.getDate() : `0${fecha.getDate()}`
const toMonth = fecha.getMonth() + 1
const month = toMonth > 10 ?  toMonth : `0${toMonth}`
const toAnio =  fecha.getFullYear()
const today = `${toDay}/${month}/${toAnio}`


// Calculando hace 5 dia a partir del presente dia

const milisecondsFiveDaysAgo = 1000 * 60 * 60 * 24 * 4 // calculo de 4 dias en milisegundos
const restaDias = fecha.getTime() - milisecondsFiveDaysAgo
const totalMiliseconds = new Date(restaDias)

const fromDay = totalMiliseconds.getDate() > 10 ? totalMiliseconds.getDate() : `0${totalMiliseconds.getDate()}`

const fromMonth = totalMiliseconds.getMonth() + 1
const desdeMonth = fromMonth > 10 ?  fromMonth : `0${fromMonth}`

const fromAnio =  totalMiliseconds.getFullYear()

const daysAgo = `${fromDay}/${desdeMonth}/${fromAnio}`

// console.log(today)
// console.log(daysAgo)

module.exports = {
  today,
  daysAgo
}