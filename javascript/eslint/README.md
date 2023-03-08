# Switchboard Eslint Config

## Install

```bash
npm i --save-dev @switchboard-xyz/eslint-config gts
```

Create `.eslintrc.json`

```json
{
  "extends": "@switchboard-xyz"
}
```

## Usage

Add the following script to your `package.json`

```json
{
  "lint": "gts lint ./src",
  "fix": "gts fix ./src",
  "clean": "gts clean"
}
```
