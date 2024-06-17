import { app } from "./app";

const port: number = 3000

app.listen({
    port: 3000
}, (erro: Error | null, address: string)=>{
    if (erro) {
        app.log.error(erro)
        process.exit(1)
      }
    console.log(`HTTP Server Running in ${address} !`)
})