# IQ Notes — Reusable Prompt

Copy/paste this prompt, then ask your question:

---

Explain the concept I ask about by creating a `.md` file in the `IQ_Notes/` folder.

Use this exact format (same style as `source_code_bytecode_bynary_iq.md`):

1. **Title** — `# <Concept Name>` as the first heading.
2. **Concrete example** — anchor a specific example from this project, with the file path referenced as `` `Chapter_XX/...` `` and the relevant code in a fenced block. Tie every explanation back to this example, never stay abstract.
3. **Breakdown table** — a `| Aspect | ... |` comparison table (one column per form/variant of the concept).
4. **Mapping table** — show the same example across each stage/form (`| Stage | Form | Representation |`).
5. **Step-by-step table** — walk through what each line/element of the example becomes.
6. **Pipeline diagram** — a fenced `text` block with an ASCII flow (`->` / `v`) of the process.
7. **At a glance** — a compact `| Question | ... |` table summarizing key differences.
8. **TL;DR** — a short bullet list (`- **Term** is ...`) ending with the one-line flow.

Rules:

- Save to `IQ_Notes/<topic>_iq.md` — lowercase snake_case topic, `_iq` suffix (e.g. `event_loop_iq.md`).
- Explain in table-first form, with prose only where a table can't carry it.
- Keep it concrete and example-driven; reference real files/paths from this repo.
- Use `**bold**` for key terms in the TL;DR.
- Do not ask clarifying questions — infer the concept, pick a fitting example, and write the file.
