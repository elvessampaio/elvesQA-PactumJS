const { spec } = require('pactum');

it('Teste 1 - POST', async () => {
  let {body, responseTime, statusCode} = await spec()
    .post('https://jsonplaceholder.typicode.com/posts')
    .withBody({
      "nome": "Elves",
      "idade": 29, 
    })
    .expectResponseTime(1000)
    .expectStatus(201)
    .expectBodyContains("Elves", 29,);
    
    console.log(body, 'Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});

it('Teste 2 - POST (URL que aceita apenas GET)', async () => {
  let {responseTime, statusCode} = await spec()
    .post('http://numbersapi.com/1993/year')
    .withBody({
      "nome": "Elves",
      "idade": 29,
    })
    .expectResponseTime(1000)
    .expectStatus(404)
    
    console.log('Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});


it('Teste 3 - POST (Body incorreto)', async () => {
  let {responseTime, statusCode} = await spec()
    .post('http://localhost:8080/cliente')
    .withBody({
      "none": "Elves",
      "idade": 30
      })
    .expectResponseTime(1000)
    .expectStatus(400)
    .expectBodyContains("Bad Request");
    
    console.log('Tempo de requisição:', responseTime, '|', 'Status Code:', statusCode)
});
