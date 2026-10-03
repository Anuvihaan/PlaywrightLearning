# Source Code vs Bytecode vs Binary Code

Using this example file:

`Chapter_01_Basics/01_helloworld.js`

```js
console.log("hello world");
console.log("hello test8ngacademy");
```

## 1) Breakdown Table: The Three Forms

| Aspect | Source Code | Bytecode | Binary Code (Machine Code) |
|---|---|---|---|
| What it is | Human-readable instructions written in a programming language | Intermediate, semi-compiled instructions for a virtual machine | CPU-native instructions (1s and 0s) |
| Readable by | Humans | The runtime engine (e.g., V8), not humans | The CPU directly |
| Form for our example | The two `console.log(...)` lines above | V8 Ignition bytecode ops (e.g., `LdaConstant`, `CallProperty1`) | x86-64 / ARM machine instructions |
| Produced by | The developer | The JS engine's parser + bytecode compiler | JIT compiler (TurboFan) or an ahead-of-time compiler |
| Runs on | Nothing directly - must be translated first | The engine's virtual machine | The specific CPU architecture |
| Portable? | Yes - same file runs anywhere | Yes, within the same engine | No - tied to the CPU/OS (x64 vs ARM) |
| Stored as | `.js` text file (UTF-8) | In-memory bytecode array (can be cached) | Executable instructions in memory / `.exe`, `.dll` |
| Who sees it | You and your editor | Engine internals (rarely seen) | The processor only |
| Debuggability | High - readable lines, breakpoints | Medium - engine tools, `--print-bytecode` | Very low - raw disassembly |
| Changes when example changes | Yes - you edit text | Yes - regenerated from source | Yes - recompiled by the JIT |

## 2) The Same Example in All Three Forms

The two lines `console.log("hello world");` and `console.log("hello test8ngacademy");` pass through these stages.

| Stage | Form | Simplified representation |
|---|---|---|
| 1. Written by you | Source Code | `console.log("hello world");` |
| 2. Emitted by V8 | Bytecode | `LdaGlobal [console]` → `LdaConstant "hello world"` → `CallProperty1` |
| 3. JIT-compiled | Binary Code | `MOV` / `CALL` machine instructions executed by the CPU |

## 3) Line-by-Line: What Each Line Becomes

| Line (source) | Bytecode idea | Binary idea |
|---|---|---|
| `console.log("hello world");` | Load global `console`, load string constant, call `log` with 1 argument | CPU loads string address into a register, calls the print routine |
| `console.log("hello test8ngacademy");` | Same ops again with the second string constant | Same machine routine, different string address |

Each `console.log(...)` call compiles down to a small group of bytecode operations, and each of those maps to several binary CPU instructions.

## 4) Pipeline Diagram

```text
 01_helloworld.js                    (Source Code - text you write)
        |
        v
 JavaScript Parser  (V8)
        |
        v
 Bytecode  (Ignition interpreter - intermediate form)
        |
        v
 JIT Compiler  (TurboFan - optimizes hot code)
        |
        v
 Binary Code  (Machine code - runs on the CPU)
        |
        v
 Output: hello world
         hello test8ngacademy
```

## 5) Key Differences at a Glance

| Question | Source Code | Bytecode | Binary Code |
|---|---|---|---|
| Can a human read it easily? | Yes | Partly | No |
| Is it text or binary? | Text | Binary | Binary |
| Does it run on a CPU? | No | No (needs a VM) | Yes |
| Is it portable across machines? | Yes | Yes (same engine) | No |
| Example in this project | `01_helloworld.js` | V8 Ignition ops | x64/ARM instructions |

## 6) TL;DR

- **Source code** is the human-readable `.js` file you write - here, the two `console.log(...)` lines.
- **Bytecode** is the intermediate form the JS engine (V8) produces from that source - not human-friendly, but not machine code either.
- **Binary code** is the final CPU-native machine code that actually runs, produced by a JIT or AOT compiler.
- Flow: **Source Code → Bytecode → Binary Code → Output**.
- Source is portable text; bytecode is portable inside its engine; binary is tied to the specific CPU.
