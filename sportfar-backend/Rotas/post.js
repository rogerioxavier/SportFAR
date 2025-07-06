const instance = require('./instance')

function request(promise){
  return promise
  .then(response => response.data)
  .catch(error => {
    console.log('Erro na requisição: ', error.message)
    return error;
  });
}

function createModalidades(data){
  const result = request(instance.post('modalidades'),data)
  result.then(data =>{
    console.log(data)/*Para testes*/
    return data
  })
}
createModalidades(data)
