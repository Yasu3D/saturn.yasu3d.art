# Adding Locales

SATURN is designed with a fully localizable UI, but currently does not offer a way to **select** locales.

## File Structure

Any `.toml` file in `./Locales/` will be recognized as a `locale`.  
Locale files should be named after the [locale code of the language](https://gist.github.com/typpo/b2b828a35e683b9bf8db91b5404f1bd1).

```FILE TREE
.
└── StreamingAssets/
    └── Locales/
        └── en-US.toml
```