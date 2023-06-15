import Github from '../../assets/images/github.svg';
import Linkedin from '../../assets/images/linkedin.svg';
import { Buttons, Footer, Img, Span, Text } from './Style';

export default function FooterComponent() {
	return (
		<Footer>
			<Text>
				Desenvolvido por <Span>Felipe Almeida</Span>
			</Text>
			<Buttons>
				<a
					href="https://github.com/FelipeG-Almeida"
					target="_blank"
					rel="noreferrer"
				>
					<Img src={Github} alt="Github Felipe Almeida" />
				</a>
				<a
					href="https://www.linkedin.com/in/fg-almeida/"
					target="_blank"
					rel="noreferrer"
				>
					<Img src={Linkedin} alt="Linkedin Felipe Almeida" />
				</a>
			</Buttons>
		</Footer>
	);
}
