import { useRouteError } from 'react-router-dom';
import { Container } from '../styled/Container';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page">
			<Container>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>Error: {error.statusText || error.message}</i>
				</p>
			</Container>
		</div>
	);
}
