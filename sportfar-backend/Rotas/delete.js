const instance = require('./instance')

function request(promise){
  return promise
  .then(response => response.data)
  .catch(error => {
    console.log('Erro na requisição: ', error.message)
    return error;
  });
}

function DeleteModalidades(id){
  const result = request(instance.delete(`modalidades/${id}`))
  result.then(data =>{
    console.log(data)/*Para testes*/
    return data
  })
}
/* Por exemplo, deletar a molidade 4*/
DeleteModalidades(4)
