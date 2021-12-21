import React from 'react';
import { HashRouter } from 'react-router-dom';

// routes
import Router from './router/Router';

// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

function App() {
	return (
		<ThemeConfig>
			<ScrollToTop />
			<GlobalStyles />
			<BaseOptionChartStyle />
			<Router />
		</ThemeConfig>
	);
}

export default App;
