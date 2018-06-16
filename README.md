# tslint-no-unused

A [TSLint](https://palantir.github.io/tslint) rule to make unused locals and properties lint errors.

This rule essentially acts like TypeScript's `noUnusedLocals` and `noUnusedProperties` combined, except that by using TSLint
the actual compilation is not affected.

`no-unused` is a replacement for TSLint's deprecated builtin `no-unused-variable` rule, but also works with
[tslint-language-service](https://github.com/angelozerr/tslint-language-service).

This rule uses TypeScript 2.9's new unused diagnostics, so TS 2.9 or newer is required.

## Usage

Add `tslint-no-unused` to your project's dev dependencies and add the following to your `tslint.json`:

```json
{
  "extends": ["tslint-no-unused"],
  "rules": {
    "no-unused": true
  }
}
```
