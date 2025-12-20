# SomMark

SomMark is a **minimal, extensible markup language** designed for documentation.
It’s faster to write than MDX or Markdown for structured docs, while remaining **readable and maintainable**.

---

## Features

* Syntax highlighting for **blocks, at-blocks, inline statements, comments, and escapes**
* Supports **arguments**, **strings**, and **numbers** with clear visual distinction
* **Extensible**: define custom identifiers, inline statements, and at-blocks
* VS Code support with:

  * `.smark` file recognition
  * Auto-closing brackets and comments
  * Snippets for common constructs
* Works in **themes** without losing syntax visibility

---

### Example Syntax

**Block**

```smark
[Section = Introduction, 1]
This is a block body.
[end]
```

**Inline Statement**

```smark
(Hello)->(bold)
(Hello)->(color:red)
(Adam's website)->(link:https://Adam-Elmi.dev "Adam's Site")
```

**At Block**

```smark
@_table_@: month, revenue, expenses
- January, 1200, 400
- February, 1400, 600
@_end_@
```

**Comment**

```smark
# This is a comment
```

**Escape**

```smark
`[This is not a block]`
```

---

## Requirements

No external dependencies. Works on **VS Code ≥1.80.0**.

---

## Extension Settings

Currently, SomMark has no custom VS Code settings.
Future releases may include configurable snippets, themes, and formatting options.

---

## Known Issues

* Extension is **experimental**; syntax may evolve

---

## Release Notes

### 0.1.0

* Initial release of SomMark VS Code extension
* Syntax highlighting and snippets for blocks, at-blocks, inline statements, comments, and escapes

---

## Resources

* [SomMark Core Repo](https://github.com/Adam-Elmi/SomMark)

---