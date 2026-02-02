# Change Log

All notable changes to the "sommark" extension will be documented in this file.

## [2.0.0] - 2026-02-02

### Added
- **Semantic Highlighting**: Implemented a full semantic tokens provider for 100% accurate syntax highlighting.
- **Official Lexer Integration**: Integrated the official `sommark` NPM package to power the highlighting engine.

### Verified
- **High Accuracy**: Syntax highlighting now perfectly matches the compiler's tokenization.
- **Theme Support**: Improved compatibility with VS Code themes.

### Removed
- **TextMate Grammars**: Completely removed legacy regex-based highlighting (`syntaxes/`).