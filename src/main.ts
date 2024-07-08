import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import Crypto from './crypto';

dotenv.config();

async function main() {
  const filename = process.env.FILENAME;

  if (!filename) {
    console.error('Filename is not defined in the environment variables');
    process.exit(1);
  }

  if (!filename.endsWith('.xbel'))
  {
    console.error('Filename should end with .xbel');
    process.exit(1);
  }

  const inputFilePath = path.join(__dirname, '../data/input', filename);
  if (!fs.existsSync(inputFilePath)) {
    console.error('Input file does not exist:', inputFilePath);
    process.exit(1);
  }

  const encryptedMessage = fs.readFileSync(inputFilePath, 'utf8');
  const passphrase = process.env.PASSPHRASE;
  
  // Decrypt the message if a passphrase is provided
  const decryptedMessage = passphrase 
      ? await Crypto.decryptAES(
          passphrase, // key
          encryptedMessage, // payload
          filename  // salt
        )
      : encryptedMessage;

  console.log('Decrypted Message:', decryptedMessage);

  const outputFilePath = path.join(__dirname, '../data/output', `decrypted-${filename}`);
  fs.writeFileSync(outputFilePath, decryptedMessage, 'utf8');
  console.log(`Decrypted content written to ${outputFilePath}`);
}

main().catch(err => {
  console.error('An error ocurred:', err);
  process.exit(1);
});