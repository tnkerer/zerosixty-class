// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Pizza {
    uint256 public PIZZA_SIZE;
    uint256 public slices;
    
    constructor(uint _pizzaSize) {
        PIZZA_SIZE = _pizzaSize;
        slices = PIZZA_SIZE;
    }

    function eatSlice() public {
        require(slices > 0, "Nenhuma Fatia disponivel. Vamos fazer outra Pizza.");
        slices -= 1;
    }

    function bakeNewPizza() public {
        require(slices == 0, "A Pizza anterior ainda nao acabou!");
        slices += PIZZA_SIZE;
    }
}


