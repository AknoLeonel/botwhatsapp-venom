const database = require('../db');

module.exports = {
    exec({ user, message }) {
        database[user].stage = 1;
        return ('👋 Olá, como vai? \n\nEu sou Carlos, o *assistente virtual* da Delícias da Neide. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n2️⃣ - ```VERIFICAR TAXA DE ENTREGA```\n0️⃣ - ```FALAR COM ATENDENTE```');
    }
}
