const { spec } = require ('pactum');
const { generateRandomName } = require ('../Extras/random.js');
const { generateRandomNameWithCedilla } = require ('../Extras/random2.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

it('Teste 1 - POST (Nome de categoria correta com autenticação)', async () => {
  let categoryName = generateRandomName()
  let { responseTime, statusCode } = await spec()
    .post('https://localhost:7296/Categoria')
    .withBody({
      "nome": categoryName
    })
    .expectResponseTime(1000)
    .expectStatus(201)

  console.log('Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});


it('Teste 2 - POST (Categoria já cadastrada)', async () => {
  let {responseTime, statusCode } = await spec()
    .post('https://localhost:7296/Categoria')
    .withBody({
      "nome": "Teste"
    })
    .expectResponseTime(1000)
    .expectStatus(400)
    .expectBodyContains("O nome 'Teste' já existe.");

  console.log('Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});


it('Teste 3 - POST (Categoria com mais de 128 caracteres)', async () => {
  let { responseTime, statusCode } = await spec()
    .post('https://localhost:7296/Categoria')
    .withBody({
      "nome": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    })
    .expectResponseTime(1000)
    .expectStatus(400)
    .expectBodyContains("O nome não pode conter mais de 128 caracteres.");

  console.log('Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});

it('Teste 4 - POST (Categoria com caracteres especiais)', async () => {
  let { responseTime, statusCode } = await spec()
    .post('https://localhost:7296/Categoria')
    .withBody({
      "nome": "L3ite"
    })
    .expectResponseTime(1000)
    .expectStatus(400)
    .expectBodyContains("O nome não aceita caracteres especiais.");

  console.log('Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});

it('Teste 5 - POST (Cadastro da categoria com palavras usando acentos ou “ç”.)', async () => {
  let categoryNameCedilla = generateRandomNameWithCedilla()
  let { responseTime, statusCode } = await spec()
    .post('https://localhost:7296/Categoria')
    .withBody({
      "nome": categoryNameCedilla
    })
    .expectResponseTime(1000)
    .expectStatus(201)

  console.log('Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});

it('Teste 6 - POST (Categoria em branco)', async () => {
  let { responseTime, statusCode } = await spec()
    .post('https://localhost:7296/Categoria')
    .withBody({
      "nome": " "
    })
    .expectResponseTime(1000)
    .expectStatus(400)
    .expectBodyContains("O campo Nome é obrigatório.");

  console.log('Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});
