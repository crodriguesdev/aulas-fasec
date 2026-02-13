---
name: Aula 1 - Conceitos Fundamentais de Sistemas Distribuídos
date: 2026-02-13
---

Um sistema distribuído é aquele no qual os componentes deste sistema se localizam em computadores interligados via rede.
Esses componentes se comunicam e coordenam suas ações via trocas de mensagens. Os componentes conectados podem estar
separados por qualquer distância. Eles podem estar em continentes separados, na mesma sala, ou até na mesma máquina.

Alguns exemplos de sistemas distribuídos incluem:

* a própria Internet;
* uma intranet (rede interna de uma organização);
* redes móveis de celulares;
* jogos eletrônicos multijogador;
* aplicativos de troca de mensagem, como WhatsApp.

A própria definição já traz algumas consequências para o programador, entre elas:

* concorrência: ocorre quando múltiplos componentes executam tarefas simultâneas e precisam interagir entre si para se
  sincronizarem e atingir um objetivo em comum;
* falta de relógio global: caso a coordenação dependa de uma noção do tempo que as ações aconteceram, a precisão do
  relógio de cada computador pode interferir no resultado;
* falhas independentes: cada componente do sistema pode falhar de forma independente, deixando os outros ainda em
  funcionamento.

## Desafios
O compartilhamento de recursos e tolerância a falhas são fortes motivos para a construção e adoção de um sistema
distribuído, mas os desafios desta arquitetura devem ser levados em consideração, como por exemplo a possível diferença
entre componentes (linguagens de programação, versões de aplicações ou mesmo sistemas operacionais diferentes). Além do
mais, um sistema distribuído pode ser um sistema aberto, isto é, novos componentes podem ser adicionados, removidos ou
substituídos sem a necessidade de parar completamente a aplicação, o que traz ganhos de escalabilidade (funcionar bem
mesmo quando a quantidade de usuários aumenta) e ao tratamento de falha de algum componente, mas também resulta em
necessidades maiores de tratamentos de segurança e concorrência de componentes.

### Heterogeneidade
Sistemas distribuídos permitem acessos a serviços e componentes por meio de um conjunto heterogêneo de computadores e
redes. Alguns exemplos de aspectos que podem ser diferentes são:

* redes: as diferenças entre redes são normalmente mascaradas pelo fato de que todos os dispositivos ligados a elas
  utilizam algum protocolo Internet para se comunicar.
* hardware: os dados podem ser representados de diversas maneiras em diferentes tipos de hardware, por exemplo a
  quantidade de bytes de um tipo de variável pode ser diferente entre hardwares ou sistemas diferentes. Essas diferenças
  devem ser consideradas em um sistema distribuído.
* sistemas operacionais: embora os SO incluam funcionalidades parecidas, nem todas as oferecem da mesma forma para os
  aplicativos.
* linguagens de programação: diferentes linguagens de programação usam diferentes representações para caracteres, 
  estruturas de dados, objetos, entre outros. Essas diferenças precisam ser consideradas.

Para que programas escritos por diferentes desenvolvedores para diferentes plataformas se comuniquem, alguns padrões
devem ser estabelecidos e utilizados por todas as partes.

### Sistema aberto
Um sistema computacional é aberto quando ele pode ser estendido e reimplementado de várias maneiras. Um sistema
distribuído não necessariamente é um sistema aberto, e isso é determinado principalmente pelo grau com que novos
serviços podem ser adicionados e disponibilizados para uso por uma variedade de programas clientes.

Um fator importante para um sistema aberto é que a especificação e documentação das principais interfaces de software
dos componentes devem estar disponíveis para os desenvolvedores de software. Além do mais, o sistema deve ser
desenvolvido permitindo o acoplamento de novas funcionalidades através destas interfaces.

Um grande desafio para um sistema distribuído aberto para extensões é a complexidade de sincronizar e coordenar muitos
componentes elaborados de diferentes formas por diferentes pessoas.

Um exemplo de documentação de sistemas distribuídos abertos são as [RFCs](https://www.rfc-editor.org/rfc-index.html).

### Segurança
A segurança das informações em sistemas distribuídos costumam ter um alto valor intrínseco para seus usuários. A
segurança de recursos de informação tem três componentes:

* confidencialidade (proteção contra exposição indevida para pessoas não autorizadas)
* integridade (proteção contra alteração ou dano à informação)
* disponibilidade (proteção contra interferências ao acesso aos recursos)

Em sistemas distribuídos, um dos desafios de segurança está no fato de que as informações são trocadas entre os diversos
componentes através de uma rede, e isso significa garantir a troca segura de mensagens, ocultando seu conteúdo durante o
transporte e também identificar o usuário ou componente que enviou uma requisição. Esses dois desafios costumam ser
resolvidos com o uso de técnicas de criptografia desenvolvidas para esse propósito. Entretanto, existem dois desafios
de segurança que ainda não foram totalmente resolvidos:

* negação de serviço (DoS - *Denial of Service*): um usuário interrompe um serviço por algum motivo. Pode ser alcançado
  bombardeando o serviço com um grande número de pedidos sem sentido. Existem medidas para se opor a isso, mas não
  existe uma solução geral e definitiva para o DoS
* segurança de código móvel: programas ou códigos desconhecidos podem possuir efeitos de execução imprevisíveis, podendo
  carregar malwares

### Escalabilidade
Um sistema é descrito como escalável se permanece eficiente quando há um aumento significativo no número de recursos
utilizados ou usuários conectados. Projetar um sistema distribuído escalável apresenta os seguintes desafios:

* controlar o custo dos recursos físicos: há um custo monetário para aquisição de hardware e software para ampliar o
  sistema para atender a uma nova demanda.
* controlar a perda de desempenho: incluir novos componentes ou máquinas significa manter mais coordenação, e o ganho
  de entrega de recursos de uma nova máquina deve ser maior que o custo computacional em coordená-la.
* impedir o esgotamento de recursos de software: um exemplo de falta de escalabilidade é o IPv4, que possuia 32 bits de
  tamanho, sendo incompatível com demandas mais modernas de acesso à internet. É difícil prever, com anos de
  antecedência, a demanda que será imposta sobre um sistema. Além disso, superestimar o crescimento futuro não é
  interessante pelo gasto extra e desnecessário de recursos.
* evitar gargalos de desempenho: em geral, os pontos críticos do sistema devem ser descentralizados, para evitar um
  gargalo de desempenho, isto é, distribuir esses pontos de gargalo entre várias máquinas.

### Tratamento de falhas
Quando ocorrem falhas no hardware ou software, os programas podem produzir resultados incorretos, ou mesmo pararem sua
execução. As falhas em um sistema distribuído costumam ser parciais, isto é, alguns componentes falham, enquanto outros
continuam funcionando. Desta forma, a detecção e tratamento de falhas pode ser mais difícil. Algumas técnicas para
tratar falhas incluem:

* utilizar somas de verificação ou assinaturas (fingerprints): é possível detectar dados danificados em uma mensagem ou
  arquivo através de somas de verificação
* mascaramento de falhas: algumas falhas podem ser ocultadas do cliente final, ou pelo menos se tornarem menos sérias,
  como por exemplo a retransmissão de uma mensagem corrompida ou que não chegou. Em casos mais sérios, não é possível
  realizar esse mascaramento
* tolerância a falhas: quando uma falha não consegue ser mascarada, o cliente pode ser projetado a tolerar essa falha.
  Por exemplo, quando um navegador não consegue se conectar a um servidor web, ele não faz o usuário esperar
  eternamente, e sim apresenta um erro que informa o usuário sobre o problema
* recuperação de falhas: a recuperação envolve projetar o sistema de modo que estados anteriores dos dados possam ser
  recuperados ou retrocedidos
* redundância: os serviços podem se tornar mais resilientes a falhas com o uso de componentes redundantes, por exemplo,
  ter pelo menos duas rotas diferentes entre dois roteadores, ou pelo menos dois links de internet para um servidor, ou
  pelo menos duas réplicas de um banco de dados, etc.

### Concorrência e sincronização
Durante o dia a dia de uso de um sistema distribuído há sempre a possibilidade de que vários clientes tentem acessar um
recurso compartilhado ao mesmo tempo. É possível, por exemplo, que duas pessoas comprem ao mesmo tempo a última passagem
de um vôo, pois o sistema as processou simultaneamente e considerou as duas válidas.

Uma forma de resolver esse problema é aceitar e tratar apenas um pedido de um cliente por vez. Por mais que garanta a
consistência, essa limitação diminui muito o desempenho de um sistema, que poderia permitir o processamento de vários
pedidos ao mesmo tempo.

Como qualquer objeto que represente um recurso compartilhado em um sistema distribuído deve ser responsável por garantir
que ele opere corretamente em um ambiente concorrente, é necessário a utilização de técnicas de consistência e
sincronização, como por exemplo semáforos.

### Transparência
A transparência significa a ocultação da natureza distribuída do sistema. O usuário final ou o programador de algum
aplicativo de integração consegue observar apenas o sistema como um todo, e não o conjunto de componentes independentes.
