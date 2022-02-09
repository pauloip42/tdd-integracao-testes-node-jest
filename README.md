Criar situações onde o código quebraria
Construir testes para essas situações
Escrever as funções para tratar as situações de forma adequada

# tdd-integracao-testes-node-jest

https://www.luiztools.com.br/post/tdd-como-criar-integration-tests-em-node-js-com-jest/

https://www.luiztools.com.br/post/tdd-como-criar-unit-tests-em-node-js-com-jest/#3

Testes de integração são mais amplos
Um teste acaba testando internamente diversas funções e (muitas vezes) depende de recursos externos

Geralmente são mais complicados de automatizar

Pesquisar: Mocking

### Instalação e configuração do Jest

Abra o terminal e vá até a pasta do projeto. Execute o comando: ``` npm init ```
A configuração do package.json será iniciada
Digite o comando "jest" para a opção 'test command'

Para instalar a dependência do Jest, digite o seguinte comando:
``` npm install --save-dev jest ```

O Jest está instalado localmente, por isso devemos usar o comando ``` npx jest --init ``` para inicializar as configurações do Jest.

Algumas perguntas irão aparecer no terminal, escolha as seguintes opções:Isso organiza melhor na hora de exibir o relatório dos testes e também permite que você crie beforeAll/beforeEach/afterAll/afterEach dentro do callback do describe, o que organiza melhor as configurações prévias e pós os testes.

Dica 6: alguns testes são bem chatos de fazer por serem complexos ou mesmo lentos. Para estes casos, a técnica de mocking pode ajudar b
- TypeScript: não
- Ambiente de teste: node
- Coverage reports: yes
- Provider de instrument code: v8
- Limpeza automática de mock: yes


### Testando requisições com Supertest

Supertest é um módulo que forja requisições visando testar webservers em Node.js e verifica o retorno das mesmas para automatizar testes deste tipo de infraestrutura.

#### Instalando dependência de desenvolvimento do Supertest

``` npm i -D supertest ```

#### Executando teste
``` npm test ```

# JEST
https://jestjs.io/pt-BR/docs/getting-started

## Instalação:

Instalação usando yarn:
``` yarn add --dev jest ```

Instalação usando npm:

``` npm install --save-dev jest ```

## Criando e executando o teste

Crie um arquivo "arquivo.js" (como o "app.js" nesse exemplo) e coloque suas funções ou requisições.

Após isso, crie um arquivo "arquivo.test.js", esse será o arquivo de testes

Adicione um script "test" com o valor "jest" em seu package.json

Para executar o teste, execute o comando ``` yarn test ``` ou ``` npm run test ``` e o Jest irá imprimir uma mensagem

## Configuração

### Gerando um arquivo de configuração básico:

Execute o comando ``` jest --init ``` e responda algumas perguntas.
O Jest irá criar um arquivo básico de configuração.

## MATCHERS

Permite testar valores de maneiras diferentes

``` expect(expressão).toBe(valor); ``` toBe: testa a igualdade exata

``` expect(dados).toEqual(valores) ``` toEqual: checa o valor de um objeto

Também podemos testar o oposto de "matchers":

``` expect(a + b).not.toBe(0); ```

### Verdade

https://jestjs.io/pt-BR/docs/using-matchers#verdade

Pode ser necessário (ou não) distinguir entre ``` undefined ```, ``` null ``` e ``` false ```. Jest contém auxiliares que permitem você ser explícito sobre o que quer.

``` toBeNull ```
``` toBeUndefined ```
``` toBeDefined ```
``` toBeTruthy ```
``` toBeFalsy ```

### Números

https://jestjs.io/pt-BR/docs/using-matchers#n%C3%BAmeros

### Strings

https://jestjs.io/pt-BR/docs/using-matchers#strings

### Exceções

https://jestjs.io/pt-BR/docs/using-matchers#exce%C3%A7%C3%B5es

### Testando código assíncrono

https://jestjs.io/pt-BR/docs/asynchronous

