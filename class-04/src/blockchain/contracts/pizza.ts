import Contract from './contract';
import PizzaArtifact from '../Pizza.json'

class Pizza extends Contract {
    constructor(options, address){
        super(options, 'Pizza', PizzaArtifact.abi, address);
    }
}

export default Pizza;