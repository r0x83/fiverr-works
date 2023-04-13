// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EasterEgg is ERC20, Ownable {
    constructor() ERC20("Easter Egg", "EGG") {
        _mint(msg.sender, 500000000000000 * 18 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
