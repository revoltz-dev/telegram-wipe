const { TelegramClient } = require("telegram");
const { StringSession } = require("telegram/sessions");
const input = require("input");

const api_id = 123456789;
const api_hash = "SEU_API_HASH";

const string_session = new StringSession("");

async function delete_all_messages(client, chat_id) {
    console.log(`\nIniciando deleção de TODAS as mensagens: ${chat_id}`);

    let total_deleted = 0;
    let offset_id = 0;

    while (true) {
        const messages = await client.getMessages(chat_id, {
            limit: 100,
            offsetId: offset_id
        });

        if (!messages || messages.length === 0) {
            console.log("Não há mais mensagens para deletar.");
            break;
        }

        const ids = messages.map(m => m.id);
        offset_id = Math.min(...ids);

        try {
            await client.deleteMessages(chat_id, ids, { revoke: true });
            total_deleted += ids.length;
            console.log(`${total_deleted} mensagens deletadas...`);
        } catch (err) {
            console.log(`Erro ao deletar lote: ${err.message}`);
            for (const id of ids) {
                try {
                    await client.deleteMessages(chat_id, [id], { revoke: true });
                    total_deleted++;
                } catch (e) { }
            }
        }

        await new Promise(r => setTimeout(r, 500));
    }

    console.log(`\n=== CONCLUÍDO: ${total_deleted} mensagens deletadas ===`);
}

(async () => {
    console.log("===========================================");
    console.log("       USERBOT - DELETAR TUDO");
    console.log("===========================================\n");

    const client = new TelegramClient(string_session, api_id, api_hash, {
        connectionRetries: 5,
    });

    await client.start({
        phoneNumber: async () => await input.text("Digite seu número de telefone (com DDI, ex: +5511999999999): "),
        password: async () => await input.text("Digite sua senha 2FA (se tiver, senão deixe vazio): "),
        phoneCode: async () => await input.text("Digite o código que você recebeu no Telegram: "),
        onError: (err) => console.log(err),
    });

    console.log("\nLogin realizado com sucesso!");
    console.log("Sua sessão (salve para não precisar logar novamente):");
    console.log(client.session.save());
    console.log("\n");

    const chat_input = await input.text("Digite o ID do canal (ex: -1001234567890) ou @username: ");

    const confirm = await input.text(`Você tem CERTEZA que deseja apagar TODAS as mensagens de "${chat_input}"? (sim/nao): `);

    if (confirm.toLowerCase() !== "sim") {
        console.log("Operação cancelada.");
        await client.disconnect();
        return;
    }

    await delete_all_messages(client, chat_input);

    await client.disconnect();
    console.log("\nBot desconectado.");
})();
