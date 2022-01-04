import React from 'react';

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
import LoadingScreen, { ProgressBarStyle } from './components/LoadingScreen';
import ThemeLocalization from './components/ThemeLocalization';

export default function App() {
	const { isInitialized } = useAuth();

	return (
		<ThemeConfig>
			<ThemeLocalization>
				<NotistackProvider>
					<GlobalStyles />
					<ProgressBarStyle />
					<BaseOptionChartStyle />
					<ScrollToTop />
					{isInitialized ? <Router /> : <LoadingScreen />}
					{/* <Router /> */}
				</NotistackProvider>
			</ThemeLocalization>
		</ThemeConfig>
	);
}
