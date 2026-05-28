# Telegram Wipe

A userbot for deleting **all messages** from Telegram channels, groups, or private chats.

## 📋 What it can delete

| Type | Works? | Requirement |
|------|--------|-------------|
| **Channels** | ✅ Yes | Be admin/owner |
| **Groups/Supergroups** | ✅ Yes | Be admin with delete permission |
| **Private chats** | ⚠️ Partial | Only deletes your own messages |

## 🔧 Requirements

- [Node.js](https://nodejs.org/) installed
- Telegram API credentials (`api_id` and `api_hash`)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/revoltz-dev/telegram-wipe.git
cd telegram-wipe

# Install dependencies
npm install
```

## ⚙️ Configuration

### 1. Get your API credentials

1. Go to [my.telegram.org](https://my.telegram.org)
2. Log in with your phone number
3. Open **API development tools**
4. Create a new application (or use an existing one)
5. Copy the `api_id` and `api_hash`

### 2. Configure the script

Open `userbot.js` and replace the credentials:

```javascript
const api_id = 123456789;           // Integer
const api_hash = "YOUR_API_HASH";    // String
```

## 🚀 How to use

```bash
node userbot.js
```

The script will:

1. Ask for your **phone number** (with country code, e.g., `+5511999999999`)
2. Ask for the **verification code** sent by Telegram
3. Ask for your **2FA password** (if you have one set up)
4. Ask for the **chat ID or @username** you want to wipe
5. Ask for **confirmation** before deleting

## 🔍 How to find a chat ID

- Add [@userinfobot](https://t.me/userinfobot) or [@getidsbot](https://t.me/getidsbot) to the chat
- Or forward a message from the chat to one of those bots
- Channel/group IDs start with `-100` (e.g., `-1001234567890`)
- You can also use the channel's `@username`

## 📝 Usage example

```
===========================================
       USERBOT - DELETE EVERYTHING
===========================================

? Enter your phone number: +5511999999999
? Enter the code you received: 12345
? Enter the channel ID: -1001234567890
? Confirm deleting ALL messages? (yes/no): yes

100 messages deleted...
200 messages deleted...
...
=== DONE: 1080 messages deleted ===
```

## 🛡️ Security

- **Never share** your `api_id`, `api_hash`, or session string
- The script does not store your credentials on any external server
- All processing is done locally

## 📄 License

MIT License
