import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { CPKContext } from '../../contexts/CPKContext'

const AddCPKModal = () => {
	// Contexts
	const {
		showAddCPKModal,
		setShowAddCPKModal,
		addCPK,
		setShowToast
	} = useContext(CPKContext)

	// State
	const [newCPK, setNewCPK] = useState({
		noidung: '',
		sotien: '',
		ghichu: ' '
	})

	const { noidung, sotien, ghichu } = newCPK

	const onChangeNewCPKForm = event =>
		setNewCPK({ ...newCPK, [event.target.name]: event.target.value })

	const closeDialog = () => {
		resetAddCPKData()
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await addCPK(newCPK)
		resetAddCPKData()
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	const resetAddCPKData = () => {
		setNewCPK({ noidung: '', sotien: '', ghichu: '' })
		setShowAddCPKModal(false)
	}

	return (
		<Modal show={showAddCPKModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Bạn muốn thêm chi phí khác?</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Nội dung chi phí'
							name='noidung'
							required
							aria-describedby='title-help'
							value={noidung}
							onChange={onChangeNewCPKForm}
						/>
						<Form.Text id='title-help' muted>
							Bắt buộc phải nhập
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							tpye='text'
							placeholder='số tiền'
							name='sotien'
							value={sotien} /* tạo ràn buộc số */
							onChange={onChangeNewCPKForm}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='ghichu'
							name='ghichu'
							value={ghichu}
							onChange={onChangeNewCPKForm}
						/>
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

export default AddCPKModal
