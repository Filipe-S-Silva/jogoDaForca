# Jogo da Forca

Este projeto é um jogo da forca implementado em React usando Vite e TailwindCSS.

## Características

- React com componentes funcionais e hooks (`useState`, `useEffect`).
- Lógica separada dos componentes visuais.
- Estilização com TailwindCSS e suporte a modo claro/escuro (auto-detecta preferência do sistema e mantém escolha no `localStorage`).
- Interface responsiva e amigável para toque — tamanho mínimo de botões e campos adequado para multplataforma.
- Acessibilidade melhorada: labels ocultos (sr-only), `aria-live`/`role` para mensagens, navegável por teclado e compatível com leitores de tela.
- Placas de início e jogo com validações e feedback visual/sonoro.
- Mostra letras usadas, desenho da forca e mensagens de vitória/derrota.

## Estrutura básica

```
src/
 ├── components/
 │     ├── StartScreen.tsx
 │     ├── GameScreen.tsx
 │     ├── HangmanDrawing.tsx
 │     └── WordDisplay.tsx
 ├── App.tsx
 └── main.tsx
```

## Primeiros passos

1. Instalar dependências:
   ```bash
   npm install
   ```
2. Iniciar ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra `http://localhost:5173` no navegador.

## Disponível outros comandos

- `npm run build` - cria build de produção
- `npm run preview` - pré-visualiza a build de produção

## Observações

A palavra secreta digitada na tela inicial não é exibida no jogo e é transmitida apenas via estado do React. O jogo reinicia voltando à tela inicial.

Sinta-se à vontade para ajustar ou melhorar a interface e lógica.