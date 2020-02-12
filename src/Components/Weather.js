import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Spring } from 'react-spring/renderprops'

export class Weather extends Component {

    render() {
        return (
            <Spring
                from={{ opacity: 0, marginTop: -50 }}
                to={{ opacity: 1, marginTop: 0 }}
            >
                {props => (
                    <div style={props}>
                        <Container className='text-center text-white margin-control'>
                            <img src={this.props.weatherData.current.weather_icons}></img>
                            <Row>
                                <Col className='col-sm-12'>
                                    <p className='display-4'>{this.props.weatherData.location.name}, {this.props.weatherData.location.region}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='className=' col-sm-3>
                                </Col>
                                <Col className='col-sm-3'>
                                    <p className='display-5'>Temperature:</p>
                                </Col>
                                <Col className='col-sm-3'>
                                    <p className='display-5'>Feels Like: </p>
                                </Col>
                                <Col className='className=' col-sm-3>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='className=' col-sm-3>
                                </Col>
                                <Col className='col-sm-3'>
                                    <p className='display-4'>{this.props.weatherData.current.temperature}</p>
                                </Col>
                                <Col className='col-sm-3'>
                                    <p className='display-4'>{this.props.weatherData.current.feelslike}</p>
                                </Col>
                                <Col className='className=' col-sm-3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )}
            </Spring>
        )
    }
}

export default Weather
