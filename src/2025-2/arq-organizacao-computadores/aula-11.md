---
name: Aula 11 - Arquiteturas RISC, CISC e EPIC
date: 2025-11-03
---

As duas principais famílias de arquiteturas de computadores são as RISC e CISC. Elas determinam a quantidade e
complexidade das instruções suportadas nativamente por um chip.

* CISC (**Complex** Instruction Set Computer) refere-se a uma arquitetura de computador que utiliza um conjunto de
  instruções extenso e complexo. O objetivo desta arquitetura é minimizar o número de instruções por programa,
  sacrificando a quantidade de ciclos por instrução.
* RISC (**Reduced** Instruction Set Computer) representa um design de processadores que utilizam um conjunto mais
  simples de instruções, que são executadas preferencialmente em um único ciclo de clock. Esse modelo procura reduzir a
  complexidade do hardware.

Primeiramente, é necessário ressaltar que ambos os processadores conseguem executar qualquer programa de computador
moderno, desde que este tenha sido compilado para sua arquitetura. A principal diferença entre as arquiteturas está na
quantidade de instruções de máquina presentes no código de linguagem de máquina (executável .exe) da aplicação. Além
disso, os processadores RISC podem utilizar o pipelining de forma mais eficiente, já que suas instruções possuem uma 
menor duração em média.

A tabela a seguir compara as arquiteturas com mais detalhes:

|                           | RISC                                         | CISC                       |
|---------------------------|----------------------------------------------|----------------------------|
| Quantidade de instruções  | Menor                                        | Maior                      |
| Tipos de instruções       | Simples e otimizadas                         | Complexas e especializadas |
| Conjuntos de arquiteturas | Arm, PowerPC e RISC-V                        | x86, IA-64 e IBM Z         |
| Marcas de processadores   | Qualcomm, Apple, MediaTek e Samsung          | Intel e AMD                |
| Exemplos de uso           | Celulares, tablets, smartwatches, roteadores | Desktops e notebooks       |

Arquiteturas CISC geralmente são mais complexas que as RISC, pois tem um conjunto de instruções mais complexo e mais
numeroso, porém a diferença de complexidade entre as duas é mais teórica do que prática nos dias de hoje, já que
ambas evoluíram para atender necessidades específicas e solucionar desvantagens.

No geral, arquiteturas RISC costumam ser mais eficientes em consumo de energia do que as CISC, pois é possível projetar
chips que entendam menos instruções. Também é possível projetar CPUs do tipo CISC com menor consumo energético e menor
geração de calor, como por exemplo processadores Intel Atom x86 para smartphones Android. No entanto, esse tipo de 
aplicação costuma ser menos comum no CISC.

### Exemplos de outras arquiteturas

* EPIC (Explicitly Parallel Instruction Computing): foi desenvolvida como uma arquitetura de alto desempenho
  extremamente paralela. Ela depende de que o compilador reorganize o código no executável para o máximo de paralelismo
  possível enquanto o hardware foca em executar as instruções. Sua maior limitação foi a necessidade desses compiladores
  especializados, o que resultou em um hardware caro e com baixa quantidade de softwares disponíveis para ele
* ZISC (Zero Instruction Set Computer): é uma arquitetura que se baseia nos princípios de correspondência de padrões e
  ausência de microinstruções. Esses chips são comparáveis a redes neurais, mas desenvolvidos no formato de hardware.
  É uma arquitetura que permite o hardware possuir uma capacidade de aprendizado de padrões e reconhecimento de lógica,
  mas com a limitação de poder ser não-determinística.
