import { lazy } from 'react';
import { ROUTES } from '../../utils/constants';
import { Switch, Route, Redirect } from 'react-router-dom';

const AboutPage = lazy(() => import('./pages/about'));
const HomePage = lazy(() => import('./pages/home'));

const Router = () => {
	return (
		<Switch>
			<Route exact path={ROUTES.ABOUT} component={AboutPage} />
			<Route exact path={ROUTES.HOME} component={HomePage} />
			<Route path={ROUTES.HOME} render={() => <Redirect to={ROUTES.HOME} />} />
		</Switch>
	);
};

export default Router;
