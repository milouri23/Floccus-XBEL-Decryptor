
# XBEL Decryptor

This project is a Node.js console application designed to decrypt an encrypted `.xbel` file that was encrypted using the Floccus bookmark sync browser extension. The decryption logic used in this project is exactly the same as the one used in the Floccus extension, ensuring compatibility and correctness.

## Features

- **Decrypt Floccus-Encypted Files**: Specifically designed to decrypt `.xbel` files encrypted by the Floccus bookmark sync extension using the same decryption logic.
- **Environment Variable Configuration**: Configures the filename and passphrase securely using environment variables.
- **File Management**: Separates input and output files into respective directories to avoid confusion.
- **Error Handling**: Comprehensive error handling to manage issues such as missing files, incorrect file extensions, and undefined environment variables.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/xbel-decryptor.git
   cd xbel-decryptor
   ```

2. **Install Dependencies**:
   ```sh
   npm install
   ```

3. **Create a `.env` File**:
   Create a `.env` file in the root of your project directory and add the following variables:
   ```env
   FILENAME=bookmarks.xbel
   PASSPHRASE=your_passphrase_here
   ```

4. **Place Your Encrypted File**:
   Place the encrypted `.xbel` file in the `data/input` directory.

## Usage

1. **Compile the TypeScript Code**:
   ```sh
   npx tsc
   ```

2. **Run the Application**:
   ```sh
   npm start
   ```

   This will decrypt the specified `.xbel` file and write the decrypted content to a new file in the `data/output` directory with a `decrypted-` prefix.

## Project Structure

```
/your-project
  ├── src
  │   ├── crypto.ts
  │   └── main.ts
  ├── data
  │   ├── input
  │   │   └── bookmarks.xbel
  │   └── output
  │       └── decrypted-bookmarks.xbel
  ├── dist
  ├── node_modules
  ├── .env
  ├── .gitignore
  ├── package.json
  ├── package-lock.json
  └── tsconfig.json
```

## Environment Variables

- `FILENAME`: The name of the encrypted `.xbel` file located in the `data/input` directory. This is also used as the salt for decryption.
- `PASSPHRASE`: The passphrase used to decrypt the file. If not provided, the file content will be treated as plain text.

## Error Handling

- **Filename Not Defined**: Checks if the `FILENAME` environment variable is defined.
- **Incorrect File Extension**: Ensures the file has a `.xbel` extension.
- **File Existence**: Verifies that the input file exists.
- **Decryption Errors**: Catches and logs any errors that occur during the decryption process.

## Contributing

1. **Fork the Repository**: 
   Click the "Fork" button at the top right of this page.
2. **Clone Your Fork**: 
   ```sh
   git clone https://github.com/your-username/xbel-decryptor.git
   cd xbel-decryptor
   ```
3. **Create a Feature Branch**: 
   ```sh
   git checkout -b feature/your-feature-name
   ```
4. **Commit Your Changes**: 
   ```sh
   git commit -m 'Add some feature'
   ```
5. **Push to the Branch**: 
   ```sh
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**: 
   Submit your pull request.

## License

This project is licensed under the Mozilla Public License 2.0. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project relies on the [Floccus](https://github.com/floccusaddon/floccus) project for the encryption and decryption logic, specifically designed to decrypt files encrypted using the Floccus bookmark sync browser extension.
