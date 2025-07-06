const instance = require('./instance')

function request(response){
  return response
  .then(response => response.data)
  .catch(error => {
    console.log('Erro na requisição: ', error.message)
    return error;
  });
}
  
function getModalidades(){
  const result = request(instance.get('modalidades'))
  result.then(data =>{
    console.log(data)/*Para testes*/
    return data
  })
}

getModalidades()
