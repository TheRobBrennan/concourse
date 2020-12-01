This is a starter template for [Learn Next.js](https://nextjs.org/learn).

To add [TypeScript](https://www.typescriptlang.org) support to your [Next.js](https://nextjs.org) app:

```sh
# Create an empty TypeScript configuration file (within the apps/nextjs-blog/app directory in this example)
$ touch tsconfig.json

# Restart your development server and you should see a warning like:
# It looks like you're trying to use TypeScript but do not have the required package(s) installed.

# Install TypeScript
$ npm install --save-dev typescript @types/react @types/node

# Restart your development server
# Next.js will populate the tsconfig.json file for and create next-env.d.ts to ensure Next.js types are picked up by the TypeScript compiler
```
