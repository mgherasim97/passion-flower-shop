import styles from './LogoAndContact.module.css';

import HeaderLogo from '../../../assets/HeaderLogo.png';

const LogoAndContact = () => {
	const sakura = require('../../../../node_modules/sakura-js/dist/sakura.min.js');

	console.log(sakura);

	return (
		<>
			<div className={styles['pre-header']}>
				<img className={styles.logo} src={HeaderLogo} alt="" />
				<div className={styles['contact-container']}>
					<span className={styles.contact}>Telefon: +40 746820204</span>
				</div>
			</div>
		</>
	);
};

export default LogoAndContact;
