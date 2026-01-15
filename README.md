# 🎬 CineManager - Sistema de Gestão de Cinema

![React Version](https://img.shields.io/badge/react-19.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-7.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

> **Solução completa para administração de complexos de cinema.** Gerenciamento de filmes, sessões, salas e bombonière com interface ágil e tipagem estática robusta.

---

## 🚀 Sobre o Projeto

O **CineManager** é uma aplicação Single Page Application (SPA) desenvolvida para modernizar o fluxo operacional de cinemas. O projeto foca na integridade dos dados e na experiência do usuário administrativo, permitindo o cadastro rápido de recursos e a realização de vendas de ingressos em tempo real.

O diferencial deste projeto reside na sua arquitetura moderna utilizando **React 19** e **TypeScript**, garantindo um código escalável, seguro e de fácil manutenção.

---

## 🛠️ Stack Tecnológico & Arquitetura

Este projeto demonstra domínio sobre o ecossistema moderno de desenvolvimento web:

* **Core:**
    * **React 19:** Utilização das últimas features da biblioteca para interfaces reativas.
    * **TypeScript:** Tipagem estática rigorosa para prevenir erros em tempo de desenvolvimento e melhorar o intellisense.
    * **Vite:** Build tool de próxima geração para desenvolvimento ultra-rápido e Hot Module Replacement (HMR).

* **Roteamento & Navegação:**
    * **React Router DOM v7:** Gerenciamento complexo de rotas para navegação fluida entre módulos (Filmes, Salas, Vendas).

* **Comunicação & Dados:**
    * **Service Pattern:** Camada de serviço abstrata (`APIService`) encapsulando o **Axios**. Isso centraliza as requisições HTTP (GET, POST, PUT, DELETE) e desacopla a lógica de UI da lógica de dados.
    * **JSON Server:** Simulação completa de uma API RESTful para prototipagem rápida e desenvolvimento do frontend independente do backend.

* **Interface (UI):**
    * **Bootstrap 5:** Design responsivo e componentes consistentes para painéis administrativos.
    * **Bootstrap Icons:** Iconografia visual para ações de CRUD.

---

## ✨ Funcionalidades

O sistema é dividido em módulos operacionais claros:

1.  **Gestão de Filmes:** Cadastro completo com metadados dos filmes em cartaz.
2.  **Controle de Salas:** Administração das salas de exibição disponíveis.
3.  **Sessões:** Agendamento de filmes em salas específicas, criando a grade horária.
4.  **Bombonière (Lanches):** Catálogo de produtos e lanches disponíveis para venda.
5.  **Ponto de Venda (POS):** Interface dedicada para venda de ingressos associada a uma sessão específica (`/venda/:sessaoId`).

---

## 🔧 Como Executar Localmente

Siga os passos abaixo para levantar o ambiente de desenvolvimento:

### Pré-requisitos
* Node.js (versão 18 ou superior)
* npm ou yarn

### Instalação

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/seu-usuario/cinema.git](https://github.com/seu-usuario/cinema.git)
    cd cinema
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    ```

3.  **Inicie o Servidor Mock (Backend)**
    O projeto utiliza o `json-server` para simular o banco de dados. Mantenha este terminal aberto.
    ```bash
    npm run json-server
    ```
    *A API estará rodando em `http://localhost:3000`*

4.  **Inicie a Aplicação (Frontend)**
    Em um novo terminal, execute:
    ```bash
    npm run dev
    ```
    *O app estará acessível em `http://localhost:5173`*

---

## 👨‍💻 Autor

Desenvolvido por **Denilson Oliveira da Silva**
