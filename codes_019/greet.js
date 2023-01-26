"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetingImportedAdv = exports.greetingImported = exports.messageGreet = void 0;
exports.messageGreet = `Olá, este arquivo foi importado!`;
const greetingImported = () => {
    console.log(exports.messageGreet);
};
exports.greetingImported = greetingImported;
const greetingImportedAdv = (name) => {
    console.log(`Olá ${name}, seja bem-vindo!`);
};
exports.greetingImportedAdv = greetingImportedAdv;
