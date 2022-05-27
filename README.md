<h3>HANDS ON WEEK 3</h3>
<p> Um grupo de psicólogos se juntaram e criaram a clínica La Vie - Saúde Mental e oferecem diversos tipos de terapia. Para ajudar nos atendimentos, eles precisam de uma API que permita criar registros de
psicólogos, pacientes e prontuários. Em uma conversa com os Front-end e os PO foram decididos alguns grupos de endpoints que devem ser criados. </p>

<h3>BANCO DE DADOS</h3>
<p> Nossa equipe também ficará responsável por criar o banco de dados que inclui: Criação do DER e do script SQL que gera o banco. Deve ser analisado os endpoints para seja montado de acordo com a necessidade,
observando os dados que constituem a 3 entidades do sistema:
<p>- Pacientes</p>
<p>- Psicólogos</p>
<p>- Atendimentos</p>
<p>Se atentar corretamente a criação das relações das entidades</p>

<h3>FUNCIONALIDADES OBRIGATÓRIAS</h3>
<h4>1. Login</h4>
<p>O sistema deve permitir autenticação dos psicólogos para acessar a plataforma. Os dados de autenticação devem ser um e-mail válido e uma senha(mínimo 6
caracteres). As informações de autenticação devem ser criadas no mesmo momento que é feito o cadastro do psicólogo. E para formar esse sistema deve existir os seguintes endpoints:

<p>POST /login</p>
<p>Esse endpoint irá receber no body dois parâmetros que devem ser obrigatórios: email e senha. E devem ser validados de acordo com as informações do banco de dados.
Caso o email não exista, ou a senha não esteja correta para esse e-mail deverá ser exibida como resposta a seguinte mensagem com o status 401: “E-mail ou senha inválido, verifique e tente novamente”
Caso as informações estejam corretas, deve ser gerado um token JWT que contenha o id, email e nome do psicólogo que fez o login dentro do seu conteúdo. Esse token deve ser enviado como resposta com o status 200.</p>

<h4>2. Psicólogos</h4>
<p>GET /psicologos</p>
<p>Deve ser listado todos os psicólogos cadastrados no banco de dados, exibindo todos os atributos da entidade. Caso não exista nenhum psicólogo, basta enviar um array vazio como resposta.
Em todos os casos deve ser retornado o status 200.</p>

<p>GET /psicologos/:id</p>
<p>Deve devolver um objeto com todas as informações do psicólogo do id informado na url, com exceção da senha. O status deve ser 200 para resposta. Caso não exista um psicólogo com o id informado deve retornar a seguinte
menssagem de erro acompanhada do status 404: “Id não encontrado” </p>

<p>POST /psicologos </p>
<p>Deve receber no body da requisição um objeto com as seguintes propriedades:</p>
<p>- nome ( Campo string ) Ex: Fabricio Oliveira</p>
<p>- email (Campo string) Ex: fabricio.psicologo@email.com</p>
<p>- senha (Campo string) Ex: 123456</p>
<p>- apresentacao (Campo String) Ex: Sou um psicólogo incrível e muito bom!</p>
<p>Todas essas informações são obrigatórias e caso não sejam enviadas devem exibir um status 400 indicando que há um erro na requisição. Se o cadastro ocorrer corretamente deve devolver a resposta com o status 201 e
com as informações que foram criadas no banco.</p>

<p>PUT /psicologos/:id</p>
<p>Você irá receber pelo params, o id do psicólogo que será atualizado. Deve receber no body da requisição um objeto com as seguintes propriedades:</p>
<p>- nome ( Campo String ) Ex: Fabricio Oliveira</p>
<p>- email (Campo String) Ex: fabricio.psicologo@email.com</p>
<p>- senha (Campo String) Ex: 123456</p>
<p>- apresentacao (Campo String) Ex: Sou um psicólogo incrível e muito bom!</p>
<p>Todas essas informações são obrigatórias e caso não sejam enviadas devem exibir um status 400 indicando que há um erro na requisição. Se a atualização ocorrer corretamente deve devolver a resposta com o status 200
e com as informações que foram atualizadas no banco.</p>

<p>DELETE /psicologos/:id</p>
<p>Você irá receber pelo params, o id do psicólogo que será deletado. Se o id existir deve ser deletado do banco de dados o psicólogo informado e devolve como resposta o status 204
Caso não exista um psicólogo com o id informado deve retornar a seguinte menssagem de erro acompanhada do status 404: “Id não encontrado”</p>

<h4>3. CRUD Pacientes</h4>
<p>GET /pacientes</p>
<p>Deve ser listado todos os pacientes cadastrados no banco de dados, exibindo todos os atributos da entidade. Caso não exista nenhum psicólogo, basta enviar um array vazio como resposta. Em todos os casos deve ser retornado o status 200 </p>
<p>GET /pacientes/:id
<p>Deve devolver um objeto com todas as informações do paciente do id informado na url. O status deve ser 200 para resposta. Caso não exista um psicólogo com o id informado deve retornar a seguinte
menssagem de erro acompanhada do status 404: “Id não encontrado” <p>
  
<p>POST /pacientes</p>
<p>Deve receber no body da requisição um objeto com as seguintes propriedades:</p>
<p>- nome (Campo string) Ex: Fabricio Oliveira</p>
<p>- email (Campo string) Ex: fabricio.psicologo@email.com</p>
<p>- idade (Campo Date) Ex: 06/12/1997</p>
<p> Todas essas informações são obrigatórias e caso não sejam enviadas devem exibir um status 400 indicando que há um erro na requisição. Se o cadastro ocorrer corretamente deve devolver a resposta com o status 201 e
com as informações que foram criadas no banco.</p>

<p>PUT /pacientes/:id</p>
<p>Você irá receber pelo params, o id do paciente que será atualizado. Deve receber no body da requisição um objeto com as seguintes propriedades:</p>
<p>- nome ( Campo string ) Ex: Fabricio Oliveira</p>
<p>- email (Campo string) Ex: fabricio.psicologo@email.com</p>
<p>- idade (Campo Date) Ex: 06/12/1997</p>
<p>Todas essas informações são obrigatórias e caso não sejam enviadas devem exibir um status 400 indicando que há um erro na requisição. Se a atualização ocorrer corretamente deve devolver a resposta com o status 200
e com as informações que foram atualizadas no banco.</p>
  
<p>DELETE /pacientes/:id</p>
<p>Você irá receber pelo params, o id do paciente que será deletado. Se o id existir deve ser deletado do banco de dados o paciente informado e devolve como resposta o status 204
Caso não exista um paciente com o id informado deve retornar a seguinte menssagem de erro acompanhada do status 404: “Id não encontrado”</p>

<h4>4. CRUD Atendimentos</h4>
<p>GET /atendimentos</p>
<p>Deve ser listado todos os atendimentos realizados por todos os psicólogos cadastrados no banco de dados, exibindo todos os atributos da entidade. Caso não exista nenhum atendimento, basta enviar um array vazio como resposta.
Em todos os casos deve ser retornado o status 200</p>

<p> GET /atendimentos/:id</p>
<p>Deve devolver um objeto com todas as informações do atendimento do id informado na url. O status deve ser 200 para resposta. Caso não exista o atendimento com o id informado deve retornar a seguinte
menssagem de erro acompanhada do status 404: “Id não encontrado”</p>

<p>POST /atendimentos</p>
<p>Deve receber no body da requisição um objeto com as seguintes propriedades:</p>
<p>- paciente_id (Campo inteiro) Ex:: 1</p>
<p>- data_atendimento (Campo Data) Ex: 2020-01-01T10:10:00z</p>
<p>- observação (Campo String) - Ex: Descrição do atendimento, pode ser um campo longo.</p>
 
<p>Além das informações recebidas no body, é preciso pegar o id do psicólogo que está logado para associá-lo a esse atendimento. Lembre-se que essas informações ficam presentes dentro do Token JWT.
Todas essas informações são obrigatórias e caso não sejam enviadas devem exibir um status 400 indicando que há um erro na requisição. Se o cadastro ocorrer corretamente deve devolver a resposta com o status 201 e
com as informações que foram criadas no banco.</p>
  
<h3> 5. Documentação da API</h3>
<p>Deve ser gerado uma documentação da api, colocando os endpoints existentes assim como os dados que devem ser passados na requisição e o que será
devolvido pelo servidor como resposta. Para isso pode ser usado o Insomnia junto com o plugin Export HTML Documentation (Ensinado do material assíncrono), ou o postman.</p>
