
# Shoes Ignite 🚀

Este repositório faz parte do Nível 4 do módulo de **React Native**, onde foram abordados conceitos avançados de manipulação de notificações e desenvolvimento de interfaces para aplicações móveis.

## Objetivos do Projeto 🎯

Neste projeto , é possível :

-   **Enviar Dados em Notificações**: Como incluir informações adicionais em notificações push, permitindo redirecionar o usuário para partes específicas do aplicativo.
-   **Redirecionamento de Usuário**: Configurar ações que levam o usuário para telas específicas ao interagir com a notificação.
-   **Simulação de Lançamento de Produto**: Implementar a lógica para notificar os usuários sobre o lançamento de novos produtos.
-   **Dados Adicionais Baseados em Chave-Valor**: Adicionar informações customizadas nas notificações, utilizando pares chave-valor.
-   **Ajustes de Código para Notificações**: Modificar o código da aplicação para receber e manipular notificações de forma eficiente.

## Tecnologias Utilizadas 🛠

-   **Firebase Cloud Messaging (FCM)**: Serviço utilizado para enviar notificações push aos dispositivos, permitindo uma comunicação direta e eficiente com os usuários.
-   **OneSignal**: Plataforma utilizada para gerenciar e enviar notificações push, facilitando a segmentação e personalização das mensagens.
-   **React Native**: Framework para desenvolvimento de aplicativos móveis nativos usando JavaScript e React.
-   **Native Base**: Biblioteca de componentes UI, utilizada para desenvolver interfaces de usuário elegantes e responsivas.

## Funcionalidades da Aplicação ⚙

O projeto base inclui as seguintes funcionalidades:

-   **Interface Home**: Lista de produtos, com opções para filtrar por marca.
-   **Interface Cart**: Adicionar produtos ao carrinho, selecionar tamanhos e quantidades, e remover itens.
-   **Interface Details**: Exibe detalhes dos produtos selecionados.
-   **Cart Context**: Implementação de um contexto para compartilhar o estado do carrinho entre diferentes componentes.

## Como Rodar o Projeto ✅

1.  **Clone o repositório:**
    
    bash
    
    Copiar código
    
    `git clone https://github.com/RafaelFigueiredo2203/shoesIgnite.git` 
    
2.  **Instale as dependências:**
    
    bash
    
    Copiar código
    
    `npm install` 
    
3.  **Configure o Firebase e OneSignal:**
    
    -   Configure o Firebase Cloud Messaging (FCM) e integre-o com o projeto.
    -   Configure o OneSignal e conecte-o ao FCM para gerenciar e enviar notificações push.
4.  **Execute a aplicação:**
    
    bash
    
    Copiar código
    
    `npx react-native run-android # Para Android
    npx react-native run-ios     # Para iOS` 
    
5.  **Ajustes para Notificações:**
    
    Certifique-se de que as permissões necessárias para notificações estão configuradas no seu dispositivo e que a integração com o Firebase e OneSignal está corretamente configurada.
