---
name: Aulas 8 e 9 - Conjuntos de instruções
date: 2025-10-20
---

O conjunto de instruções são os comandos codificados em linguagem de máquina (binário) reconhecidos por um processador.
Este conjunto oferece os requisitos funcionais para o processador: cada instrução indica uma funcionalidade entregada
pelo processador.

Cada instrução precisa conter as informações exigidas pelo processador para a execução. Os elementos que compõem uma
instrução de máquina são:
* Código de operação: especifica a operação a ser realizada (por exemplo somar, ler dados, escrever dados, etc). A
  operação é especificada por um código binário, conhecido como código de operação, ou opcode.
* Referência à operando fonte: a operação pode envolver um ou mais operandos fonte (entrada para a operação)
* Referência à operando destino: a operação pode produzir um resultado
* Referência à próxima instrução: é a indicação que diz ao processador onde buscar a próxima instrução do programa

Os operandos fonte e destino podem estar em uma dessas quatro áreas:
* Memória principal: caso o dado esteja na memória principal, o endereço da memória precisa ser fornecido
* Registrador do processador: se o dado está em um registrador do processador, a instrução precisa conter o número do
  registrador desejado
* Imediato: o valor do operando está contido em um campo na instrução sendo executada
* Dispositivo de E/S: é possível especificar o módulo e o dispositivo de E/S em uma operação para utilizá-la na
  instrução

## Opcodes

Os opcodes identificam as instruções unitárias que um processador pode executar, e esse conjunto de instruções precisa
ser suficiente para expressar qualquer uma das instruções de uma linguagem de alto nível. É possível dividir as
instruções em quatro tipos:
* Processamento de dados: instruções lógicas e aritméticas
* Armazenamento de dados: movimentação para dentro ou fora de registradores e locais de memória
* Movimentação de dados: instruções de entrada e saída
* Controle: instruções de desvio e condicionais

É possível fazer um paralelo entre os tipos de instruções com as funções do processador. Esse paralelo não é
coincidência, já que essas instruções são a consolidação das funções citadas anteriormente, e são a forma de aplicações
utilizarem essas funções.

Dentro do computador, as instruções são representadas por sequências de bits.É difícil para os programadores lidar com
representações binárias de instruções de máquina. Desta forma, tornou-se uma prática comum usar uma representação
simbólica das instruções de máquina. Para esta disciplina, utilizaremos um conjunto simplificado de instruções para
entender este conteúdo de forma simbólica, como por exemplo:

| Operação    | Descrição                                                 |
|-------------|-----------------------------------------------------------|
| SOME        | Somar dois operandos                                      |
| SUBTRAIA    | Subtrair dois operandos                                   |
| MULTIPLIQUE | Multiplicar dois operandos                                |
| DIVIDA      | Dividir dois operandos                                    |
| LEIA        | Ler um valor da memória principal para um registrador     |
| SALVE       | Salvar um valor de um registador para a memória principal |

No geral, utilizaremos nesta disciplina a notação de instruções em que um dos endereços realiza o trabalho duplo como
operando e resultado. O exemplo a seguir demonstra um cálculo matemático e as instruções necessárias para executá-lo:

{% math "f = {a - b}/{c + (d xx e)}", true %} 

```
LEIA R1 a                # lê o valor da posição de memória a para o registrador 1
SUBTRAIA R1 b            # realiza a operação: R1 = R1 - b
LEIA R2 d                # lê o valor da posição de memória d para o registrador 2
MULTIPLIQUE R2 e         # realiza a operação: R2 = R2 * e
SOME R2 c                # realiza a operação: R2 = R2 + c
DIVIDA R1 R2             # realiza a operação: R1 = R1 / R2
SALVE R1 f               # salva o valor do registrador 1 para a posição de memória f
```
