# ViaCep-React

Este projeto é uma aplicação React que utiliza a API ViaCEP para consultar informações de endereços a partir de um CEP informado pelo usuário.

## Funcionalidades
- Busca de endereço por CEP
- Exibição dos dados retornados (rua, bairro, cidade, estado, etc.)
- Interface simples e responsiva

## Tecnologias Utilizadas
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [ViaCEP API](https://viacep.com.br/)

## Estrutura do Projeto
```
eslint.config.js
index.html
package.json
README.md
vite.config.js
public/
 
src/
  App.css
  App.jsx
  index.css
  main.jsx
  assets/
    react.svg
    content/
      content.jsx
    services/
      api.jsx
```

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Sobre a API ViaCEP
A [ViaCEP](https://viacep.com.br/) é um serviço gratuito para consulta de endereços e dados de CEPs do Brasil.

## Licença
Este projeto está sob a licença MIT.
