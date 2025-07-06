const instance = require('./instance')

function request(response){
  return response
  .then(response => response.data)
  .catch(error => {
    console.log('Erro na requisição: ', error.message)
    return error;
  });
}
  
function getModalidadesId(id){
  const result = request(instance.get(`modalidades/${id}`))
  result.then(data =>{
    console.log(data)/*Para testes*/
    return data
  })
}
getModalidadesId(3)
