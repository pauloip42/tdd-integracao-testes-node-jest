# tdd-integracao-testes-node-jest

https://www.luiztools.com.br/post/tdd-como-criar-integration-tests-em-node-js-com-jest/

https://www.luiztools.com.br/post/tdd-como-criar-unit-tests-em-node-js-com-jest/#3

Testes de integração são mais amplos
Um teste acaba testando internamente diversas funções e (muitas vezes) depende de recursos externos

Geralmente são mais complicados de automatizar

Mocking

### Instalação e configuração do Jest

Abra o terminal e vá até a pasta do projeto. Execute o comando: ``` npm init ```
A configuração do package.json será iniciada
Digite o comando "jest" para a opção 'test command'

Para instalar a dependência do Jest, digite o seguinte comando:
``` npm install --save-dev jest ```

O Jest está instalado localmente, por isso devemos usar o comando ``` npx jest --init ``` para inicializar as configurações do Jest.

Algumas perguntas irão aparecer no terminal, escolha as seguintes opções:

- TypeScript: não
- Ambiente de teste: node
- Coverage reports: yes
- Provider de instrument code: v8
- Limpeza automática de mock: yes


### Testando requisições com Supertest

Supertest é um módulo que forja requisições visando testar webservers em Node.js e verifica o retorno das mesmas para automatizar testes deste tipo de infraestrutura.

#### Instalando dependência de desenvolvimento do Supertest

``` npm i -D supertest ```

