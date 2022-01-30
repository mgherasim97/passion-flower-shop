import './HeaderMenu.scss';

const MainHeader = (props) => {
	return (
		<>
        
			<nav className="menu">
				<ol>
					<li className="menu-item">
						<a href="#0">Acasa</a>
					</li>
					<li className="menu-item">
						<a href="#0">About</a>
					</li>
					<li className="menu-item">
						<a href="#0">Widgets</a>
						<ol className="sub-menu">
							<li className="menu-item">
								<a href="#0">Big Widgets</a>
							</li>
							<li className="menu-item">
								<a href="#0">Bigger Widgets</a>
							</li>
							<li className="menu-item">
								<a href="#0">Huge Widgets</a>
							</li>
						</ol>
					</li>
					<li className="menu-item">
						<a href="#0">Kabobs</a>
						<ol className="sub-menu">
							<li className="menu-item">
								<a href="#0">Shishkabobs</a>
							</li>
							<li className="menu-item">
								<a href="#0">BBQ kabobs</a>
							</li>
							<li className="menu-item">
								<a href="#0">Summer kabobs</a>
							</li>
						</ol>
					</li>
					<li className="menu-item">
						<a href="#0">Contact</a>
					</li>
				</ol>
			</nav>
		</>
	);
};

export default MainHeader;
