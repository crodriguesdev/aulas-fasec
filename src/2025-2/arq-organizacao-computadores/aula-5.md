---
name: Aula 5 - Entrada e saída
date: 2025-09-15
---

A arquitetura de E/S do sistema de computação é a sua interface com o mundo exterior. Essa arquitetura oferece uma
maneira sistemática de controlar a interação com o mundo externo, e são o terceiro elemento chave de um sistema
computacional (os outros dois são processador e módulos de memória). Cada módulo de E/S se conecta ao barramento do
sistema e controla um ou mais dispositivos periféricos. Estes módulos são o conjunto de conectores mecânicos que
realizam a ligação física do periférico, além de conter a lógica para realizar a comunicação entre o periférico e o
barramento.

É possível classificar os dispositivos periféricos em três tipos:

* legíveis ao ser humano: monitores, impressoras, teclados, etc
* legíveis à máquina: sistemas de disco, sensores, atuadores, etc
* comunicação: placas de bluetooth, wi-fi, etc

A interface entre o barramento e o módulo de E/S ocorre na forma de sinais de controle, dados e estado. Os sinais de
controle determinam a função que o dispositivo realizará, como enviar dados ao módulo de E/S (entrada, *input* ou
*read*), aceitar dados do módulo de E/S (saída, *output* ou *write*), informar o estado ou realizar alguma função de
controle particular do dispositivo. Os sinais de dados são o conjunto de *bits* a serem enviados ou recebidos do módulo
de E/S. Por último, os sinais de estado indicam o estado do dispositivo, por exemplo, READY (pronto) ou NOT-READY
(ocupado).

## Requisitos de um módulo de E/S

Os principais requisitos que um módulo de E/S deve cumprir são:

* Controle e temporização: o módulo deve coordenar o fluxo de tráfego entre os recursos internos e periféricos externos
* Comunicação com o processador: o módulo deve ser capaz de decodificar o comando recebido do processador, trocar dados,
  informar o estado do periférico, além de reconhecer o endereço específico daquele periférico
* Comunicação com o dispositivo: o módulo deve ser capaz de se comunicar com o dispositivo conectado a ele
* Armazenar temporariamente dados (*buffering*): o módulo deve ser capaz de armazenar temporariamente dados para lidar
  com diferentes taxas de transferência de *bits*
* Detecção de erros: o módulo de E/S normalmente é responsável por relatar erros ao processador, como erros mecânicos,
  papel emperrado, etc.

## Técnicas de operações de E/S

Existem três técnicas de operações de E/S: programada, controlada por interrupção e acesso direto à memória.

### E/S programada

Quando o processador está executando um programa e encontra uma instrução de E/S, ele executa essa instrução emitindo
um comando ao módulo de E/S correspondente. Com a E/S programada, o módulo irá realizar a ação e só depois definirá o
sinal de estado indicando a conclusão. O módulo de E/S não toma nenhuma ação para notificar o processador, isto é, ele
não interrompe o processador. Nessa técnica, é responsabilidade do processador verificar periodicamente o estado do
módulo de E/S até descobrir se a operação terminou.

Para esta técnica, o processador pode executar os seguintes comandos:

* Controle: ativa um periférico e diz a ele o comando a fazer. Esses comandos são ajustados conforme o tipo de
  periférico
* Teste: checa o estado atual do dispositivo, por exemplo, se ele está pronto pra uso, se houve algum erro, se o
  comando foi concluído, etc
* Leitura: faz com que o módulo de E/S obtenha um bloco de dados do periférico e coloque em um *buffer* interno
* Escrita: faz com que o módulo de E/S pegue um bloco de dados do barramento e transmita ele para o periférico

A maior limitação da E/S programada é que o processador tem que esperar para que o módulo de E/S de interesse esteja
pronto para a transferência de dados. O processador precisa interrogar repetidamente o estado do módulo enquanto espera.
Como resultado, há uma perca de desempenho do sistema.

### E/S controlada por interrupção

Uma alternativa para a E/S programada é que o processador emita o comando para o módulo e continue realizando algum
outro trabalho útil, sem necessidade de ficar checando o estado do dispositivo. O módulo de E/S então irá interromper o
processador para dar o retorno da operação quando estiver pronto. O processador então executa a transferência de dados
e retorna para o seu processamento anterior.

Do ponto de vista do módulo de E/S, ele recebe o comando do processador, prossegue para ler os dados, e quando os dados
estão prontos para serem lidos ou escritos, o módulo envia um sinal de interrupção ao processador através do sinal de
controle. O módulo espera que os dados sejam transmitidos pelo processador e após isso ele está pronto para outra
operação de E/S.

Do ponto de vista do processador, após a emissão do comando, ele prossegue com outras tarefas, de outros programas
abertos. Ao final de cada ciclo, o processador verifica se há interrupções. Quando ocorre alguma interrupção do módulo
de E/S, o processador suspende a execução que ele estava fazendo, processa a interrupção, e então restaura o trabalho
no programa suspenso.

Como desvantagem, a E/S controlada por interrupção ainda requer a intervenção ativa do processador para transferir dados
entre a memória e um módulo de E/S, e quaisquer transferências de dados ainda precisam passar sempre pelo processador.
Assim, tanto a E/S controlada por interrupção quanto a E/S programada possuem taxas de transferência limitadas pela
velocidade com a qual o processador pode atender a um dispositivo, além de precisar ocupar o processador para realizar
diversas instruções para cada transferência de E/S.

### Acesso direto à memória (DMA)

Quando grandes volumes de dados precisam ser movidos por um módulo de E/S, uma técnica mais eficiente é necessária:
acesso direto à memória (DMA).

A técnica de DMA envolve um módulo adicional no barramento do sistema: o módulo de DMA. Ele é capaz de imitar o
processador e assumir o controle do sistema do processador quando necessário. Ele precisa fazer isso para transferir
dados da memória para o barramento e vice-versa. Dessa forma, as operações de E/S são delegadas ao módulo de DMA,
livrando o processador para continuar com outros trabalhos. Quando a transferência termina, o módulo de DMA envia uma
interrupção para o processador, similar à E/S controlada por interrupção, e dessa forma o processador é envolvido apenas
no início e no final de uma transferência de dados de E/S.

Para realizar essa transferência de dados pelo barramento, o módulo de DMA precisa utilizá-lo apenas quando o
processador não precisar dele, ou então o módulo de DMA precisa forçar o processador a suspender as comunicações com o
barramento temporariamente. Essa última técnica é a mais comum, e é conhecida como roubo de ciclo (*cycle stealing*).
