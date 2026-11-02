# JavaScript Keywords

Using this example file:

`Chapter_10_Arrays/73_Arrays.transform.js`

```js
let scores=[45,89,90,67,75];
let grades=scores.map(s=> s >70?"pass":"fail");
console.log(grades);
let passingscores=scores.filter(s=> s>70);
console.log(passingscores);
```

Out of every token on those lines, only one is a **keyword**: `let`. Words like `scores`, `console`, `map`, and `filter` look important but are just **identifiers** (names you or the library chose). That distinction is the whole point of this note.

## 1) Breakdown Table: The Three Token Kinds

| Aspect | Reserved (Hard) Keyword | Contextual (Soft) Keyword | Identifier (not a keyword) |
|---|---|---|---|
| What it is | A word the language permanently reserves; it can never be a variable name | A word that is reserved only in specific grammar positions; elsewhere it is a normal name | Any name the developer or library invents |
| In our example | `let` | *(none present)* | `scores`, `grades`, `s`, `console`, `log`, `map`, `filter`, `passingscores` |
| Can it name a variable? | No — `let let = 1;` is a syntax error | Sometimes — e.g. `let of = 1;` works, `for (x of y)` does not | Yes — that is its only job |
| Can it be a property name? | Yes — `obj.class`, `obj.new` are legal | Yes | Yes — `obj.scores` |
| Enforced by | The lexer/tokenizer, always | The parser, only in a matching context | Nowhere — free choice |
| Count in JavaScript | 38 fixed words | ~8 context-dependent words | Effectively unlimited |
| If you mistype it | Syntax error, caught before running | Usually a syntax error only in that context | A silent `undefined` / `ReferenceError` at runtime |

## 2) Mapping Table: The Same Example Across Stages

The line `let grades=scores.map(s=> s >70?"pass":"fail");` moves through these stages.

| Stage | Form | Representation |
|---|---|---|
| 1. Written | Source text | `let grades=scores.map(s=> s >70?"pass":"fail");` |
| 2. Lexed | Token stream | `let`→**Keyword** · `grades`→Identifier · `=`→Punctuator · `scores`→Identifier · `.`→Punctuator · `map`→Identifier · `(`→Punctuator · `s`→Identifier · `=>`→Punctuator · `>`→Punctuator · `70`→Number · `?`/`:`→Punctuator · `"pass"`→String |
| 3. Parsed | AST nodes | `VariableDeclaration(kind: "let")` → `Identifier(grades)` → `CallExpression` → `ArrayExpression`/`ArrowFunction` |
| 4. Executed | Runtime slots | A binding `grades` is created and assigned the mapped array |

## 3) Step-by-Step: Every Token, Classified

| Token in the example | Token type | Is it a keyword? | Why |
|---|---|---|---|
| `let` | Keyword | **Yes** | Permanently reserved declaration word |
| `scores` | Identifier | No | Name the developer chose |
| `=` | Punctuator/operator | No | Assignment operator, not a word |
| `[45,89,90,67,75]` | Array literal | No | A value, not a word |
| `map`, `filter` | Identifier | No | Methods on `Array.prototype` |
| `=>` | Punctuator | No | Arrow-function token |
| `>` | Operator | No | Comparison operator |
| `?` `:` | Operator | No | Conditional (ternary) operator — punctuation, not a keyword |
| `"pass"`, `"fail"` | String literal | No | A value |
| `70` | Number literal | No | A value |
| `console`, `log` | Identifier | No | `console` is a global *object*, not a keyword |
| `true`, `false`, `null` | Keyword (literal) | **Yes** | These *are* reserved words that stand for values |

The common trap: `console`, `undefined`, `NaN`, and `Infinity` are **globals, not keywords** — nothing stops you from naming a variable `console` (though you should not).

## 4) Full Keyword Reference

### 4a) Reserved keywords (38)

| Group | Keywords |
|---|---|
| Declarations | `var` `let` `const` `function` `class` |
| Control flow | `if` `else` `switch` `case` `default` `for` `while` `do` `break` `continue` `return` `yield` `with` |
| Exceptions | `try` `catch` `finally` `throw` |
| Modules | `import` `export` `from`* `as`* |
| Objects / classes / operators | `new` `this` `super` `extends` `static`* `delete` `in` `instanceof` `typeof` `void` |
| Async | `async`* `await` |
| Literal values | `true` `false` `null` |
| Miscellaneous | `debugger` `enum` |

\* `from`, `as`, `static`, `async` are also counted as contextual — they are only keywords in the listed positions.

### 4b) Future reserved words (strict mode)

| Group | Words |
|---|---|
| Strict-mode reserved | `implements` `interface` `let` `package` `private` `protected` `public` `static` `yield` |

### 4c) Contextual keywords (reserved only in context)

| Word | Where it is a keyword | Where it is just a name |
|---|---|---|
| `async` | Before a function / arrow | `let async = 1;` |
| `await` | Inside an async function / module top level | `let await = 1;` (sloppy scripts) |
| `of` | In `for (x of y)` | `let of = 1;` |
| `from` | In `import x from "m"` | `let from = 1;` |
| `as` | In `import ... as ...` | `let as = 1;` |
| `get` / `set` | Before an object/class method name | `let get = 1;` |
| `static` | Inside a class body | `let static = 1;` (outside class, sloppy) |
| `target` / `meta` | After `new.` / `import.` | ordinary names elsewhere |

### 4d) Restricted names (not keywords, but disallowed)

| Name | Restriction |
|---|---|
| `arguments` | Cannot be assigned in strict mode |
| `eval` | Cannot be assigned in strict mode |
| `undefined` `NaN` `Infinity` | Global properties — NOT keywords, but overwriting them is a bug |

## 5) Pipeline Diagram

```text
  73_Arrays.transform.js                    (Source Code - text you write)
        |
        v
  JavaScript Lexer / Tokenizer  (V8)
        |
        v
  Token stream
   let        -> Keyword        <-- reserved by the language
   scores     -> Identifier     <-- chosen by you
   =          -> Punctuator
   45         -> Number literal
        |
        v
  Parser  (grammar check: is this a legal arrangement of tokens?)
        |
        v
  AST  (VariableDeclaration kind:"let")
        |
        v
  Output: [ 'fail', 'pass', 'pass', 'fail', 'pass' ]
```

## 6) At a Glance

| Question | Keyword | Identifier | Literal |
|---|---|---|---|
| Chosen by whom? | The language spec | You / the library | The language spec |
| Can you rename it? | No | Yes | No |
| Example in this project | `let` | `scores`, `console` | `"pass"`, `70` |
| Valid as a variable name? | No | Yes | No |
| When is the error caught? | At parse time | At runtime (`undefined`) | Never |
| Present in `01_helloworld.js`? | None | `console`, `log` | `"hello world"` |

## 7) TL;DR

- A **keyword** is a word the JavaScript engine reserves — it can never be a variable name; there are **38** of them.
- **Reserved keywords** (`let`, `if`, `return`, `class`, `typeof`, `true`, `null`, …) are always keywords.
- **Contextual keywords** (`async`, `of`, `from`, `as`, `get`, `set`, `static`) are keywords only in a specific grammar position.
- **Identifiers** (`scores`, `console`, `map`) are just names — most "important-looking" words in code are identifiers, not keywords.
- In `Chapter_10_Arrays/73_Arrays.transform.js` the *only* keyword is **`let`**; `console`, `map`, and `filter` are identifiers, and `? :` is an operator, not a keyword.
- Flow: **Source text → Lexer → Token stream (keyword vs identifier) → Parser → AST → Runtime**.
