module.exports = {
  // Run type-check on changes to TypeScript files - note that we do not pass staged files here because TypeScript cannot be run on isolated files
  '**/*.ts?(x)': () => 'npm run type-check',
  // Run ESLint on changes to JavaScript/TypeScript files - note that we DO pass staged files here because ESLint can run against isolated files
  '**/*.(ts|js)?(x)': (filenames) => `npm run lint ${filenames.join(' ')}`,
}