import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './components/UI/Header';

import OnboardingPage from './views/Onboarding';
import ItemsListing from './views/ItemsListing';
import Product from './views/Product';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<OnboardingPage />} />
				<Route path="/products" element={<ItemsListing />} />
				<Route path="/products/:productId" element={<Product />} />
			</Routes>
		</>
	);
}

export default App;
