import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import "./App.css";
import { ActivePage } from "./Components/ActivePage";
import { Header } from "./Components/Header";
import { Shell } from "./Components/Shell";
import { ShellContent } from "./Components/Shell/Components/ShellContent";
import { ShellHeader } from "./Components/Shell/Components/ShellHeader";
import { ShellTotals } from "./Components/Shell/Components/ShellTotals";
import { ShellTree } from "./Components/Shell/Components/ShellTree";
import { WorldTree } from "./Components/WorldTree";
import { RouterProvider } from "raviger";

export function App() 
{
	return <FluentProvider theme={webLightTheme}>
		<RouterProvider basePath="/Beaker.Satisfactory.Audit">
			<Shell>
				<ShellTree>
					<WorldTree />
				</ShellTree>
				<ShellContent>
					<ActivePage />
				</ShellContent>
				<ShellHeader>
					<Header />
				</ShellHeader>
				<ShellTotals>
				</ShellTotals>
			</Shell>
		</RouterProvider>
	</FluentProvider>
}
