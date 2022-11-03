# Git Hashes Action
This action stores the long and short form of the commit hash in the environment variables

## Inputs

### `long-form`

**Optional** If the long form of the hash should be stored. Defaults to `true`.

### `short-form`

**Optional** If the short form of the hash (first 7 characters) should be stored. Defaults to `true`.


# How to build?

1. Install `@vercel/ncc` with npm global, for now it doesn't support `yarn dlx`, you can follow the status here: [#998](https://github.com/vercel/ncc/issues/998)
2. Run `ncc build index.js --license LICENSE`
3. Push your changes!
