// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Usdt is ERC20, Ownable {
    constructor(address)
        ERC20("usdt", "USDT")
    {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}