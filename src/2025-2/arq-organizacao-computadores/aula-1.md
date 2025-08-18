---
name: Aula 1 - Introdução a sistemas de numeração
date: 2025-08-11
---

Os sistemas de numeração são conjuntos de símbolos e regras que nos permitem representar quantidades. O sistema que
usamos no dia a dia é o decimal, mas existem outros, como o binário, hexadecimal e octal. A principal diferença entre
eles é a **base**, que determina a quantidade de símbolos utilizados.

## Sistema de numeração decimal (base 10)
Este é o sistema mais comumente utilizado. Ele usa 10 dígitos: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9. O valor de um número nesse
sistema depende da posição de cada dígito, e cada uma dessas posições representa uma potência de 10, da direita para a
esquerda, começando com {% math "10^0" %} (unidades), {% math "10^1" %} (dezenas), {% math "10^2" %} (centenas), e assim
por diante.

O número 254, por exemplo, pode ser decomposto da seguinte forma:

{% math "bf orange 254 = bf orange 2 * 10^2 + bf orange 5 * 10^1 + bf orange 4 * 10^0", true %}

## Sistema de numeração binário (base 2)
Este sistema é fundamental para a computação. Ele utiliza apenas dois dígitos: 0 e 1. Os computadores usam esse sistema
internamente, em seu hardware, devido à sua simplicidade e eficiência. Para o computador, esse sistema significa ligado
(1) e desligado (0). Usar um sistema com mais dígitos, como o decimal, exigiria componentes eletrônicos mais complexos
e difíceis de miniaturizar, já que seria necessário representar os diferentes números usando alguma outra
característica, por exemplo: 1 Volt representando 0, 1.1 Volt sendo 1, 1.2 Volt significando 2, até chegar em 1.9 Volt
para o valor 9. Utilizar essas outras características poderia trazer vantagem na representação dos números, mas traz
diversos desafios para construir esses componentes eletrônicos, que seriam muito mais complexos e difíceis de
miniaturizar. Além disso, utilizar o sistema binário torna o componente mais robusto a ruídos e variações elétricas. Uma
pequena variação em um sinal binário ainda vai ser interpretado corretamente como 0 ou 1, enquanto em outro sistema, a
mesma flutuação poderia levar a erros de interpretação.

De forma similar ao sistema decimal, cada posição representa uma potência, mas desta vez de base 2. Da direita para a 
esquerda, o sistema binário começa com {% math "2^0" %} (unidades), {% math "2^1" %} (dezenas), {% math "2^2" %}
(centenas), e assim por diante.

O número binário {% math "10010110" %}, por exemplo, representa o seguinte valor decimal:

{% math "bf orange 10010110_2 = bf orange 1 * 2^7 + bf orange 0 * 2^6 + bf orange 0 * 2^5 + bf orange 1 * 2^4 + bf orange 0 * 2^3 + bf orange 1 * 2^2 + bf orange 1 * 2^1 + bf orange 0 * 2^0", true %}
{% math "bf orange 10010110_2 = bf orange 1 * 128 + bf orange 0 * 64 + bf orange 0 * 32 + bf orange 1 * 16 + bf orange 0 * 8 + bf orange 1 * 4 + bf orange 1 * 2 + bf orange 0 * 1", true %}
{% math "bf orange 10010110_2 = 128 + 16 + 4 + 2", true %}
{% math "bf orange 10010110_2 = 150", true %}

## Sistema de numeração octal (base 8)
Este sistema é similar aos outros, mas utilizando a base 8 como referência, portanto utilizamos 8 dígitos apenas:
0, 1, 2, 3, 4, 5, 6 e 7. A base da potência para conversão também se torna 8. É menos usado que o hexadecimal, e possui
o problema do número se passar facilmente como um decimal, dificultando o entendimento.

O número {% math "4765" %} em octal, por exemplo, representa o seguinte valor decimal:
{% math "bf orange 4765_8 = bf orange 4 * 8^3 + bf orange 7 * 8^2 + bf orange 6 * 8^1 + bf orange 5 * 8^1", true %}
{% math "bf orange 4765_8 = bf orange 4 * 512 + bf orange 7 * 64 + bf orange 6 * 8 + bf orange 5 * 1", true %}
{% math "bf orange 4765_8 = 2048 + 448 + 48 + 5", true %}
{% math "bf orange 4765_8 = 2549", true %}

## Sistema de numeração hexadecimal (base 16)
Neste sistema, temos mais opções de caracteres do que normalmente utilizamos para números no dia a dia (decimal, de 0 a
9), portanto vamos utilizar as letras A a F para representar os outros 6 "dígitos" válidos desse sistema. A tabela a
seguir compara todos os dígitos hexadecimais com seus valores correspondentes no decimal:

| Hexadecimal | Decimal |
|-------------|---------|
| 0           | 0       |
| 1           | 1       |
| 2           | 2       |
| 3           | 3       |
| 4           | 4       |
| 5           | 5       |
| 6           | 6       |
| 7           | 7       |
| 8           | 8       |
| 9           | 9       |
| A           | 10      |
| B           | 11      |
| C           | 12      |
| D           | 13      |
| E           | 14      |
| F           | 15      |

Dessa forma, para transformar um valor em hexadecimal para decimal, devemos utilizar a tabela acima para encontrar o
valor correspondente, em especial para od "dígitos" A a F:

O número {% math "FA96" %} em octal, por exemplo, representa o seguinte valor decimal:
{% math "bf orange FA96_16 = bf orange 'F' * 16^3 + bf orange 'A' * 16^2 + bf orange 9 * 16^1 + bf orange 6 * 16^0", true %}
{% math "bf orange FA96_16 = bf orange 15 * 16^3 + bf orange 10 * 16^2 + bf orange 9 * 16^1 + bf orange 6 * 16^0", true %}
{% math "bf orange FA96_16 = bf orange 15 * 4096 + bf orange 10 * 256 + bf orange 9 * 16 + bf orange 6 * 1", true %}
{% math "bf orange FA96_16 = 61440 + 2560 + 144 + 6", true %}
{% math "bf orange FA96_16 = 64150", true %}

## Tabela de comparação entre os sistemas numéricos estudados
| Decimal | Binário | Octal | Hexadecimal |
|---------|---------|-------|-------------|
| 0       | 0       | 0     | 0           |
| 1       | 1       | 1     | 1           |
| 2       | 10      | 2     | 2           |
| 3       | 11      | 3     | 3           |
| 4       | 100     | 4     | 4           |
| 5       | 101     | 5     | 5           |
| 6       | 110     | 6     | 6           |
| 7       | 111     | 7     | 7           |
| 8       | 1000    | 10    | 8           |
| 9       | 1001    | 11    | 9           |
| 10      | 1010    | 12    | A           |
| 11      | 1011    | 13    | B           |
| 12      | 1100    | 14    | C           |
| 13      | 1101    | 15    | D           |
| 14      | 1110    | 16    | E           |
| 15      | 1111    | 17    | F           |
| 16      | 10000   | 20    | 10          |
| 17      | 10001   | 21    | 11          |
| 18      | 10010   | 22    | 12          |
| 19      | 10011   | 23    | 13          |
| 20      | 10100   | 24    | 14          |
| 21      | 10101   | 25    | 15          |
| 22      | 10110   | 26    | 16          |
| 23      | 10111   | 27    | 17          |
| 24      | 11000   | 30    | 18          |
| 25      | 11001   | 31    | 19          |
| 26      | 11010   | 32    | 1A          |
| 27      | 11011   | 33    | 1B          |
| 28      | 11100   | 34    | 1C          |
| 29      | 11101   | 35    | 1D          |
| 30      | 11110   | 36    | 1E          |
| 31      | 11111   | 37    | 1F          |
| 32      | 100000  | 40    | 20          |
| 33      | 100001  | 41    | 21          |
| 34      | 100010  | 42    | 22          |
| 35      | 100011  | 43    | 23          |
| 36      | 100100  | 44    | 24          |
| 37      | 100101  | 45    | 25          |
| 38      | 100110  | 46    | 26          |
| 39      | 100111  | 47    | 27          |
| 40      | 101000  | 50    | 28          |

## Motivação das bases 8 e 16 na computação
Estudamos sistemas numéricos octais e hexadecimais pois eles oferecem representações compactas e eficientes de números
binários. Um único byte é composto por 8 bits. Para um ser humano, ler, memorizar e interpretar longas sequências de 0 e
1s é praticamente impossível e muito propenso a erros. O octal e o hexadacimal auxiliam nesse processo pois são baseados
em potências de 2 ({% math "16 = 2^4" %} e {% math "8 = 2^3" %}). Cada dígito hexadecimal representa exatamente 4 bits
em binário, e cada dígito octal representa 3 bits binários. O octal já foi mais utilizado no passado da computação, mas
hoje predominantemente utilizamos o sistema hexadecimal para representar grandes números em binário.
