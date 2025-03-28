import react from '@vitejs/plugin-react-swc';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteActionTypeGenerator(),
	],
})


function viteActionTypeGenerator(): Plugin {
	return {
		name: 'vite-plugin-action-type-generator',
		async handleHotUpdate({file, read }) {

			const folderPath = dirname(file);
			if(!folderPath.endsWith('/Actions'))
				return;

			// try to find name of action
			const content = await read();
			const match = content.match(/export type (?<name>(\w+)Action) = Action</);
			const actionName = match?.groups?.name;
			if(!actionName)
				return;

			const actionNames: string[] = [];

			const files = await readdir(folderPath);
			for (const fileName of files) {
				const filePath = join(folderPath, fileName);
				const content = await readFile(filePath, {encoding: "utf-8"});
				const match = content.match(/export type (?<name>(\w+)Action) = Action</);
				const actionName = match?.groups?.name;

				if(actionName)
					actionNames.push(actionName);
			}

			// generate the action type file
			const targetPath = `${dirname(folderPath)}/.ActionType.g.ts`;
			await writeFile(targetPath, 
				actionNames.map(name => `import type { ${name} } from "./Actions/${name.substring(0, name.length - 6)}";`).join("\n")
				+ "\n\n"
				+ `export type Action = ${actionNames.join(" | ")};`
			);
		}
	}
}