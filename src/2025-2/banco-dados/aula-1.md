---
name: Aula 1 - Conceitos básicos de bancos de dados
date: 2025-08-12
---

* Um banco de dados é uma coleção organizada de informações (ou dados) estruturadas, normalmente armazenadas
  eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento
  de banco de dados (SGBD - ou em inglês DBMS)
* No geral, são espécies de "planilhas do Excel", mas otimizadas para conter grandes volumes de informações organizadas,
  além de controle de autenticação e autorização, para consultas com rapidez e segurança

## Bancos de dados relacionais e não relacionais
* Bancos de dados relacionais armazenam dados em tabelas com colunas e linhas. Cada coluna representa um atributo de
  dados específico, e cada linha representa um "objeto" desses dados.
* Bancos de dados não relacionais costumam armazenar dados de forma não estruturada ou semi estruturada, com os mais
  comuns armazenando dados como documentos codificados em JSON, que são flexíveis e possuem natureza hierárquica.
* Algumas diferenças:
  * Estrutura: bancos de dados relacionais possuem formato tabular (em tabelas) e seguem estruturas rígidas em relação
    ao formato dos dados e relacionamento de tabelas; bancos de dados não relacionais são mais flexíveis e úteis para
    dados com requisitos variáveis.
  * Integridade: bancos de dados relacionais costumam seguir à risca as propriedades ACID para manter a consistência dos
    dados; bancos de dados não relacionais oferecem um modelo mais flexível, costumando garantir disponibilidade, mas
    não consistência imediata
* Quando usar cada um:
  * Bancos de dados relacionais para quando os dados são previsíveis em termos de tamanho, estrutura e frequência de
    acesso, ou então quando os relacionamentos entre as entidades forem importantes
  * Modelos não relacionais funcionam melhor para armazenar dados flexíveis em forma ou tamanho, ou que possam mudar
    no futuro. Além disso, em alguns casos, as relações de dados não se encaixam bem no formato tabular das bases
    relacionais

## SQL
* O SQL é uma linguagem de programação usada por quase todos os bancos de dados relacionais para consultar, manipular e
  definir dados e fornecer controle de acesso

## Desafios do banco de dados
* Os grandes bancos de dados empresariais atuais geralmente suportam consultas muito complexas e devem fornecer
  respostas quase instantâneas a essas consultas. Como resultado, os administradores de bancos de dados frequentemente
  aplicam uma ampla variedade de métodos que ajudam a melhorar o desempenho da base. Alguns desafios são:
  * Absorver um grande volume de dados. Exemplo: dados provenientes de sensores, máquinas conectadas, horários de pico
    de acesso, entre outros
  * Garantia da segurança de dados. Utilizar os mecanismos de segurança da base de dados para proteger as informações ao
    mesmo tempo que deixam esses dados acessíveis para os usuários
  * Acompanhamento da demanda. No atual cenário de negócios, as empresas precisam de acesso em tempo real aos seus dados
    para apoiar a tomada de decisão em tempo hábil
  * Gerenciamento e manutenção do banco de dados e da infraestrutura. Os administradores de bancos de dados devem
    observar continuamente o banco em busca de problemas e executar a manutenção preventiva
  * Acompanhamento da escalabilidade. O gerenciamento de dados deve crescer com o seu volume, e é necessário escalar a
    infraestrutura da base de acordo com esta demanda.

## Carreira de administrador de bancos de dados
* Um administrador de bancos de dados (DBA) é o profissional responsável por gerenciar, proteger e operar bancos de
  dados, garantindo que estes sejam armazenados e recuperados de forma eficiente e segura. Além disso, o DBA colabora
  com os desenvolvedores para projetar e implementar novas funcionalidades, solucionando problemas relacionados ao
  banco de dados
* Algumas responsabilidades:
  * Instalação, configuração e atualização dos softwares de banco de dados
  * Manutenção e otimização do desempenho
  * Segurança dos dados
  * Backup e recuperação dos dados
  * Gerenciamento de usuários e permissões
  * Resolução de problemas
  * Colaboração com os desenvolvedores
  * Monitoramento e análise de logs
* Algumas certificações:
  * [DP-900: Microsoft Azure Data Fundamentals](https://learn.microsoft.com/en-us/certifications/exams/dp-900)
  * [DP-203: Data Engineering on Microsoft Azure](https://learn.microsoft.com/en-us/certifications/exams/dp-203)
  * [DP-300: Administering Microsoft Azure SQL Solutions](https://learn.microsoft.com/en-us/certifications/exams/dp-300)
  * [AWS Certified Data Engineer – Associate](https://aws.amazon.com/pt/certification/certified-data-engineer-associate/)
  * [Google - Professional Cloud Database Engineer](https://cloud.google.com/certification/cloud-database-engineer)
  * [Google - Professional Data Engineer](https://cloud.google.com/certification/data-engineer)
  * [Oracle Database SQL Certified Associate Certification (1Z0-071)](https://education.oracle.com/oracle-database-sql-certified-associate/trackp_457)
  * [Oracle Database PL/SQL Developer Certified Professional (1Z0-149)](https://education.oracle.com/oracle-database-pl-sql-developer-certified-professional/trackp_OCPPLSQL19C)
  * [MySQL 8.0 Database Developer Oracle Certified Professional (1Z0-909)](https://education.oracle.com/mysql-80-database-developer-oracle-certified-professional/trackp_MYSQLPRG80OCP)
  * [MariaDB Certification Exam](https://mariadb.com/wp-content/uploads/2019/02/mariadb-certification-exam_datasheet_1005.pdf)
