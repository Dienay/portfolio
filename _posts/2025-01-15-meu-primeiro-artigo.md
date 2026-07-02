---
layout: post
title: "Como testar uma API Node.js com Jest e Supertest (guia prático)"
date: 2026-05-06
category: QA
tags: [QA, Testes, Node.js, API]
description: "Como implementei testes de integração para autenticação (login/signup) garantindo qualidade e confiabilidade."
---

## Introdução

Testar fluxos de autenticação é essencial para garantir a confiabilidade de qualquer aplicação.

Neste artigo, mostro como implementei testes de integração para uma API Node.js, cobrindo cenários críticos como criação de usuário, login, validação de dados e tratamento de erros.

Os exemplos são baseados em um projeto real (Rangos), com foco em qualidade, validação de fluxos e prevenção de falhas em produção.

---

## Objetivo

- Validar o fluxo de autenticação (signup/login)
- Garantir respostas HTTP corretas
- Cobrir cenários de erro
- Demonstrar uma abordagem prática de testes de API

---

## Estrutura da API

A API possui dois endpoints principais:

- POST /signup → criação de usuário
- POST /login → autenticação de usuário

---

## Testes de integração

Os testes foram implementados utilizando Jest e Supertest, simulando requisições HTTP reais contra a aplicação.

A ideia é validar não apenas o funcionamento esperado, mas também como a API se comporta em cenários de erro.

---

### ✔ Signup com sucesso

```javascript
const response = await request(app).post("/signup").send({
  email: "test@test.com",
  password: "123456",
});

expect(response.status).toBe(201);
```

---

### ❌ Signup inválido

```javascript
const response = await request(app).post("/signup").send({
  email: "",
});

expect(response.status).toBe(422);
```

---

### ✔ Login com sucesso

```javascript
const response = await request(app).post("/login").send({
  email: "test@test.com",
  password: "123456",
});

expect(response.status).toBe(200);
```

---

### ❌ Senha incorreta

```javascript
expect(response.status).toBe(422);
expect(response.body.message).toBe("Incorrect password");
```

---

### ❌ Usuário inexistente

```javascript
expect(response.status).toBe(404);
```

---

## Abordagem de qualidade

Os testes não focam apenas em cenários de sucesso, mas principalmente em falhas e comportamentos inesperados.

Essa abordagem permite identificar problemas antes que cheguem à produção e aumenta a confiabilidade da aplicação.

Pensar nesses cenários é essencial para garantir que a API responda corretamente mesmo quando algo dá errado.

## Possíveis melhorias

- Implementar autenticação com JWT
- Adicionar testes para tokens inválidos ou expirados
- Incluir testes de segurança (ex: rate limiting)
- Integrar com banco de dados real

## Conclusão

Testar APIs vai além de verificar se tudo funciona — é garantir que falhas sejam tratadas corretamente.

Ao validar fluxos críticos como autenticação, é possível reduzir bugs em produção e construir aplicações mais robustas e confiáveis.

## Relacionado

👉 Este exemplo foi baseado em um projeto real do meu portfólio

👉 Veja o projeto completo: [rangos-api](https://github.com/Dienay/rangos-api)
