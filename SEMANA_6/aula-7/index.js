require('dotenv-safe').load(); // utilizado para criar o segredo que usaremos para criptografar as senhas
const jwt = require('jsonwebtoken'); // pega a chave e usa para gerar um token criptografado ou descriptografar

const express = require('express');
const postitsRoute = require('./postits/routes.js');
const usersRoute = require('./users/routes.js');
const Joi = require('joi');
const users = require('./users/users.js');
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use('/api/postits', postitsRoute);
app.use('/api/users', usersRoute);

app.post('/api/login', (req, res) => {
  
  /*const schema = {
    email: Joi.string().min(3).required(),
    password: Joi.string().min(3).required()
  }
  
  const validation = Joi.validate(req, schema);

  if (validation.error) {
    return res.status(400).send(validation.error.details[0].message);
  }
*/
  authenticatesUser(req.body, (error, id) => { // (error, id) função cd
    let token;

    if (error) {
      return res.status(error.code).send(error.message); // caso ocorra algum erro
    }

    token = jwt.sign({ id }, process.env.SECRET, {  // metodo que recebe o id (via objeto, do usuário que está autenticado) e a chave de criptografia
      expiresIn: 300 // quanto tempo quer que o token dure 300 segundos
    }); // retorna um token que o backend irá interpretar
    
    
    res.send({ auth: true, token }); //envia o token de volta para o frontend
  

  });
});

function validatesRequest(params) {

}

function authenticatesUser(authUser, cb) { //recebe o usuário que quer autenticar e o callback
  const user = users.find(user => user.email === authUser.email); // procura o usupario a partir do email

  if (!user) {  //se não achar nenhum usuário         
    return cb({ code: 500, message: 'Usuário não existe.' }); // retorna um objeto de erro 
  } else if (user.password !== authUser.password) { // verifica se a senha é a mesma que está recebendo do body, se forem diferentes chama o callback
    return cb({ code: 500, message: 'Senha incorreta.' });
  }

  return cb(null, user.id); // se for tudo certo retorna o usuário
};


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}...`));
