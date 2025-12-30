# SomMark-Vscode

Syntax highlighting and basic language support for SomMark, a minimal, extensible markup language for documentation.

![Screenshot](https://raw.githubusercontent.com/Adam-Elmi/SomMark-Vscode/master/screenshot.png)

---

## Features

* Syntax highlighting for **blocks, at-blocks, inline statements, comments, and escapes**

* **VS Code support with**:

  * `.smark` file recognition
  * Auto-closing brackets and comments
  * Snippets for common constructs
* Works in **themes** without losing syntax visibility

---

### Screenshot Examples

**Block Statement**

![Screenshot](https://raw.githubusercontent.com/Adam-Elmi/SomMark-Vscode/master/block.png)

**At-Block Statement**

![Screenshot](https://raw.githubusercontent.com/Adam-Elmi/SomMark-Vscode/master/atblock.png)

**Inline Statement**

![Screenshot](https://raw.githubusercontent.com/Adam-Elmi/SomMark-Vscode/master/inline.png)

**Nested Blocks**

![Screenshot](https://raw.githubusercontent.com/Adam-Elmi/SomMark-Vscode/master/nested.png)

**Comment**

![Screenshot](https://raw.githubusercontent.com/Adam-Elmi/SomMark-Vscode/master/comments.png)


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

### 0.0.4

* Syntax highlighting failed when @_end_@ was indented

* Cause: overly strict regex anchoring

* Fix: allow leading whitespace

---

## Resources

* [SomMark Core Repo](https://github.com/Adam-Elmi/SomMark)

---