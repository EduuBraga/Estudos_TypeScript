"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// - Importando e exportação
const greet_js_1 = require("./greet.js");
(0, greet_js_1.greetingImported)();
console.log(greet_js_1.messageGreet);
(0, greet_js_1.greetingImportedAdv)('dudu');
// - Alias
const i_js_1 = require("./i.js");
console.log(i_js_1.myName);
// - Import all
const myCharacter = __importStar(require("./i.js"));
console.log(myCharacter);
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new User('joãozinho', 13);
console.log(joao);
