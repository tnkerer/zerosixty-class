import Contract from './contract';
import PizzaData from './Pizza.json';

class Pizza extends Contract {
    constructor(options, address){
        super(options, 'Pizza', PizzaData.abi, address);
    }
}

export default Pizza;