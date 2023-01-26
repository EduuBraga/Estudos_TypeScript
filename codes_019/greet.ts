export const messageGreet: string = `Olá, este arquivo foi importado!`

export const greetingImported = (): void => {
  console.log(messageGreet)
}

export const greetingImportedAdv = (name: string): void => {
  console.log(`Olá ${name}, seja bem-vindo!`)
}