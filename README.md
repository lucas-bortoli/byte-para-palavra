# Byte Para Palavra

Imagine soletrar um endereço IPv6, ou uma hash SHA-256 por telefone. O objetivo desse programa é criar um conjunto de 256 palavras fáceis de falar, entender e escrever, de forma que cada byte seja representado por uma palavra.

1. Leitura do dicionário da língua portuguesa `dicionario-portugues.txt`;
2. Remover palavras com mais ou menos de 7 letras;
3. Remover palavras com acentos;
4. Remover palavras com as letras `zxgjhsi`;
5. Remover morfemas: `oe` e `ara`.

Das palavras que restam, 256 aleatórias são escolhidas. As palavras são escritas no arquivo `output.txt`.

## Execução

O programa deverá ser executado com Deno:

```sh
deno run --allow-read --allow-write dicmak.ts
```