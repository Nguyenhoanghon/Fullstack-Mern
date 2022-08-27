import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState, useEffect } from 'react'
import { MDKSContext } from '../../contexts/MDKSContext'

const UpdateMDKSModal = () => {
	// Contexts
	const {
		MDKSState: { MDKS },
		showUpdateMDKSModal,
		setShowUpdateMDKSModal,
		updateMDKS,
		setShowToast
	} = useContext(MDKSContext)

	// State
	const [updatedMDKS, setUpdatedMDKS] = useState(MDKS)

	useEffect(() => setUpdatedMDKS(MDKS), [MDKS])

	const { hesotinhthanhtien,phongban, mandaychuan, songuoi, songaythuchien, thanhtien, ghichu } = updatedMDKS //note

	const onChangeUpdatedMDKSForm = event =>
		setUpdatedMDKS({ ...updatedMDKS, [event.target.name]: event.target.value })

	const closeDialog = () => {
		setUpdatedMDKS(MDKS)
		setShowUpdateMDKSModal(false)
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await updateMDKS(updatedMDKS)
		setShowUpdateMDKSModal(false)
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	// const resetAddMDKSData = () => {
	// 	setNewMDKS({ title: '', description: '', url: '', status: 'TO LEARN' })
	// 	setShowAddMDKSModal(false)
	// }

	return (
		<Modal show={showUpdateMDKSModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Cập nhật Manday kỹ sư?</Modal.Title>
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
							onChange={onChangeUpdatedMDKSForm}
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
							onChange={onChangeUpdatedMDKSForm}
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
							onChange={onChangeUpdatedMDKSForm}
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
							onChange={onChangeUpdatedMDKSForm}
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
							onChange={onChangeUpdatedMDKSForm}
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
							onChange={onChangeUpdatedMDKSForm}
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
						Cập nhật
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	)
}

export default UpdateMDKSModal
