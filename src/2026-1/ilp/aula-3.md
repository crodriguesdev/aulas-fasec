---
name: Aula 3 - Lógica e raciocínio lógico na construção de algoritmos
date: 2026-03-04
---

Para esta disciplina, utilizaremos a IDE e o dialeto da linguagem Portugol disponível em
[portugol.dev](https://portugol.dev).

### Cálculo de área de um retângulo
```portugol
programa {
  funcao inicio() {
    // ENTRADA
    real base // declaração da variável que guardará o valor da base
    real altura  // declaração da variável que guardará o valor da altura
    escreva("Digite o valor da base ")
    leia(base) // lendo o valor digitado do teclado para a variável base
    escreva("Digite o valor da altura ")
    leia(altura) // lendo o valor digitado do teclado para a variável altura

    // PROCESSAMENTO
    real area // declaração da variável que guardará o cálculo da área
    area = base * altura // cálculo da área do retângulo

    // SAÍDA
    escreva("A área do retângulo é ", area)
  }
}
```

### Cálculo de reajuste salarial básico
```portugol
programa {
  funcao inicio() {
    // ENTRADA
    real salarioBase // declaração da variável que guardará o salário base
    real percReajuste  // declaração da variável que guardará o percentual de reajuste
    escreva("Digite o salário base ")
    leia(salarioBase) // lendo o valor digitado do teclado para a variável salarioBase
    escreva("Digite o percentual do reajuste ")
    leia(percReajuste) // lendo o valor digitado do teclado para a variável percReajuste

    // PROCESSAMENTO
    real valorReajuste
    real novoSalario
    // ajustando a porcentagem, convertendo de 10 para 0.1, por exemplo
    // sem esse ajuste, o salário seria multiplicado pelo valor digitado diretamente,
    // sem ser considerado como porcentagem
    // exemplo: se não tivesse essa linha, e o usuário digitasse salário de 2000 e
    // percentual de reajuste de 10, o valor final seria 20000
    percReajuste = percReajuste / 100
    valorReajuste = salarioBase * percReajuste // cálculo do reajuste que será somado ao salário
    novoSalario = salarioBase + valorReajuste // somando o salário anterior mais o valor do reajuste

    // SAÍDA
    escreva("O salário ajustado é ", novoSalario)
  }
}
```

### Conversão de Celsius para Fahrenheit
```portugol
programa {
  funcao inicio() {
    // ENTRADA
    real tempCelsius
    escreva("Digite a temperatura em Celsius ")
    leia(tempCelsius)

    // PROCESSAMENTO
    real tempFahrenheit
    // o parênteses é importante para a precedência das operações
    tempFahrenheit = (9 * tempCelsius + 160)/5

    // SAÍDA
    escreva("A temperatura em Fahrenheit é ", tempFahrenheit)
  }
}
```

### Exercícios de fixação
* Cálculo de consumo de combustível
  * O programa deve ler a kilometragem percorrida e o consumo em litros de combustível, e então mostrar a média de
    consumo em km/litro.
```portugol
programa {
  funcao inicio() {
    real kmPercorrido, consumoLitros
    escreva("Digite a kilometragem percorrida ")
    leia(kmPercorrido)
    escreva("Digite o consumo em litros ")
    leia(consumoLitros)

    real mediaConsumo = kmPercorrido / consumoLitros
    escreva("A média de consumo foi de ", mediaConsumo, " km/L")
  }
}
```
* Divisão de conta de restaurante
  * O programa deve ler o valor total da conta, a porcentagem de gorjeta e a quantidade de pessoas na mesa, dividir o
    valor final igualmente e mostrar quanto cada pessoa da mesa deverá pagar.
```portugol
programa {
  funcao inicio() {
    real valorTotalConta
    inteiro porcentagemGorjeta, qtdPessoas

    escreva("Digite o valor total da conta: ")
    leia(valorTotalConta)
    escreva("Digite a porcentagem de gorjeta: ")
    leia(porcentagemGorjeta)
    escreva("Digite a quantidade de pessoas na mesa: ")
    leia(qtdPessoas)

    real valorGorjeta, valorPorPessoa
    valorGorjeta = valorTotalConta * (porcentagemGorjeta / 100)
    valorPorPessoa = (valorTotalConta + valorGorjeta) / qtdPessoas

    escreva("O valor por pessoa é de ", valorPorPessoa)
  }
}
```
* Bhaskara
  * A partir dos coeficientes a, b e c, calcule as raízes x1 e x2 da equação do segundo grau.
  * **ATENÇÃO: ainda não vai ser possível tratar o caso do delta negativo. Quando tivermos no conteúdo de desvio
    condicional resolveremos esse problema**
  * Observação: para resolver, é necessário incluir as funções matemáticas e usar a raiz quadrada de lá:
```portugol
programa {
  inclua biblioteca Matematica --> mat

  funcao inicio() {
    real a, b, c
    escreva("Digite o coeficiente a: ")
    leia(a)
    escreva("Digite o coeficiente b: ")
    leia(b)
    escreva("Digite o coeficiente c: ")
    leia(c)

    real delta = mat.potencia(b, 2) - 4 * a * c
    real x1 = (-b + mat.raiz(delta, 2)) / 2 * a
    real x2 = (-b - mat.raiz(delta, 2)) / 2 * a

    escreva("As raízes são: ", x1, " e ", x2)
  }
}
```
