// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Zbtc is ERC20, Ownable {
    constructor(address)
        ERC20("zbtc", "ZBTC")
    {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}