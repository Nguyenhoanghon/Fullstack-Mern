import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { CPTBLContext } from '../../contexts/CPTBLContext'

const AddCPTBLModal = () => {
	// Contexts
	const {
		showAddCPTBLModal,
		setShowAddCPTBLModal,
		addCPTBL,
		setShowToast
	} = useContext(CPTBLContext)

	// State
	const [newCPTBL, setNewCPTBL] = useState({
		noidung: '',
		giatrithubaolanh:'',
		sothang: '',
		tilephi:'',
		thanhtien:'',
		ghichu: ''
	})

	const { noidung, giatrithubaolanh, sothang, tilephi, thanhtien, ghichu } = newCPTBL

	const onChangeNewCPTBLForm = event =>
		setNewCPTBL({ ...newCPTBL, [event.target.name]: event.target.value })

	const closeDialog = () => {
		resetAddCPTBLData()
	}

	const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await addCPTBL(newCPTBL)
		resetAddCPTBLData()
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

	const resetAddCPTBLData = () => {
		setNewCPTBL({ noidung: '',
		giatrithubaolanh:'',
		sothang: '',
		tilephi:'',
		thanhtien:'',
		ghichu: ' ' })
		setShowAddCPTBLModal(false)
	}

	return (
		<Modal show={showAddCPTBLModal} onHide={closeDialog}>
			<Modal.Header closeButton>
				<Modal.Title>Bạn muốn thêm chi phí thư bảo lãnh?</Modal.Title>
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
							onChange={onChangeNewCPTBLForm}
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
							onChange={onChangeNewCPTBLForm}
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
							onChange={onChangeNewCPTBLForm}
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
							onChange={onChangeNewCPTBLForm}
						/>
						<Form.Text id='tlp-help' muted>
							Bắt buộc phải nhập tỉ lệ phí
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
							onChange={onChangeNewCPTBLForm}
						/>
						<Form.Text id='tlp-help' muted>
							Không Bắt buộc phải nhập tỉ lệ phí
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

export default AddCPTBLModal
