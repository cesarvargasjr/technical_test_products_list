## Teste técnico: Listagem de produtos

### Requisitos para o desenvolvimento:

- Criar um componente de listagem de produtos em que seja possível procurar pelo nome e filtrar pela categoria; 
- Utilizar React;
- Utilizar o arquivo productsCategory.json como fonte de dados para os produtos;
- O componente deve ser responsivo;

##

### Desenvolvimento do projeto:

Para consumo dos dados do json fornecido, apliquei o formato de como se tivesse de fato consumindo uma API. Coloquei o arquivo json na pasta public, neste caso o arquivo não tem restrição de dados então não tem problema em deixá-lo público, após criei uma pasta "services" juntamente de dois arquivos. Um com a configuraçao do axios e o outro arquivo nomeado "products" com o endereço de acesso ao arquivo json de forma local. Dessa forma o consumo dos dados simulam o consumo de uma API privada por exemplo.

No desenvolvimento apliquei uma arquiterura organizada separando os componentes Header, Card e Input recebendo props e da mesma forma na implementação de código, desenvolvi aplicando conceitos para um código organizado e claro. 

A listagem dos produtos é realizada no arquivo "page", onde se encontra o arquivo "Home", a única e principal página do projeto, onde se encontram todas funcionadalides e informações.

##

### Tecnologias utilizadas no desenvolvimento:

- ReactJS
- Typescript
- JavaScript
- HTML
- CSS (Styled Components)

##

### Para executar o projeto:

Após o clone do repositório, executar os seguintes comandos:

### `npm i`
Para instalar as dependências.

### `npm start`
Para executar o projeto.

Executados os comandos abra [http://localhost:3000](http://localhost:3000) para visualizar em seu navegador o projeto.

##

### Printscreen da página "Home" do projeto:

### Versão Desktop:

<img width="1423" alt="image" src="https://user-images.githubusercontent.com/72532360/219510333-0e3d8ea8-bfa8-4615-844c-d4f82e9b0ed8.png">

### Versão Mobile:

<img width="321" alt="image" src="https://user-images.githubusercontent.com/72532360/219510586-d8eaa0ef-251b-4e7c-a18f-cbcfb69993b8.png">

