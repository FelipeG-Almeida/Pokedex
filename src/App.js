import { ChakraProvider } from '@chakra-ui/react';
import { createGlobalStyle } from 'styled-components';
import GlobalState from './Global/GlobalState';
import Router from './Routes/Router';
import chakraTheme from './theme';

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        font-family: 'Poppins', sans-serif;
        height: 100%;
    }
	.App {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}
  `;

function App() {
	return (
		<div className="App">
			<ChakraProvider theme={chakraTheme}>
				<GlobalState>
					<GlobalStyle />
					<Router />
				</GlobalState>
			</ChakraProvider>
		</div>
	);
}

export default App;
