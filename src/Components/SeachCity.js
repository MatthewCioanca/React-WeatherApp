import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Styles/SearchCity.css';
export class SeachCity extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className='text-center text-white'>
                        <form className='form-group' onSubmit={this.props.connectWeatherAPI}>
                            <p className='display-4 font-weight-bold mb-4'>City</p>
                            <input onChange={this.props.handleChange.bind(this)} className='form-control text-center search-bar' width='%' type='text'></input>
                            <div className='text-center margin-control'>
                                <button type='Submit' className='btn btn-outline-light text-center btn-lg'>Search</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SeachCity
