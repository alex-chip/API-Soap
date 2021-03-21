from zeep import Client, Settings

settings = Settings()

client = Client('https://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL', settings=settings)

doc = client.service.TipoCambioDia()

print('Variables Disponibles')
print(doc)
