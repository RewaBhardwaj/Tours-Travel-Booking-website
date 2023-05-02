import { useContext } from "react"
import { Col, Container, Row, Table } from "reactstrap";
import { AuthContext } from "../../Context/AuthContext"
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const AllBookings = () => {
    const { data: bookings, loading, error } = useFetch(
        `${BASE_URL}/booking`
    );
    const user = useContext(AuthContext).user;
    return (
        <>
            {
                user.role === 'admin'
                    ?
                    <>
                        {loading && <h4>Loading</h4>}
                        {error && <h4>{error}</h4>}
                        {!loading && !error &&
                            <Container>
                                <Row>
                                    <Col lg='10' className="offset-sm-1">
                                        <Table striped>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Guests</th>
                                                    <th>Phone Number</th>
                                                    <th>Tour Site</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    bookings.map((item, idx) => {
                                                        return (
                                                        <tr>
                                                            <th scope="row">{idx+1}</th>
                                                            <td>{item.fullName}</td>
                                                            <td>{item.guestSize}</td>
                                                            <td>{item.phone}</td>
                                                            <td>{item.tourName}</td>
                                                        </tr>
                                                    )})
                                                }
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Container>}
                    </>
                    :
                    'You are Not Authorized'
            }
        </>
    )
}

export default AllBookings
