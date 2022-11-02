import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('run-to-cursor-icon.run-to-cursor',
			() => { return vscode.commands.executeCommand('editor.debug.action.runToCursor'); }
		)
	);

}

// This method is called when your extension is deactivated
export function deactivate() { }
