
import * as vscode from 'vscode';
import { SomMarkSemanticTokensProvider, legend } from './semanticTokens';

export function activate(context: vscode.ExtensionContext) {
    console.log('SomMark Semantic Provider Active!');
    const selector = { language: 'sommark', scheme: 'file' };
    const provider = new SomMarkSemanticTokensProvider();

    context.subscriptions.push(
        vscode.languages.registerDocumentSemanticTokensProvider(selector, provider, legend)
    );
}
