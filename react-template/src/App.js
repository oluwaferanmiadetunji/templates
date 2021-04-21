import { Suspense } from 'react';
import Loader from 'components/loader';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import LandingModule from 'modules/landing';
import AuthenticationModule from 'modules/authentication';

const App = ({ props }) => {
	return (
		<div className='App'>
			<Suspense fallback={<Loader />}>
				<Switch>
					<Route path={ROUTES.AUTHENTICATION} component={AuthenticationModule} {...props} />
					<Route path={ROUTES.HOME} component={LandingModule} {...props} />
				</Switch>
			</Suspense>
		</div>
	);
};

export default App;
