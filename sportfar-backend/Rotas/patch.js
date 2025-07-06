const instance = require('./instance')

function request(promise){
  return promise
  .then(response => response.data)
  .catch(error => {
    console.log('Erro na requisição: ', error.message)
    return error;
  });
}
  
function updateModalidade(id,data){
  const result = request(instance.patch(`modalidades/${id}`),data)
  result.then(data =>{
    console.log(data)/*Para testes*/
    return data
  })
}
updateModalidade(4)
