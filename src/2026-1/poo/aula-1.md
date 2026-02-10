---
name: Aula 1 - Introdução à linguagem de programação Java
date: 2026-02-10
---

A linguagem de programação Java foi criada pela Sun Microsystems em 1995, e hoje é cuidada pela Oracle. É uma linguagem 
fortemente orientada a objetos que nasceu com a premissa "Write once, run anywhere" (escreva uma vez, execute em 
qualquer lugar). Essa portabilidade existe por conta da JVM (Java Virtual Machine). O compilador Java transforma o 
código-fonte em um formato intermediário chamado de bytecode. A JVM então atua como um interpretador e tradutor desse 
formato para o sistema operacional, garantindo que o programa funcione da mesma forma, independente da plataforma.

Além da versatilidade, o Java é uma linguagem quase que totalmente orientada a objetos, que preza por robustez e 
segurança. Por conta disso, é muito utilizado em grandes empresas (ambientes "enterprise"), como grandes bancos, 
plataformas de e-commerce, órgãos públicos, etc.

## Exemplos de códigos em Java

### Hello World
```java
// HelloWorld.java
// O NOME DA CLASSE PÚBLICA DO ARQUIVO DEVE SER O MESMO NOME DO ARQUIVO

public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello World");
    }

}
```

### Tipos de dados mais comuns
```java
// TiposDeDados.java

public class TiposDeDados {

    public static void main(String[] args) {
        int inteiro = 123;
        long inteirol = 45671;

        float decimalf = 345.6f; // f no final
        double decimald = 1234.5;
        boolean booleano = true;
        boolean booleanf = false;

        char caractere = 'A';
        String disciplina = "Programação orientada a objetos";
    }

}
```

* o tipo float deve ser escrito como *123.4f* ou *(float) 123.4*, pois a notação decimal padrão do Java é o *double*.
* o tipo *String* começa com letra maiúscula porque "String" não é um tipo primitivo de dados, e sim uma classe. No
  exemplo acima, *"disciplina"* é um objeto.

### Entrada e saída básica
```java
// EntradaSaida.java

import java.util.Scanner;

public class EntradaSaida {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite a primeira nota");
        double nota1 = input.nextDouble();
        System.out.println("Digite a segunda nota");
        double nota2 = input.nextDouble();

        double media = (nota1 + nota2) / 2;
        System.out.println("A média das notas é " + media);
        // ou pode ser
        // System.out.printf("A média das notas é %f\n", media);
    }

}
```

* o Java possui os pacotes System.in e System.out para entrada e saída, respectivamente
* println e printf são funções bastante utilizadas para escrever na tela
* pra realizar a entrada, é indicado criar um objeto da classe Scanner para a leitura de dados do teclado
* para utilizar o Scanner, precisamos importar a classe

### Estruturas condicionais
```java
// Condicional.java

import java.util.Scanner;

public class Condicional {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.println("Digite a média");
        double media =  input.nextDouble();

        if(media >= 7) {
            System.out.println("Aprovado");
        } else if(media >= 5) {
            System.out.println("Exame final");
        } else {
            System.out.println("Reprovado");
        }

    }

}
```
