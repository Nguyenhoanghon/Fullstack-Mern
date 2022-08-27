import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'
import ProtectedRoute from './components/routing/ProtectedRoute'


import About from './views/About'
import PostContextProvider from './contexts/PostContext'
import CPKContextProvider from './contexts/CPKContext'
import CPTBLContextProvider from './contexts/CPTBLContext'
import MDKSContextProvider from './contexts/MDKSContext'

import CPK from './views/CPK'
import CPTBL from './views/CPTBL'
import MDKS from './views/MDKS'
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
						<>
						
						<ProtectedRoute exact path='/dashboard' component={Dashboard} />
						<ProtectedRoute exact path='/about' component={About} />
						<CPKContextProvider>
							<ProtectedRoute exact path='/chiphikhac' component={CPK} />
						</CPKContextProvider>
						
						
						<CPTBLContextProvider>
							<ProtectedRoute exact path='/chiphibaolanh' component={CPTBL} />{/* new */}
						</CPTBLContextProvider>
						<MDKSContextProvider>
							<ProtectedRoute exact path='/mandaykysu' component={MDKS} />
						</MDKSContextProvider>
						
						
						</>

						
					</Switch>
				</Router>
			</PostContextProvider>
		</AuthContextProvider>
	)
}
export default App
