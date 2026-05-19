export default class Produto {
    nome = "Pao";
    preco = 2.5;
    estoque = 4;
    
    constructor(dados) {
    const prod = {};
    const propriedades = dados.split('|');
    
    propriedades.forEach(propriedade => {
    const valores = propriedade.split(':');
    prod[valores[0].trim()] = valores[1].trim();
    });
    
    this.nome = prod.nome;
    this.preco = Number.parseFloat(prod.preco);
    this.estoque = Number.parseInt(prod.estoque);
    }
    }