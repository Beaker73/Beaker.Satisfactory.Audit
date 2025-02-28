import "./App.css"
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { Shell } from "./Components/Shell";
import { ShellHeader } from "./Components/Shell/Components/ShellHeader";
import { ShellContent } from "./Components/Shell/Components/ShellContent";
import { Audit } from "./Components/Audit";
import { Header } from "./Components/Header";
import { StateProvider } from "./Components/State/Provider";

export function App() {
	return <FluentProvider theme={webLightTheme}>
		<StateProvider>
			<Shell>
				<ShellContent>
					<Audit />
				</ShellContent>
				<ShellHeader>
					<Header />
				</ShellHeader>
			</Shell>
		</StateProvider>
	</FluentProvider>
}
