import Particles from 'react-tsparticles';
import './ParticlesCv.css';

import { particlesConfig } from './particlesConfig';

export function ParticlesCv() {
	const particlesInit = (main: any) => {
		console.log(main);
	};

	const particlesLoaded = (container: any) => {
		console.log(container);
	};
	return (
		<div>
			<div className='container '>
				<div className='blocks'>
					<h1 className='myName  '>MAXIME RANCIERE</h1>

					<h2 className='myPhrase typing-demo'>
						The journey of a Web3 Full-Stack developer
					</h2>
					<img
						className='myPhoto'
						alt="It's me !"
						src='profile_picture.png'
					></img>
				</div>
			</div>

			<Particles
				id='tsparticles'
				init={particlesInit}
				loaded={particlesLoaded}
				options={particlesConfig}
			/>
		</div>
	);
}
