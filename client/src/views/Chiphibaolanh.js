import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Chiphitrienkhai = () => {
	return (
		<Row className='mt-5' style={{ marginRight: 0 }}>
			<Col className='text-center'>
				<Button
					variant='primary'
					href='https://www.youtube.com/c/HenryWebDev'
					size='lg'
				>
					Welcome Chi phí triển khai
				</Button>
			</Col>
		</Row>
	)
}

export default Chiphitrienkhai
