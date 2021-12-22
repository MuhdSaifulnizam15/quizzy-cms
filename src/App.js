import React from 'react';
import { HashRouter } from 'react-router-dom';

// routes
import Router from './router/Router';

// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// hooks
import useAuth from './hooks/useAuth';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import NotistackProvider from './components/NotistackProvider';

export default function App() {
	const { isInitialized } = useAuth();

	return (
		<ThemeConfig>
			<NotistackProvider>
				<ScrollToTop />
				<GlobalStyles />
				<BaseOptionChartStyle />
				<Router />
			</NotistackProvider>
		</ThemeConfig>
	);
}
