## comands

```
npm i prisma -D
npm i @prisma/client
npx prisma init
npm i bcryptjs
npm i @types/bcryptjs -D
npm i zod
npm i zod-validation-error
npm i @nestjs/config
```

## Migrates prisma

```
npm run start:dev
npx prisma migrate dev

```

## On Linux Generate

```
Install OpenSSL (if not already installed):
bash

- sudo apt update
- sudo apt install openssl

Generate the RSA Private Key:
bash
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048

Generate the RSA Public Key:
bash
- openssl rsa -pubout -in private_key.pem -out public_key.pem
```

## On Windows Generate

```
Install OpenSSL:
You can download a precompiled version of OpenSSL for Windows from Shining Light Productions or other sources.

Open Command Prompt and navigate to the directory where OpenSSL is installed.
Generate the RSA Private Key:
cmd
openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048

Generate the RSA Public Key:
cmd
- openssl rsa -pubout -in private_key.pem -out public_key.pem
```

## On Linux convert

```
You can use the base64 command directly in the terminal. Here’s the syntax:
bash

- base64 input_file > output_file.b64

input_file: The file you want to convert.
output_file.b64: The file where the Base64 output will be saved.

Example
Linux

bash

- base64 example.txt > example.b64
```

## On Windows convert

```
You can use the certutil command in Command Prompt. Here’s the syntax:
cmd
certutil -encode input_file output_file.b64

input_file: The file you want to convert.
- output_file.b64: The file where the Base64 output will be saved.

Example
Windows cmd

- certutil -encode example.txt example.b64

This will create a Base64 encoded version of example.txt in example.b64 for both systems.
```
