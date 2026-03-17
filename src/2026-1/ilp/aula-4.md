---
name: Aula 4 - Entrada e saída; tipos básicos de dados; variáveis e constantes
date: 2026-03-11
---

Para esta disciplina, utilizaremos a IDE e o dialeto da linguagem Portugol disponível em
[portugol.dev](https://portugol.dev).

### Tipos básicos de dados
Cada linguagem de programação possui tipos básicos de dados, que são os "formatos" que valores podem ser armazenados no
computador. O Portugol, assim como algumas outras linguagens de programação (exemplo: C, C++, Java), exige que o tipo de
dado de um valor seja previamente declarado, e um valor atribuído a uma variável deverá ser compatível com o tipo de
dado daquela variável. O Portugol possui os seguintes tipos de dados:

* **inteiro**: valores numéricos sem casas decimais
* **real**: valores numéricos com casas decimais
* **caracter**: apenas UM caracter, que pode ser letra, número, pontuações, demais símbolos, etc
* **cadeia**: qualquer quantidade de caracteres, formando uma palavra, frase ou texto
* **logico**: utilizada em operações lógicas, que possui somente duas opções de valor: **verdadeiro** ou **falso**

### Entrada e saída
As instruções de entrada permitem o algoritmo capturar dados do ambiente externo (fora da máquina) e armazenar esse
valor em uma variável. As instruções de saída permitem ao algoritmo exibir resultados e dados processados para o usuário
ou para o ambiente.

Existem diversos tipos de formas de entrada em um algoritmo, como por exemplo: teclado, mouse, scanner, sensores no
geral. Além disso, também existem diversos tipos de saídas: tela, impressora, caixas de som, etc.

Nesta disciplina, utilizaremos a entrada e saída mais básica da informática, que é a leitura do teclado e a escrita na
tela. As funções do Portugol são:
* **leia(variavel)**: realiza uma leitura do teclado e armazena o que foi digitado na variável informada. Essa operação
  **pausa** a execução do programa até que o usuário termine de digitar e aperte a tecla enter.
* **escreva(texto)**: realiza a escrita de determinado texto no terminal que está executando a aplicação. Esta operação
  também pausa a execução até que todo o texto seja escrito. É possível escrever mais de um texto separado por vírgula,
  e o texto dessa forma será concatenado na tela.

### Exemplo: Decomposição de tempo
  * A partir de uma quantidade de minutos, informe a quantidade de dias, horas e minutos que representam aquela entrada
    * Exemplo: 2160 minutos => 1 dias, 12 horas, 0 minutos
```portugol
programa {
  funcao inicio() {
    inteiro qtdMinutosInformados
    escreva("Digite a quantidade de minutos: ")
    leia(qtdMinutosInformados)

    inteiro qtdDias, qtdHoras, qtdMinutos
    qtdMinutos = qtdMinutosInformados % 60
    qtdHoras = qtdMinutosInformados / 60
    qtdDias = qtdHoras / 24
    qtdHoras = qtdHoras % 24 // atualizando quantidade de horas para "retirar" os dias completos

    escreva(qtdDias, " dias, ", qtdHoras, " horas, ", qtdMinutos, " minutos")
  }
}
```

### Exercício para fixação
* Decomposição de valor de troco
  * Dado um valor (consideraremos inteiro para esse exercício), informe a menor quantidade de cédulas de dinheiro para
    devolver o troco ao cliente. Utilize os valores de cédula de 200, 100, 50, 20, 10, 5, 2 e 1 real.
  * Exemplo: 192 reais de troco => 0 cédulas de 200, 1 cédulas de 100, 1 cédulas de 50, 2 cédulas de 20, 0 cédulas de 5, 1 cédulas de 2 e 0 cédulas de 1.
