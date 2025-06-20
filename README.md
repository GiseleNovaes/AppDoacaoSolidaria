# App de Doação Solidária – Projeto Acadêmico

Este é um projeto acadêmico desenvolvido para a disciplina de **Programação para Dispositivos Móveis em Android**, com foco na criação de um aplicativo para auxiliar Organizações Não Governamentais (ONGs) no registro e gestão de doações.

O objetivo principal deste MVP (Produto Mínimo Viável) é demonstrar a capacidade de:
* Gerenciar o fluxo de doadores.
* Persistir dados em nuvem utilizando o Firebase.

---

## 🚀 Tecnologias Utilizadas

* **React Native:** Framework para construção da interface de usuário mobile e web.
* **Expo:** Conjunto de ferramentas que simplifica o desenvolvimento em React Native.
* **Firebase (Google Firestore):** Banco de dados NoSQL em nuvem para persistência e gestão de dados.
* **React Navigation:** Biblioteca para navegação entre as telas do aplicativo.
* **JavaScript:** Linguagem de programação principal.
* **Git e GitHub:** Para controle de versão e hospedagem do código-fonte.

---

## ✨ Funcionalidades Principais (MVP)

* **Interface de Usuário:** Telas de navegação (Home, Cadastro, Listagens).
* **Cadastro de Doador:** Formulário para registrar o nome, telefone e e-mail dos doadores.
* **Persistência de Dados:** Salvamento dos dados dos doadores diretamente no Firebase Firestore.

---

## ⚙️ Como Rodar o Projeto (Versão Web)

Este projeto é configurado para ser executado e demonstrar a persistência de dados no ambiente web (navegador) para fins de apresentação rápida do MVP.

### Pré-requisitos:

* **Node.js e npm:** [nodejs.org](https://nodejs.org/en/)
* **Expo CLI:** `npm install --global expo-cli`
* **Git:** [git-scm.com](https://git-scm.com/downloads)
* **Editor de Código:** [VS Code](https://code.visualstudio.com/download)

### Passos para Rodar:

1.  **Clone o Repositório:**
    ```bash
    git clone [LINK_DO_SEU_REPOSITORIO]
    cd AppDoacaoSolidaria
    ```
2.  **Instale as Dependências:**
    ```bash
    npm install
    ```
    *(Isso instalará todas as dependências, incluindo React Navigation e Firebase Web SDK).*
3.  **Configure o Firebase:**
    * Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
    * Registre um **aplicativo Web** (ícone `</>`) nas Configurações do Projeto.
    * Copie o objeto `const firebaseConfig = { ... };`.
    * No seu projeto, crie o arquivo `src/services/firebaseConfig.js` e cole o objeto `firebaseConfig` lá, adicionando `export default firebaseConfig;` no final.
    * No `App.js`, certifique-se de que o Firebase está inicializado com suas credenciais:
        ```javascript
        import { initializeApp } from 'firebase/app';
        import firebaseConfig from './src/services/firebaseConfig';
        // ... (resto do código)
        if (!firebase.apps.length) { // Use firebase.apps para verificar, ou apenas initializeApp(firebaseConfig);
            initializeApp(firebaseConfig);
        }
        ```
4.  **Inicie o Aplicativo no Navegador:**
    ```bash
    npm start
    ```
    No terminal, pressione a tecla `w` para abrir o app no navegador.

---

## 👩‍💻 Desenvolvedora

* **Gisele Novaes Pereira dos Santos**
* Disciplina: Programação para Dispositivos Móveis em Android 

**Contato:**
* gisellemnovaes@hotmail.com *
---