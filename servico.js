export default function buscarUf(nomeUF, arrayUf){
    return arrayUf.filter((unid) => unid.nome.toLowerCase().includes(nomeUF.toLowerCase()))
}