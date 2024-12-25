import { CharStream, CommonTokenStream, ParseTreeWalker }  from 'antlr4';

import Scriptoslav80Lexer from './antlr4-generated/Scriptoslav80Lexer'
import Scriptoslav80Parser from './antlr4-generated/Scriptoslav80Parser'

import {Scriptoslav80Interpreter} from "./antlr4-generated/interpreter";
import {Scriptoslav80Compiler} from "./antlr4-generated/compiler";

// const input = `
//
//   let i = 0;
//
//   while (i < (5 * 2)) {
//     i = i + 1;
//   }
//
// `

// const input = `
//
//   let i = 0;
//
//   if (i == 0) {
//     i = 1;
//   } else {
//     i = 5;
//   }
//
// `

const input = `

  let i = 1;
  let b = 2;
  let c = 3;
  
  if (i < b) {
    i = i + 2;
  } else {
    b = b + 2;
  }

  monitor.log(i);
  monitor.log(b);
`

const chars = new CharStream(input); // replace this with a FileStream as required

const lexer = new Scriptoslav80Lexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new Scriptoslav80Parser(tokens);

const tree = parser.program();

// const walker = new Scriptoslav80Interpreter();
const walker = new Scriptoslav80Compiler();

ParseTreeWalker.DEFAULT.walk(walker, tree);

console.log('\n-- done --')
