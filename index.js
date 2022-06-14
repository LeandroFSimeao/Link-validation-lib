// import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
      arrayResultados.push({ [temp[1]]: temp[2] })
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
  }

function trataErro(erro) {
    throw new Error(erro);
}

////código assíncrono com assync/await

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return (extraiLinks(texto));
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log('operação concluída');
    }
}

//código assíncrono com then

/*function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => chalk.green(console.log(texto)))
    .catch((erro) => trataErro(erro))
}*/

//Código síncrono

/*function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto));
    })
}*/

export default pegaArquivo;