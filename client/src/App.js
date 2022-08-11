import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'
import ProtectedRoute from './components/routing/ProtectedRoute'
import About from './views/About'
import PostContextProvider from './contexts/PostContext'
import Chiphikhac from './views/Chiphikhac'
import Chiphibaolanh from './views/Chiphibaolanh'
import Mandaykysu from './views/Mandaykysu'
import Chiphitrienkhai from './views/Chiphitrienkhai'
import Chiphivon from './views/Chiphivon'
import Chitiethanghoa from './views/Chitiethanghoa'
import PTHD from './views/PTHD'

function App() {
	return (
		<AuthContextProvider>
			<PostContextProvider>
				<Router>
					<Switch>
						<Route exact path='/' component={Landing} />
						<Route
							exact
							path='/login'
							render={props => <Auth {...props} authRoute='login' />}
						/>
						<Route
							exact
							path='/register'
							render={props => <Auth {...props} authRoute='register' />}
						/>
						<ProtectedRoute exact path='/dashboard' component={Dashboard} />
						<ProtectedRoute exact path='/about' component={About} />
						<ProtectedRoute exact path='/chiphikhac' component={Chiphikhac} />{/* new */}
						<ProtectedRoute exact path='/chiphibaolanh' component={Chiphibaolanh} />{/* new */}
						<ProtectedRoute exact path='/mandaykysu' component={Mandaykysu} />{/* new */}
						<ProtectedRoute exact path='/chiphitrienkhai' component={Chiphitrienkhai} />{/* new */}
						<ProtectedRoute exact path='/chiphivon' component={Chiphivon} />{/* new */}
						<ProtectedRoute exact path='/chitiethanghoa' component={Chitiethanghoa} />{/* new */}
						<ProtectedRoute exact path='/PTHD' component={PTHD} />{/* new */}
					</Switch>
				</Router>
			</PostContextProvider>
		</AuthContextProvider>
	)
}
export default App
