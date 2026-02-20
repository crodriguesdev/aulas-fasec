---
name: Aula 2 - Paradigmas de Sistemas Distribuídos
date: 2026-02-20
---

Em um sistema distribuído, os processos possuem responsabilidades bem definidas e interagem para realizar uma atividade
útil. Existem dois principais modelos de arquitetura de sistemas distribuídos: cliente-servidor e peer-to-peer.

## Cliente-servidor

É a arquitetura mais citada quando se trata de sistemas distribuídos. Esta arquitetura é a espinha dorsal da internet e
da maioria dos sistemas modernos. É um modelo que divide seus participantes entre dois tipos: quem utiliza um
determinado serviço e quem o fornece.

* cliente: é a aplicação que inicia o contato. Pode ser o navegador de um computador, app de banco, etc.
* servidor: é uma máquina que fica aguardando a conexão de clientes. Ela processa informações enviadas e retorna aos
  clientes
* rede: o meio pelo qual as mensagens são trocadas

<img src="/_static/img/2026-02-sistemas-distribuidos/aula-02-cliente-servidor.png" loading="lazy" alt="Arquitetura cliente servidor">

## Peer-to-peer

Nesta arquitetura, todos os processos envolvidos em uma atividade possuem funções semelhantes, interagindo
cooperativamente como pares (*peers*), sem uma distinção entre clientes e servidores. Esse é um modelo mais flexível
para escalabilidade de compartilhamento de dados e outros recursos.

<img src="/_static/img/2026-02-sistemas-distribuidos/aula-02-peer-to-peer.png" loading="lazy" alt="Arquitetura peer to peer">

## Variações

O modelo cliente-servidor possui algumas variações que são relevantes, entre elas:

### Servidor proxy

Um servidor proxy é um "intermediário" entre um cliente e um servidor. É uma espécie de "porteiro digital" que pode
rotear uma mensagem de acordo com uma necessidade.

Algumas possíveis funções de um servidor proxy:
* aumentar disponibilidade
* fornecer cache
* forçar políticas de segurança

<img src="/_static/img/2026-02-sistemas-distribuidos/aula-02-proxy.png" loading="lazy" alt="Proxy">

### Mensageria (publisher/subscriber - publicação/assinatura)

É um padrão assíncrono que desacopla que produz (publicadores) de consumidores (assinantes). Os publicadores enviam
mensagens a tópicos (ou filas) sem saber quem as receberá, enquanto assinantes recebem mensagens de tópicos específicos.

Exemplos: Apache Kafka, RabbitMQ, Redis, JMS, AWS SNS.

<img src="/_static/img/2026-02-sistemas-distribuidos/aula-02-pub-sub.png" loading="lazy" alt="Publisher/Subscriber">

## Exemplo de código cliente-servidor em java

```java
// Servidor.java
import java.io.*;
import java.net.*;

public class Servidor {
  public static void main(String[] args) {
    try (ServerSocket serverSocket = new ServerSocket(12345)) {
      System.out.println("Servidor aguardando conexão...");
      Socket socket = serverSocket.accept(); // Aguarda conexão
      System.out.println("Cliente conectado!");

      BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
      String mensagem = in.readLine();
      System.out.println("Mensagem recebida: " + mensagem);

      socket.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
```

```java
// Cliente.java
import java.io.*;
import java.net.*;

public class Cliente {
  public static void main(String[] args) {
    try (Socket socket = new Socket("localhost", 12345)) {
      PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
      out.println("Olá, Servidor!"); // Envia mensagem
      System.out.println("Mensagem enviada.");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
```
