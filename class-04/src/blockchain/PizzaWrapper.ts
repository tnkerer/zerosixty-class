import Web3 from 'web3';
import Pizza from './contracts/pizza';
import { pizzaAddress } from './constants';

export default class PizzaWrapper {
    web3: Web3;
    chainId: number;
    account: string | null;
    pizza: Pizza;

    constructor(web3: Web3, chainId: number, account: string | null) {
        this.web3 = web3;
        this.chainId = chainId;
        this.account = account;
        this.pizza = new Pizza({ web3, chainId, account }, pizzaAddress.Contract[chainId]);
      }

      async getSlices() : Promise<unknown> {
        try {
            const slices = await this.pizza.call('slices')
            return slices;
        } catch (error) {
            throw error;
        }
      }

      async eatSlice() : Promise<unknown> {
        try {
            const result = await this.pizza.send('eatSlice', { from: this.account })
            return result
        } catch (error) {
            throw error;
        }
      }
}

