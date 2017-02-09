# Punctuation Drop

Drops all of the punctuation from the end of a string using regular expressions.

- To install `yarn install` or `npm install`
- To run the tests `npm test`

## How It Works

Right now, I'm only stripping of `.`, `!`, and `?` using `//[\.\!\?]+$//`.

If I wanted to be more more thorough, I could use `/\p{Punct}+$/`, which would also strip all of the following:

```
[!"\#$%&'()*+, \-./:;<=>?@\[ \\\]^_`{|}~]
````
