TESTES API’s PACTUMJs

Testes automatizados para APIs usando a biblioteca `pactum`. 

Os testes foram realizados utilizando o Visual Studio Code.
Pactum docs:
PactumJS

Prerequisites:
NodeJS v12.22.1
Mochawesome v7.1.3

How to run?
Dentro da pasta do projeto, abra o terminal e execute:
npm install
npm test -- --reporter mochawesome

Será criado uma nova pasta no repositório com o nome ./mochawesome-report onde será armazenado um HTML com o report dos testes.

API’s utilizadas nos testes: 
https://api.dicebear.com/6.x/pixel-art/svg?seed=Elves
http://numbersapi.com/1993/year
http://api.open-notify.org/iss-now.json
https://swapi.dev/api/people/150
http://localhost:8080/cliente
https://jsonplaceholder.typicode.com/posts/1
Cada teste usa o padrão do `pactum`, onde uma solicitação HTTP é feita usando o método apropriado (GET, POST, PUT, DELETE), seguida por várias verificações usando os métodos como `expectResponseTime` (Verifica o tempo de resposta), `expectStatus` (Verifica o status da requisição) e `expectBodyContains` (Verifica o corpo da requisição) para validar as respostas esperadas. 
Para requisições que tenham credenciais, foi utilizado o `withAuth` (Onde foi informado o login e senha de acesso).

Os resultados são então impressos no console.

Elves Sampaio Moura
Cleartech - Sprint 12