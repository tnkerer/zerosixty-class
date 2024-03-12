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

Criamos um arquivo `.env` para armazenar as variáveis locais do nosso projeto.

```bash
touch .env
```

Esse arquivo deve conter duas variáveis:

```bash
PRIVATE_KEY=
RPC_URL=
```

Uma forma fácil de se conseguir uma chave privada `PRIVATE_KEY` é importando de uma carteira web3, a recomendação mais prática é a [metamask.io](https://metamask.io/).

Um provedor de `RPC_URL` bem prático é o [blastapi.io](https://blastapi.io/).

Não podemos nos esquecer de adicionar a biblioteca `dotenv` ao nosso projeto:

```bash
npm i dotenv
```

Por fim, as nossas variáveis locais devem se parecer com algo da seguinte forma:

```bash
PRIVATE_KEY=874b9960f51ee07870d8b3e27b4ab378b548aea28ae04dce8ba4bca50befd065
RPC_URL=https://eth-sepolia.blastapi.io/59e7464f-491b-4bc3-af57-7708c6c846a1
```

E por fim configuramos nosso arquivo `hardhat.config.js` com as nossas novas variáveis locais para a rede `sepolia`:

```js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    }
  }
};
```

### Contrato PIZZA!

Durante a aula 2, programamos juntos os seguintes arquivos:

`contracts/Pizza.sol`<br>
`scripts/deploy.js`<br>

São, na ordem, o contrato onde podemos comer pedaços da nossa pizza criptográfica na blockchain, e assim que ela acaba, podemos cozinhar uma nova pizza totalmente nova! 🍕😋 E o script que faz a implantação do código fonte do nosso contrato na blockchain.

Para compilar o `Bytecode` desse contrato, vamos executar o comando:

```bash
npx hardhat compile
```

E com o contrato compilado com sucesso, podemos proseguir com a implantação na blockchain:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

O contrato implantado nessa aula está disponível no link:

https://sepolia.etherscan.io/address/0x49065fd669cc1ca3339f46210743839fa407fee5