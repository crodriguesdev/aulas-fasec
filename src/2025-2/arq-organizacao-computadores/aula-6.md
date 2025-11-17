---
name: Aula 6 - Suporte do sistema operacional à arquitetura
date: 2025-09-22
---

O sistema operacional (S.O.) é o software que controla a execução de programas e gerencia os recursos de hardware de um
computador. Diversas funções realizadas pelo S.O. só podem ser realizadas de forma eficiente e rápida se o hardware do
processador incluir capacidades para dar suporte ao software. Embora o foco da disciplina seja arquitetura e organização
de computadores, alguns conhecimentos de S.O. são úteis para  entender os mecanismos pelas quais a CPU controla o
sistema computacional. 

O hardware e o software utilizados para oferecer aplicações a um usuário podem ser vistos em um padrão em camadas:

* No geral, o usuário final das aplicações de um computador não se preocupa com a arquitetura deste computador, e
  normalmente vê um sistema de computação em termos de aplicações ou programas. 
* Essas aplicações são desenvolvidas por programadores de sistemas, utilizando linguagens de programação e/ou
  ferramentas e frameworks desenvolvidas para acelerar o desenvolvimento. As aplicações geralmente não acessam
  diretamente os recursos do sistema, e realizam chamadas ao sistema operacional para acessar memória, realizar
  processamento, comunicar-se via rede, etc.
* O sistema operacional é o programa mais importante de um sistema de computação. Ele esconde os detalhes do hardware
  do programador e lhe oferece uma interface conveniente para usar o sistema. Ele é um mediador, que realiza a
  comunicação necessária com as peças de hardware necessárias, independente de detalhes específicos do hardware (por
  exemplo, ao conectar um SSD padrão SATA ou M2, o sistema operacional os reconhece de forma similar, e não há
  necessidade de ajustes em programas utilitários para ler ou escrever dados de acordo com o padrão).

Em resumo, o S.O. oferece os seguintes serviços:
* Criação de programas: o S.O. oferece serviços, como IDEs e depuradores, para auxiliar o programador na criação de
  novos programas. Normalmente, esses serviços não fazem parte do S.O., mas são acessíveis por meio dele.
* Execução de programas: para executar um programa, suas instruções precisam ser carregadas na memória principal, os
  dispositivos de entrada e saída precisam ser inicializados, e todos os recursos necessários precisam ser preparados.
  O sistema operacional gerencia todas essas tarefas para o usuário.
* Acesso aos dispositivos de E/S: cada dispositivo de E/S exige seu próprio conjunto de instruções ou sinais de controle
  para sua operação. Dependendo do dispositivo, é necessário até instruções proprietárias, que podem ser acopladas ao
  S.O. através de drivers. O S.O. cuida dos detalhes de comunicação com os dispositivos, de modo que o programador pode
  pensar no uso desses dispositivos em termos de simples leituras ou escritas.
* Acesso controlado aos arquivos: No caso de arquivos, o controle do processador precisa incluir um conhecimento não só
  da natureza do dispositivo (disco, SSD, fita, CD), mas também do formato de arquivo no meio de armazenamento (FAT,
  NTFS, ext4). Novamente, o S.O. se preocupa com esses detalhes. Além disso, o S.O. também pode oferecer mecanismos de
  proteção para controlar o acesso aos arquivos
* Acesso aos sistema: essa função oferece proteção de recursos e dados de usuários não autorizados, e precisa resolver
  conflitos para disputas de recurso.
* Detecção e resposta a erros: o S.O. precisa tomar uma medida que trate os erros de hardware (erro de memória, falha em
  dispositivo, etc) ou software (tentativa de acessar um arquivo protegido, divisão por zero, etc) com o mínimo de 
  impacto sobre as aplicações em execução. A resposta pode variar desde encerrar o programa que causou o erro, até
  tentar novamente a operação, ou apenas informar o erro à aplicação.
* Contabilidade: o S.O. coleta estatísticas de uso para diversos recursos e monitora os parâmetros de desempenho, como o
  tempo de resposta. Em qualquer sistema, essa informação é útil para antecipar melhorias futuras, ou melhorar o
  desempenho geral da aplicação. Em sistemas modernos e multiusuário, essas informações também podem ser usadas para
  fins de auditoria.
