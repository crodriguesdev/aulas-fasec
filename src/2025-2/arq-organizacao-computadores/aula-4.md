---
name: Aula 4 - Memórias cache, interna e externa, aula 2
date: 2025-09-01
---

## Memória interna
Nos primeiros computadores, a forma mais comum de armazenamento de acesso aleatório para a memória principal utilizava
uma matriz de anéis ferromagnéticos, chamados de núcleo. Com a evolução da eletrônica, atualmente as memórias em chips
semicondutores são utilizadas, superando a performance dos loops ferromagnéticos.

O elemento básico de uma memória semicondutora é a célula de memória. Embora diversas tecnologias eletrônicas sejam
utilizadas, todas as células de memória semicondutora possuem pelo menos as seguintes propriedades:

* apresentam dois estados estáveis (ou semi estáveis), que podem ser usados para representar o binário 1 e 0
* são capazes de ser escritas pelo menos uma vez
* são capazes de ser lidas conforme a necessidade

Normalmente a célula de memória tem três terminais eletrônicos:

* terminal de seleção: é o "endereço", e seleciona a célula para a operação de leitura ou escrita
* terminal de controle: indica a operação, se é leitura ou escrita
* terminal de estado: entrega o estado atual do terminal de memória (leitura) ou recebe um sinal de entrada e define
  o estado da célula

Memórias de acesso aleatório permitem acessar diretamente blocos de memória através de lógicas de endereçamento. Existem
diversas memórias de acesso aleatório feitas com semicondutor, sendo as principais:

<table>
    <tr>
        <th>Tipo de memória</th>
        <th>Categoria</th>
        <th>Apagamento</th>
        <th>Mecanismo de escrita</th>
        <th>Volatilidade</th>
    </tr>
    <tr>
        <td>Memória de acesso aleatório (RAM)</td>
        <td>Memória de leitura-escrita</td>
        <td>Eletricamente, a nível de byte</td>
        <td>Eletricamente</td>
        <td>Volátil</td>
    </tr>
    <tr>
        <td>Memória somente de leitura (ROM)</td>
        <td rowspan="2">Memória somente de leitura</td>
        <td rowspan="2">Não é possível</td>
        <td>Máscaras</td>
        <td rowspan="5">Não volátil</td>
    </tr>
    <tr>
        <td>ROM programável (PROM)</td>
        <td rowspan="4">Eletricamente</td>
    </tr>
    <tr>
        <td>PROM apagável (EPROM)</td>
        <td rowspan="3">Memória principalmente de leitura</td>
        <td>Luz UV, nível de chip</td>
    </tr>
    <tr>
        <td>PROM eletricamente apagável (EEPROM)</td>
        <td>Eletricamente, nível de byte</td>
    </tr>
    <tr>
        <td>Memória flash</td>
        <td>Eletricamente, nível de bloco</td>
    </tr>
</table>

As duas formas básicas de memória de acesso aleatório são a RAM dinâmica (DRAM) e a RAM estática (SRAM). A SRAM é mais
rápida, cara e menos densa que a DRAM, e é mais usada em memórias cache. A DRAM é mais barata, lenta, e mais usada na
memória principal.

A RAM dinâmica é feita com células que guardam os dados como carga em capacitores. A presença ou ausência de carga neste
capacitor indica o binário 1 ou 0. Como os capacitores possuem uma tendência natural para a descarga, essas memórias
exigem recarga periódica ("refresh" de memória) para manter o dado armazenado. O termo *dinâmica* refere-se a essa
tendência de perda da carga armazenada, mesmo com energia aplicada continuamente.

Uma RAM estática é um dispositivo que utiliza flip-flops tradicionais para armazenar dados, e ela irá manter esses dados
enquanto houver energia fornecida a ela.

Tanto uma memória SRAM quanto uma memória DRAM são voláteis, ou seja, precisam ser mantidas ligadas à energia para
preservar seus valores. Uma célula de memória dinâmica é mais simples e menor do que uma célula de memória estática,
permitindo chips menores que armazenam a mesma quantidade de *bytes*. Em compensação, a DRAM requer um circuito de
*refresh*.

### Memórias ROM
Uma memória somente leitura (ROM) contém um padrão permanente de dados, que não pode ser mudado. Uma memória ROM não é
volátil. Embora seja possível ler uma ROM, não é possível escrever algo novo nela. Aplicações das ROM estão na
eletrônica e na microprogramação. Sua principal vantagem é que os dados estão presentes de forma permanente na memória,
e nunca precisam ser carregados novamente de um armazenamento secundário.

### Correção de erro
Um sistema de memória semicondutora está sujeita a erros. Esses podem ser categorizados como permanentes e não
permanentes. Uma falha permanente é um defeito físico no circuito, de modo que uma ou mais células de memória afetadas
não podem armazenar dados de modo confiável. Os erros permanentes podem ser causados por uso intenso em ambiente
impróprio, defeitos de fabricação ou desgaste. Um erro não permanente é um evento aleatório, nào destrutivo, que altera
o conteúdo de uma ou mais células de memória sem danificá-la. Esses erros podem ser causados por oscilações na fonte de
alimentação ou partículas alfa. Essas partículas são resultado de um declínio radioativo, e são muito comuns, pois
átomos radioativos são encontrados em pequenas quantidades em quase todos os materiais. A maioria dos sistemas de
memória modernos possui alguma lógica para detectar e corrigir esses erros indesejáveis, sendo o mais comum a utilização
de bits de paridade.

## Memória externa
A memória externa é responsável por armazenar dados de forma não volátil e permanente. No geral são utilizados discos
magnéticos (HDs) ou memória flash (SSDs).

### RAID
É possível utilizar vários discos para organizar-se os dados, melhorando performance e confiabilidade. O padrão RAID foi
normalizado pela indústria, e consiste em sete níveis, de zero a seis. Esses níveis não implicam um relacionamento
hierárquico, mas designam diferentes arquiteturas de projeto, que compartilham três características em comum:

* RAID é um conjunto de discos fisicos (array) vistos pelo sistema operacional como um único disco lógico
* Os dados são distribuídos pelos discos físicos de um array em um esquema conhecido como intercalação de dados
* A capacidade de disco redundante é usada para armazenar informações de paridade

* RAID 0: não é um membro verdadeiro da família RAID, pois não inclui redundância. Nesse nível, os dados de usuário e do
  sistema são distribuídos por todos os discos do array, intercalados pelos discos disponíveis
* RAID 1: difere dos níveis de 2 a 6 no modo como a redundância é obtida. Nesse esquema, a redundância é obtida pelo
  simples ato de duplicar todos os dados. A principal desvantagem do RAID 1 é o custo, pois é necessário o dobro de
  espaço em disco do que a capacidade lógica disponível para o usuário e sistema
* RAID 2: divide os dados, como o RAID 0, mas mantém códigos de correção de erros em discos específicos. Todos os discos
  membros participam de cada solicitação de E/S, e normalmente os eixos individuais são sincronizados.
* RAID 3: idêntico ao RAID 2, mas utilizando apenas um único disco redundante, não importa o tamanho do array de discos.
  Ao invés de um código de correção de erro, um bit de paridade simples é calculado para o conjunto de bits individuais
  na mesma posição em todos os discos
* RAID 4: utiliza uma técnica de acesso independente. Cada disco membro opera independentemente, de modo que as
  solicitações de E/S podem ser satisfeitas em paralelo. Calcula e armazena a paridade de um bloco inteiro em um disco
  de paridade
* RAID 5: é organizado da mesma forma qoe o RAID 4, sendo a única diferença que este distribui os blocos de paridade
  por todos os discos
* RAID 6: no esquema RAID 6, dois cálculos de paridade diferentes são executados e armazenados em blocos separados em
  discos diferentes. Ele oferece uma disponibilidade de dados extremamente alta.
