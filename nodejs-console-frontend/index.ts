import { CharStream, CommonTokenStream, ParseTreeWalker }  from 'antlr4';

import Scriptoslav80Lexer from './antlr4-generated/Scriptoslav80Lexer'
import Scriptoslav80Parser from './antlr4-generated/Scriptoslav80Parser'

import {Scriptoslav80Interpreter} from "./antlr4-generated/visitor";

const input = `

  let i = 0;
  while (i != 5) {
    monitor.log(i);
    i = i + 1;
  }
  
  monitor.log(123);
`

const chars = new CharStream(input); // replace this with a FileStream as required

const lexer = new Scriptoslav80Lexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new Scriptoslav80Parser(tokens);

const tree = parser.program();

const walker = new Scriptoslav80Interpreter();
ParseTreeWalker.DEFAULT.walk(walker, tree);

console.log('\n-- done --')
