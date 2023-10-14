import { VenomBot } from '../venom.js'
import { storage } from '../storage.js'
import { STAGES } from './index.js'

export const stageThree = {
  async exec({ from, message }) {
    storage[from].address = message
    storage[from].stage = STAGES.PEDIDO

    let msg = 'Sessão *CANCELADA* com sucesso. \n Volte Sempre!'
    if (message === '*') {
      storage[from].stage = STAGES.INICIAL
    } else {
      const itens = storage[from].itens
      const desserts = itens.map((item) => item.description).join(', ')

      const total = storage[from].itens.length

      msg =
        `🗒️ *Em andamento*: \n\n🧁 Informações: *${desserts}* \n🚚 Plano: *a confirmar*. \n📍 Endereço: *${message}* \n💰 Valor : *${
          total * 6
        },00 reais*. \n⏳ Tempo de espera: *10 minutos*. \n\n` +
        '🔊 ```Agora, informe a forma de pagamento, por gentileza.```'
    }

    await VenomBot.getInstance().sendText({ to: from, message: msg })

    // return '✅ *Prontinho, plano confirmado!* \n\nAgora, se você ainda não terminou sua sessão *. \n\n⏳ *Aguarde um instante*.'
  },
}
