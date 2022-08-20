import { CPKContext } from '../contexts/CPKContext'//Note GET DELETE
import { AuthContext } from '../contexts/AuthContext'
import { useContext, useEffect } from 'react'
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Col from 'react-bootstrap/Col'


import AddCPKModal from '../components/chiphikhac/AddCPKModal'//Note
import UpdateCPKModal from '../components/chiphikhac/UpdateCPKModal'//Note

import addIcon from '../assets/plus-circle-fill.svg'
import Table from 'react-bootstrap/Table'
//import ActionButtons from '../components/posts/ActionButtons'
import ActionButtons_CPK from '../components/chiphikhac/ActionButtons_CPK'
const CPK = () => {
	// Contexts
	const {
		authState: {
			user: { username }
		}
	} = useContext(AuthContext)

	const {
		CPKState: { CPK, CPKs, CPKsLoading },
		getCPKs,
		setShowAddCPKModal,
		showToast: { show, message, type },
		setShowToast
	} = useContext(CPKContext)

	// Start: Get all CPKs
	useEffect(() => getCPKs(), [])

	let body = null
	let stt = 1
	const [tong, settong] = useState(0) 
	if (CPKsLoading) {
		body = (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)
	} else if (CPKs.length === 0) {
		body = (
			<>
				<Card className='text-center mx-5 my-5'>
					<Card.Header as='h1'>Hi {username}</Card.Header>
					<Card.Body>
						<Card.Title>Welcome Chi phí khác</Card.Title>
						<Card.Text>
							Click the button below to track your first skill to learn
						</Card.Text>
						<Button
							variant='primary'
							onClick={setShowAddCPKModal.bind(this, true)}
						>
							LearnIt!
						</Button>
					</Card.Body>
				</Card>
			</>
		)
	} else {
		body = (
			<>
				{/* Open Add CPK Modal */}
				<OverlayTrigger
					placement='left'
					overlay={<Tooltip>Thêm mới</Tooltip>}
				>
					<Button
						className='btn-floating'
						onClick={setShowAddCPKModal.bind(this, true)}
					>
						<img src={addIcon} alt='add-CPK' width='60' height='60' />
					</Button>
				</OverlayTrigger>
				{/* Show Data */
				
				}
				<Card className='text-center mx-5 my-5'>
					<Card.Header as='h1'>CHI PHÍ KHÁC</Card.Header>
					<Card.Body>
						<Table  striped bordered hover size="sm">
							<thead>
								<tr>
								<th>STT</th>
								<th>Nội dung </th>
								<th>Số Tiền</th>
								<th>Ghi chú</th>
								</tr>
							</thead>
							<tbody>
								{CPKs.map(CPK => ( 
								<tr key={CPK._id} >
									<td>{stt++}  </td>
									<td>{CPK.noidung}</td>
									<td>{CPK.sotien}</td>
									<td>{CPK.ghichu}  </td>
									<td>
									<ActionButtons_CPK _id={CPK._id} />
									</td>
								CPK.sotien
								</tr>
								
								))
								}
								<tr>
									<td colSpan={2} >Tổng</td>
									<td>{1000}</td>
									<td>Ghi chú</td>
								</tr>
							</tbody>
    					</Table>
						<Button
							variant='primary'
							onClick={setShowAddCPKModal.bind(this, true)}
						>
							Thêm mới
						</Button>
					</Card.Body>
				</Card>
			</>
		)
	}

	return (
		<>
			{body}
			<AddCPKModal />
			{CPK !== null && <UpdateCPKModal />}
			{/* After CPK is added, show toast */}
			<Toast
				show={show}
				style={{ position: 'fixed', top: '20%', right: '10px' }}
				className={`bg-${type} text-white`}
				onClose={setShowToast.bind(this, {
					show: false,
					message: '',
					type: null
				})}
				delay={3000}
				autohide
			>
				<Toast.Body>
					<strong>{message}</strong>
				</Toast.Body>
			</Toast>
		</>
	)
}

export default CPK
