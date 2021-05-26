#!/usr/bin/env node
import evenNotEven from '../src/even-not-even.js';
import { welcomeUser, userName } from '../src/cli.js';

console.log(welcomeUser());
console.log(evenNotEven(userName));
