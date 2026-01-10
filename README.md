# Telegram Wipe

Userbot para deletar **todas as mensagens** de canais, grupos ou chats privados no Telegram.

## 📋 O que ele pode apagar

| Tipo | Funciona? | Requisito |
|------|-----------|-----------|
| **Canais** | ✅ Sim | Ser admin/dono |
| **Grupos/Supergrupos** | ✅ Sim | Ser admin com permissão de deletar |
| **Chats privados** | ⚠️ Parcial | Só deleta suas próprias mensagens |

## 🔧 Requisitos

- [Node.js](https://nodejs.org/) instalado
- Credenciais da API do Telegram (`api_id` e `api_hash`)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/revoltz-dev/telegram-wipe.git
cd telegram-wipe

# Instale as dependências
npm install
```

## ⚙️ Configuração

### 1. Obter credenciais da API

1. Acesse [my.telegram.org](https://my.telegram.org)
2. Faça login com seu número de telefone
3. Vá em **API development tools**
4. Crie um novo aplicativo (ou use um existente)
5. Copie o `api_id` e `api_hash`

### 2. Configurar o script

Abra o arquivo `userbot.js` e substitua as credenciais:

```javascript
const api_id = 123456789;           // Número inteiro
const api_hash = "SEU_API_HASH";     // String
```

## 🚀 Como Usar

```bash
node userbot.js
```

O script irá:

1. Pedir seu **número de telefone** (com DDI, ex: `+5511999999999`)
2. Pedir o **código de verificação** enviado pelo Telegram
3. Pedir a **senha 2FA** (se você tiver configurada)
4. Perguntar o **ID ou @username** do chat que deseja limpar
5. Pedir **confirmação** antes de deletar

## 🔍 Como descobrir o ID de um chat

- Adicione o bot [@userinfobot](https://t.me/userinfobot) ou [@getidsbot](https://t.me/getidsbot) ao chat
- Ou encaminhe uma mensagem do chat para um desses bots
- IDs de canais/grupos começam com `-100` (ex: `-1001234567890`)
- Você também pode usar o `@username` do canal

## 📝 Exemplo de uso

```
===========================================
       USERBOT - DELETAR TUDO
===========================================

? Digite seu número de telefone: +5511999999999
? Digite o código recebido: 12345
? Digite o ID do canal: -1001234567890
? Confirma deletar TODAS as mensagens? (sim/nao): sim

100 mensagens deletadas...
200 mensagens deletadas...
...
=== CONCLUÍDO: 1080 mensagens deletadas ===
```

## 🛡️ Segurança

- **Nunca compartilhe** seu `api_id`, `api_hash` ou string de sessão
- O script não armazena suas credenciais em nenhum servidor externo
- Todo o processamento é feito localmente

## 📄 Licença

MIT License
