# 🎮 Jogo da Forca

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Uma releitura moderna, interativa e responsiva do clássico "Jogo da Forca", desenvolvida com **React**, **Vite** e **TailwindCSS**. Este projeto foca em uma excelente experiência do usuário (UX), código limpo e feedback dinâmico.

---

## ✨ Características e Funcionalidades

- **Design Responsivo e Touch-Friendly:** Interface fluida e amigável para qualquer dispositivo. Os botões e campos possuem áreas de toque otimizadas para uso multiplataforma (mobile e desktop).
- **Feedback Sensorial:** Validações em tempo real com alertas visuais e sonoros durante o jogo para maior imersão.
- **Gestão de Estado Segura:** A palavra secreta é inserida na tela inicial e transmitida apenas via estado do React, garantindo que ela não fique exposta durante o gameplay.
- **Arquitetura Limpa:** Forte separação de responsabilidades, dividindo a lógica de negócio dos componentes puramente visuais.
- **Mecânicas Completas:** Acompanhamento de letras já utilizadas, desenho progressivo da forca e telas dinâmicas de vitória ou derrota. O jogo reinicia de forma suave retornando à tela inicial.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** (Componentes Funcionais e Hooks: `useState`, `useEffect`)
- **TypeScript** (Tipagem estática para maior segurança e previsibilidade)
- **Vite** (Build tool super rápida e otimizada)
- **TailwindCSS** (Estilização utilitária e responsividade)

---

## 📁 Estrutura do Projeto

A arquitetura do projeto foi pensada para ser modular e escalável:

```text
src/
 ├── components/
 │    ├── StartScreen.tsx      # Tela de configuração e inserção da palavra
 │    ├── GameScreen.tsx       # Tela principal do jogo e lógica
 │    ├── HangmanDrawing.tsx   # Renderização progressiva da forca
 │    └── WordDisplay.tsx      # Exibição das letras adivinhadas/ocultas
 ├── App.tsx                   # Componente raiz e roteamento de estado
 └── main.tsx                  # Ponto de entrada da aplicação
```

---


## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente na sua máquina:

1. **Clone o repositório e acesse a pasta:**
   ```bash
   git clone https://github.com/Filipe-S-Silva/jogoDaForca
   cd jodoDaForca
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
4. **Acesse no navegador:**
   Abra `http://localhost:5173` e divirta-se!

---

## ⚙️ Comandos Úteis

Abaixo estão os scripts principais disponíveis no projeto:

* **`npm run dev`**: Inicia o servidor de desenvolvimento local com *Hot Module Replacement* (HMR).
* **`npm run build`**: Compila e otimiza o código para o diretório de distribuição (`dist`), pronto para produção.
* **`npm run preview`**: Inicia um servidor local para testar a build de produção antes do deploy.
