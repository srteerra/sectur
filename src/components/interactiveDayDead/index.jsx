import React from 'react';
import backgroundBlue from '../../assets/img/interactiveDayDead/FONDO.svg';
import calaverita from '../../assets/img/interactiveDayDead/CALAVERITA.svg';
import comida1 from '../../assets/img/interactiveDayDead/COMIDA1.svg';
import copal from '../../assets/img/interactiveDayDead/COPAL.svg';
import craneoCentro from '../../assets/img/interactiveDayDead/CRANEO_CENTRO.svg';
import florDerecha1 from '../../assets/img/interactiveDayDead/FLOR_DERECHA1.svg';
import floresIzq3 from '../../assets/img/interactiveDayDead/FLORES3_IZQ.svg';
import jarrito from '../../assets/img/interactiveDayDead/JARRITO.svg';
import panMuerto1 from '../../assets/img/interactiveDayDead/PAN_DE_MUERTO1.svg';
import panMuerto2 from '../../assets/img/interactiveDayDead/PAN_DE_MUERTO2.svg';
import papelPicado from '../../assets/img/interactiveDayDead/PAPEL_PICADO.svg';
import papelPicado2 from '../../assets/img/interactiveDayDead/PAPEL_PICADO2.svg';
import retrato from '../../assets/img/interactiveDayDead/RETRATO.svg';
import tequila from '../../assets/img/interactiveDayDead/TEQUILA.svg';
import vasoAgua from '../../assets/img/interactiveDayDead/VASO_DE_AGUA.svg';
import velas1 from '../../assets/img/interactiveDayDead/VELAS.svg';
import velas2 from '../../assets/img/interactiveDayDead/VELAS2.svg';
import './styles.css';

const InteractiveDayDead = ({ data }) => {
	const offering = data?.offering;

  return (
		<div className="interactive-day-dead-ctn">
			<h2 className="interactive-day-dead-title">{offering?.title}</h2>
			<div className="interactive-day-dead-ctn-content">
				<div className="interactive-day-dead-ctn-offering">
					<div className="interactive-day-dead-ctn-back-img">
						<img 
							src={backgroundBlue} 
							alt="fondo azul"
							className="interactive-day-dead-back-img"
						/>	
					</div>
					<div className="interactive-day-dead-ctn-principal">
						<div className="interactive-day-dead-ctn-confetti-left-img">
							<img 
								src={papelPicado}
								alt="papel picado"
								className="interactive-day-dead-confetti-left-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-confetti-left-img">
								{offering?.confetti}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-flowers-left-img">
							<img 
								src={floresIzq3}
								alt="flores izquierda"
								className="interactive-day-dead-flowers-left-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-flowers-left-img">
							{offering?.flowers}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-glass-left-img">
							<img 
								src={vasoAgua}
								alt="agua"
								className="interactive-day-dead-glass-left-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-glass-left-img">
								{offering?.water}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-copal-left-img">
							<img 
								src={copal}
								alt="copal"
								className="interactive-day-dead-copal-left-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-copal-left-img">
								{offering?.copal}
							</div>
						</div>
							
						<div className="interactive-day-dead-ctn-tequila-left-img">
							<img 
								src={tequila}
								alt="tequila"
								className="interactive-day-dead-tequila-left-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-tequila-left-img">
								{offering?.tequila}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-jarrito-left-img">
							<img 
								src={jarrito}
								alt="jarrito"
								className="interactive-day-dead-jarrito-left-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-jarrito-left-img">
								{offering?.jug}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-velas-left-img">
							<img 
								src={velas2}
								alt="velas"
								className="interactive-day-dead-velas-left-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-velas-left-img">
								{offering?.candles}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-pan-left-img">
							<img 
								src={panMuerto1}
								alt="pan"
								className="interactive-day-dead-pan-left-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-pan-left-img">
								{offering?.bread}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-craneo-center-img">
							<img 
								src={craneoCentro}
								alt="craneo"
								className="interactive-day-dead-craneo-center-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-craneo-center-img">
								{offering?.skull}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-comida-right-img">
							<img 
								src={comida1}
								alt="comida"
								className="interactive-day-dead-comida-right-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-comida-right-img">
								{offering?.food}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-retrato-right-img">
							<img 
								src={retrato}
								alt="retrato"
								className="interactive-day-dead-retrato-right-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-retrato-right-img">
								{offering?.portrait}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-pan-right-img">
							<img 
								src={panMuerto2}
								alt="pan"
								className="interactive-day-dead-pan-right-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-pan-right-img">
								{offering?.bread}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-velas-right-img">
							<img 
								src={velas1}
								alt="velas"
								className="interactive-day-dead-velas-right-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-velas-right-img">
								{offering?.candles} 
							</div>
						</div>

						<div className="interactive-day-dead-ctn-flowers-right-img">
							<img 
								src={florDerecha1}
								alt="flowers"
								className="interactive-day-dead-flowers-right-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-flowers-right-img">
								{offering?.flowers}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-calavera-right-img">
							<img 
								src={calaverita}
								alt="calavera"
								className="interactive-day-dead-calavera-right-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-calavera-right-img">
								{offering?.skull}
							</div>
						</div>

						<div className="interactive-day-dead-ctn-confetti-right-img">
							<img 
								src={papelPicado2}
								alt="confetti"
								className="interactive-day-dead-confetti-right-img"
							/>
							<div className="interactive-day-dead-ctn-tooltip-confetti-right-img">
								{offering?.confetti}
							</div>
						</div>
							
					</div>
				</div>
			</div>
			<p className="interactive-day-dead-indications">{offering?.description}</p>
		</div>
  );
};

export default InteractiveDayDead;