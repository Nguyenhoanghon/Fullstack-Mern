import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState, useEffect } from 'react'
import { CPTBLContext } from '../../contexts/CPTBLContext'

const UpdateCPTBLModal = () => {
	// Contexts
	const {
		CPTBLState: { CPTBL },
		showUpdateCPTBLModal,
		setShowUpdateCPTBLModal,
		updateCPTBL,
		setShowToast
	} = useContext(CPTBLContext)

	// State
	const [updatedCPTBL, setUpdatedCPTBL] = useState(CPTBL)

	useEffect(() => setUpdatedCPTBL(CPTBL), [CPTBL])

	const { noidung, giatrithubaolanh, sothang, tilephi, thanhtien, ghichu } = updatedCPTBL

	const onChangeUpdatedCPTBLForm = event =>
		setUpdatedCPTBL({ ...updatedCPTBL, [event.target.name]: event.target.value })

	const closeDialog = () => {
		setUpdatedCPTBL(CPTBL)
		setShowUpdateCPTBLModal(false)
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await updateCPTBL(updatedCPTBL)
		setShowUpdateCPTBLModal(false)
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	// const resetAddCPTBLData = () => {
	// 	setNewCPTBL({ title: '', description: '', url: '', status: 'TO LEARN' })
	// 	setShowAddCPTBLModal(false)
	// }

	return (
		<Modal show={showUpdateCPTBLModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Cập nhật chi phí thư bảo lãnh?</Modal.Title>
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
							onChange={onChangeUpdatedCPTBLForm}
						/>
						<Form.Text id='title-help' muted>
							Bắt buộc phải nhập
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Giá trị thư bảo lãnh'
							name='giatrithubaolanh'
							required
							aria-describedby='gttbl-help'
							value={giatrithubaolanh}
							onChange={onChangeUpdatedCPTBLForm}
						/>
						<Form.Text id='title-help' muted>
							Bắt buộc phải nhập trị thư bảo lãnh
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Số tháng'
							name='sothang'
							required
							aria-describedby='title-help'
							value={sothang}
							onChange={onChangeUpdatedCPTBLForm}
						/>
						<Form.Text id='sothang-help' muted>
							Bắt buộc phải nhập số tháng
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Tỉ lệ phí'
							name='tilephi'
							required
							aria-describedby='title-help'
							value={tilephi}
							onChange={onChangeUpdatedCPTBLForm}
						/>
						<Form.Text id='tlp-help' muted>
							Bắt buộc phải nhập tỉ lệ phí
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='ghichu'
							name='ghichu'
							value={ghichu}
							onChange={onChangeUpdatedCPTBLForm}
						/>
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

export default UpdateCPTBLModal
