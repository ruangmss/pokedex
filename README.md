# 📖 Pokédex

Uma aplicação web desenvolvida em **React** que funciona como um catálogo completo de Pokémon, permitindo pesquisar por nome ou número, filtrar por tipo e visualizar informações detalhadas de cada criatura através da **PokéAPI**.

> **Nota:** Este projeto foi desenvolvido com o objetivo de aprofundar conhecimentos em **React**, consumo de APIs REST, componentização, gerenciamento de estado e roteamento. Não possui vínculo oficial com a franquia Pokémon.

---

# 🚀 Funcionalidades

- 🔎 Busca de Pokémon por nome ou número.
- 🏷️ Filtro por tipo.
- 📄 Página individual com informações detalhadas.
- 📊 Exibição das estatísticas base.
- ✨ Alternância entre sprite normal e _Shiny_.
- 🌱 Navegação pela cadeia evolutiva.
- 📍 Paginação sincronizada com a URL.
- 🔗 Compartilhamento da página atual preservando paginação e filtros.
- ↩️ Retorno inteligente à Pokédex mantendo o contexto da navegação.
- 🖼️ Skeleton Loading durante o carregamento dos dados.
- ⚠️ Tratamento de erros e páginas não encontradas.
- 📱 Interface responsiva.

---

# 🛠️ Tecnologias Utilizadas

- React
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- PokéAPI

---

# 🌐 API Utilizada

Todos os dados apresentados na aplicação são obtidos através da **PokéAPI**.

https://pokeapi.co/

Entre as informações consumidas estão:

- Pokémon
- Tipos
- Espécies
- Cadeias evolutivas
- Estatísticas
- Habilidades
- Geração do Pokémon

---

# 📚 Conceitos Aplicados

Durante o desenvolvimento foram utilizados diversos conceitos importantes do ecossistema React, entre eles:

- Componentização
- Hooks (`useState`, `useEffect`, `useCallback` e `useRef`)
- Hooks personalizados
- React Router
- Navegação entre páginas
- Manipulação de parâmetros da URL (`useSearchParams`)
- Navegação programática (`useNavigate`)
- Consumo de APIs REST
- Renderização condicional
- Debounce em pesquisas
- Skeleton Loading
- Paginação
- Compartilhamento de estado através da URL
- Tratamento de erros
- Organização e reutilização de componentes

---

# 🎨 Design

A interface foi desenvolvida buscando proporcionar uma experiência limpa, moderna e intuitiva.

O projeto utiliza:

- Sistema de cores baseado nos tipos dos Pokémon;
- Componentes reutilizáveis;
- Layout responsivo;
- Transições suaves;
- Feedback visual durante carregamentos;
- Navegação fluida entre páginas.

---

# 👤 Desenvolvedor

Projeto desenvolvido por **Ruan Gomes** como parte da evolução prática nos estudos de React.

> _"Cada projeto representa um novo passo na construção de aplicações mais organizadas, performáticas e intuitivas."_
