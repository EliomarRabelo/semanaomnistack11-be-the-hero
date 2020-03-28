const crypto = require('crypto');
const connection = require('../database/conection');

module.exports = {

    async index(request,response){
        const ongs = await connection('ongs').select('*');

    return response.json(ongs);
    },



    async create(request,response){
            const {name, email, whatsapp, city, uf} = request.body;//dados da requisição
            const id = crypto.randomBytes(4).toString('HEX');//gera 4bytes hexadecimais, assim gerando um id para a 'ong'
        
           await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
        
            return response.json({id});//só poderá efetuar o retorno
                                    //qnt a inserção for efetuada
            
    }
}