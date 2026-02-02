import * as vscode from 'vscode';
// @ts-ignore
import TOKEN_TYPES from './sommark-tokens/tokenTypes.js';

const tokenTypes = ['function', 'keyword', 'parameter', 'string', 'variable', 'comment', 'operator'];
const tokenModifiers = ['declaration', 'documentation'];

export const legend = new vscode.SemanticTokensLegend(tokenTypes, tokenModifiers);

export class SomMarkSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
        const builder = new vscode.SemanticTokensBuilder(legend);
        const text = document.getText();

        if (token.isCancellationRequested) return builder.build();

        try {
            const { lex } = await (new Function('return import("sommark")'))();
            const tokens = lex(text) || [];

            for (const t of tokens) {
                if (token.isCancellationRequested) return builder.build();

                let type = '';
                let modifiers: string[] = [];

                switch (t.type) {
                    // ========================================================================== //
                    //  Token: Comment                                                            //
                    // ========================================================================== //
                    case TOKEN_TYPES.COMMENT:
                        type = 'comment';
                        break;

                    // ========================================================================== //
                    //  Token: End Keyword                                                        //
                    // ========================================================================== //
                    case TOKEN_TYPES.END_KEYWORD:
                        type = 'keyword';
                        modifiers.push('declaration');
                        break;

                    // ========================================================================== //
                    //  Token: Identifier                                                         //
                    // ========================================================================== //
                    case TOKEN_TYPES.IDENTIFIER:
                        type = 'variable';
                        break;

                    // ========================================================================== //
                    //  Token: Value (String)                                                     //
                    // ========================================================================== //
                    case TOKEN_TYPES.VALUE:
                        type = 'string';
                        break;

                    // ========================================================================== //
                    //  Token: Operators & Functions                                              //
                    // ========================================================================== //
                    case TOKEN_TYPES.COLON:
                    case TOKEN_TYPES.COMMA:
                    case TOKEN_TYPES.SEMICOLON:
                    case TOKEN_TYPES.EQUAL:
                    case TOKEN_TYPES.THIN_ARROW:
                    case TOKEN_TYPES.ESCAPE:
                        type = 'function';
                        break;

                    // ========================================================================== //
                    //  Token: Structural / Ignored                                               //
                    // ========================================================================== //
                    case TOKEN_TYPES.OPEN_BRACKET:
                    case TOKEN_TYPES.CLOSE_BRACKET:
                    case TOKEN_TYPES.OPEN_PAREN:
                    case TOKEN_TYPES.CLOSE_PAREN:
                    case TOKEN_TYPES.OPEN_AT:
                    case TOKEN_TYPES.CLOSE_AT:
                    case TOKEN_TYPES.TEXT:
                    default:
                        break;
                }

                if (type) {
                    const rawValue = t.value;
                    const lines = rawValue.split('\n');

                    // ========================================================================== //
                    //  Determine Line & Column Offsets                                           //
                    // ========================================================================== //
                    const startLineIndex = (t.line - 1) - (lines.length - 1);
                    const startCharIndex = t.start - 1;

                    for (let i = 0; i < lines.length; i++) {
                        const lineContent = lines[i];
                        if (!lineContent || lineContent.trim().length === 0) {
                            continue;
                        }

                        // ========================================================================== //
                        //  Check Content Visibility                                                  //
                        // ========================================================================== //
                        const leadingSpaces = lineContent.match(/^\s*/)?.[0].length || 0;
                        const trimmedContent = lineContent.trim();

                        if (trimmedContent.length === 0) continue;

                        const currentLine = startLineIndex + i;

                        // ========================================================================== //
                        //  Calculate Token Position                                                  //
                        // ========================================================================== //
                        const lineBaseOffset = (i === 0) ? startCharIndex : 0;
                        const tokenStart = lineBaseOffset + leadingSpaces;
                        const tokenEnd = tokenStart + trimmedContent.length;

                        if (currentLine >= 0 && tokenStart >= 0) {
                            const range = new vscode.Range(currentLine, tokenStart, currentLine, tokenEnd);
                            builder.push(range, type, modifiers);
                        }
                    }
                }
            }

        } catch (e) {

        }

        return builder.build();
    }
}
