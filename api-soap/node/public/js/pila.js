const fs = require('fs')

const soap = require('soap')
const url = 'https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL'

class Stack {
  constructor() {
    // nuevo pila
    this.stack = []
  }

  // para guardar nueva moneda
  push(element) {
    this.stack.push(element)
    return this.stack
  }

  // eliminar ultimo registro
  pop() {
    return this.stack.pop()
  }

  // muestra el ultimo guardado
  peek() {
    return this.stack[this.stack.length - 1]
  }

  // muestra numero de registros
  size() {
    return this.stack.length
  }

  // muestra todos los registros
  print() {
    console.log(this.stack)
  }

  print() {
    console.log(this.stack)
  }
}

// funcion para obtener los datos de la api
// requiere tres parametros. fechaInicio, fechaFinal y el tipo de moneda a llamar
const getMoney = (fechainit, fechafin, moneda) => {
  // obtener los parametros
  const args = {fechainit: fechainit, fechafin: fechafin, moneda: moneda}

  // creamos un cliente
  soap.createClient(url, function(err, client) {
    // llamado a la api con
    client.TipoCambioRangoMoneda(args, function (err, result) {
      // se guarda los datos en la variable data
      if(err) {
        console.error('Error on server')
      } else {
        const data = result.TipoCambioRangoMonedaResult.Vars.Var
      }
      //console.log(data.length)

      // se guarda los datos en un archivo con una funcion
      saveFileJson(data)
    })
  })
}

// ejecutamos la funcion de obtener las monedas con sus parametros
getMoney('10/02/2021', '26/02/2021', 2)

// funcion para guardar los datos en un archivo
const saveFileJson = (data) => {
  fs.writeFile('archivo.json', JSON.stringify(data),'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

// leer el archivo y guardarlo en la variable
const readFile = fs.readFileSync('./archivo.json', 'utf8')

// convertir los datos a JSON
const data = JSON.parse(readFile)

// instanciamos un stack
const stack = new Stack()

// prueba de stack
console.log(`Total Registros: ${stack.size()}`)
stack.push(data[3])
stack.print()
