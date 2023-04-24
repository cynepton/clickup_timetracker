### Eslint

Run:

```
npm install eslint --save-dev
```
to install eslint. Then run:

```
npx eslint --init
```
to setup eslint. Then run:

```
npm install eslint-plugin-import eslint-import-resolver-typescript --save-dev
```
to add additiona typescript support to eslint. Then add this in the root json object:

```json
"settings": {
    "import/resolver": {
        "typescript": {}
    }
}
```
in the `eslintrc.json` file.

### Prettier

Run:
```
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

Create a `.prettierrc` file with this content:

```json
{
    "printWidth": 80,
    "tabWidth": 4,
    "singleQuote": true,
    "semi": true,
    "trailingComma": "all"
}
```
Then in the `extends` and the `plugins` arrays in the root object in the `.eslintrc` file, add the `prettier` plugin to the array.