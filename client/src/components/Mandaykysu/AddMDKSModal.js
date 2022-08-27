import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { MDKSContext } from '../../contexts/MDKSContext'

const AddMDKSModal = () => {
	// Contexts
	const {
		showAddMDKSModal,
		setShowAddMDKSModal,
		addMDKS,
		setShowToast
	} = useContext(MDKSContext)

	// State
	const [newMDKS, setNewMDKS] = useState({
		hesotinhthanhtien:'',
		phongban: '',
		mandaychuan:'',
		songuoi: '',
		songaythuchien:'',
		thanhtien:'',
		ghichu: ''
	}) //note là các biến trong 

	const { hesotinhthanhtien,phongban, mandaychuan, songuoi, songaythuchien, thanhtien, ghichu } = newMDKS //note

	const onChangeNewMDKSForm = event =>
		setNewMDKS({ ...newMDKS, [event.target.name]: event.target.value })

	const closeDialog = () => {
		resetAddMDKSData()
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await addMDKS(newMDKS)
		resetAddMDKSData()
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	const resetAddMDKSData = () => {
		setNewMDKS({ 
		hesotinhthanhtien:'',
		phongban: '',
		mandaychuan:'',
		songuoi: '',
		songaythuchien:'',
		thanhtien:'',
		ghichu: ' ' }) //note cần sửa
		setShowAddMDKSModal(false)
	}

	return (
		<Modal show={showAddMDKSModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Bạn muốn thêm Mandaykysu?</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='22400'
							name='hesotinhthanhtien'
							required
							aria-describedby='title-help'
							value={hesotinhthanhtien}
							onChange={onChangeNewMDKSForm}
						/>
						<Form.Text id='title-help' muted>
							Số này cần chú ý?
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Nội dung Phòng ban'
							name='phongban'
							required
							aria-describedby='title-help'
							value={phongban}
							onChange={onChangeNewMDKSForm}
						/>
						<Form.Text id='title-help' muted>
							Phải nhập dữ liệu Phòng ban
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Nhập Giá trị Mandaychuan'
							name='mandaychuan'
							required
							aria-describedby='mandaychuan-help'
							value={mandaychuan}
							onChange={onChangeNewMDKSForm}
						/>
						<Form.Text id='title-help' muted>
							Phải nhập trị Manday chuẩn
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Nhập số người kiểu số'
							name='songuoi'
							required
							aria-describedby='songuoi-help'
							value={songuoi}
							onChange={onChangeNewMDKSForm}
						/>
						<Form.Text id='sothang-help' muted>
							Phải nhập số người
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Nhập số ngày thực hiện'
							name='songaythuchien'
							required
							aria-describedby='songaythuchien-help'
							value={songaythuchien}
							onChange={onChangeNewMDKSForm}
						/>
						<Form.Text id='tlp-help' muted>
							Phải nhập số ngày thực hiện
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Ghi chú'
							name='ghichu'
							required
							aria-describedby='ghichu-help'
							value={ghichu}
							onChange={onChangeNewMDKSForm}
						/>
						<Form.Text id='tlp-help' muted>
							Không Bắt buộc phải nhập
						</Form.Text>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={closeDialog}>
						Hủy
					</Button>
					<Button variant='primary' type='submit'>
						Thêm!
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default AddMDKSModal
