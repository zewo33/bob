// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Zbtc is ERC20, Ownable {
    constructor(address initialOwner)
        ERC20("zbtc", "ZBTC")
        Ownable(initialOwner)
    {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}