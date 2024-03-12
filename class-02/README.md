# Pizza! Um projeto exemplo de como começar programando em Solidity

Para o desenvolvimento e implantação dos nossos contratos, nós vamos usar o `hardhat`. Para proseguir, precisamos ter certeza que o `hardhat` está instalado me nosso sistema. Um dos requerimentos para instalar o `hardhat` é também ter uma versão de `nodejs` maior que v18 instalada.

Para iniciar um novo contrato inteligente, executamos o comando:


```bash
npx hardhat
```

Algumas opções vão aparecer, a primeira pergunta é `O que você quer fazer?` vamos iniciar com um projeto em `Javascript`

```
? What do you want to do? … 
▸ Create a JavaScript project
  Create a TypeScript project
  Create a TypeScript project (with Viem)
  Create an empty hardhat.config.js
  Quit
```

Em seguida, escolhemos o `root` do nosso projeto, nesse caso vamos usar o próprio diretório onde estamos trabalhando pressionando `ENTER`.

```
✔ What do you want to do? · Create a JavaScript project
? Hardhat project root: ‣ /home/menezes/zerosixty-class/class-02
```

Optamos por `SIM` para adicionar um `.gitignore`:

```
✔ What do you want to do? · Create a JavaScript project
✔ Hardhat project root: · /home/menezes/zerosixty-class/class-02
? Do you want to add a .gitignore? (Y/n) ‣ y
```

Por fim, também instalados o pacote `@nomicfoundation/hardhat-toolbox`:

```
✔ What do you want to do? · Create a JavaScript project
✔ Hardhat project root: · /home/menezes/zerosixty-class/class-02
✔ Do you want to add a .gitignore? (Y/n) · y
? Do you want to install this sample project's dependencies with npm (hardhat @nomicfoundation/hardhat-toolbox)? (Y/n) ‣ y
```

Nosso projeto vai ser inicializado. Código de exemplo será criado nos diretórios `contracts`, `scripts` e `test`. O contrato de exemplo é um bom ponto de partida para começar a entender como um contrato inteligente funciona, porém, no nosso caso vamos deletar os arquivos:

`contracts/Lock.sol`<br>
`scripts/deploy.js`<br>
`test/Lock.js`<br>

