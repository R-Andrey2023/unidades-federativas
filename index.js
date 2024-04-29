import express from 'express';
import colecaoUf from './dados.js';
import buscarUf from './servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    let uf = req.query.busca;
    let resultado = uf ? buscarUf(uf, colecaoUf): colecaoUf;
    if(resultado.length > 0){
      res.json(resultado)
    }
    else{
        res.status(404).send({servidor_diz: 'resultado não encontrado'})
    }
})

app.get('/ufs/:ufId', (req, res) => {
    const ufId = parseInt(req.params.ufId);
    let uf;
    let mensagemErro;
    if(!(isNaN(ufId))){
       uf = colecaoUf.find((item) => item.id === ufId)

       if(!uf){
        mensagemErro = "UF não encontrada!"
       }
    }
    else {
        mensagemErro = "Requisição inválida!"
    }




    if(uf){
       res.json(uf);
    }
    else{
        res.status(404).send({servidor_diz: mensagemErro})
    }
})

app.listen(8080, () => {
    console.log("Servidor iniciado")
})