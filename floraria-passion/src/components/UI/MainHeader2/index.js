import { NavLink } from 'react-router-dom';

import styles from './MainHeader.module.css';

function MainHeader() {

	return (
		<header className={styles.header}>
			<nav>
				<ul>
					<li>
						{/* Sa nu mai dea rerenderuri */}
						{/* https://v5.reactrouter.com/web/api/NavLink*/}
						<NavLink  className={isActive => isActive.isActive ? styles.active : ''} to="/">
						Home
						</NavLink>
					</li>

					<li>
						<NavLink className={isActive => isActive.isActive ? styles.active : ''} to="/products">
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainHeader;
