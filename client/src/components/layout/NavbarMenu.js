import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import learnItLogo from '../../assets/logo.svg'
import logoutIcon from '../../assets/logout.svg'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

const NavbarMenu = () => {
	const {
		authState: {
			user: { username }
		},
		logoutUser
	} = useContext(AuthContext)

	const logout = () => logoutUser()

	return (
		<Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/dashboard'
						as={Link}
					>
						Dashboard
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/PTHD'
						as={Link}
					>
						PTHĐ
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/chitiethanghoa'
						as={Link}
					>
						CT hàng hóa
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/chiphivon'
						as={Link}
					>
						CP vốn
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/chiphitrienkhai'
						as={Link}
					>
						CP triển khai
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/mandaykysu'
						as={Link}
					>
						Mandaykysu
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/chiphibaolanh'
						as={Link}
					>
						CP thư bảo lãnh
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/chiphikhac'
						as={Link}
					>
						CP khác
					</Nav.Link>
					<Nav.Link
						className='font-weight-bolder text-white'
						to='/about'
						as={Link}
					>
						About
					</Nav.Link>
				</Nav>

				<Nav>
					<Nav.Link className='font-weight-bolder text-white' disabled>
						Welcome {username}
					</Nav.Link>
					<Button
						variant='secondary'
						className='font-weight-bolder text-white'
						onClick={logout}
					>
						<img
							src={logoutIcon}
							alt='logoutIcon'
							width='32'
							height='32'
							className='mr-2'
						/>
						Logout
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavbarMenu
