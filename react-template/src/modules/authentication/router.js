import { lazy } from 'react';
import { ROUTES } from '../../utils/constants';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getPath } from '../../utils/helpers';

const RegisterPage = lazy(() => import('./pages/register'));
const LoginPage = lazy(() => import('./pages/login'));

const Router = ({ match }) => {
	const { url } = match;

	return (
		<Switch>
			<Route exact path={getPath(ROUTES.LOGIN, url)} component={LoginPage} />
			<Route exact path={getPath(ROUTES.REGISTER, url)} component={RegisterPage} />
			<Route path={url} render={() => <Redirect to={getPath(ROUTES.LOGIN, url)} />} />
		</Switch>
	);
};

export default Router;
