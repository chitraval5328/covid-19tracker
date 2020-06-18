import React from 'react';
import { Select, Typography, Form, Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import CountUp from 'react-countup';
// import { fetchCountries } from '../apiCall/apiCalls';
// const { Option } = Select;
const colorStyle = { color: "white" }
const styleInfected = { boxShadow: '5px 7px #888888', background: '#0092ff', color: 'white', padding: '8px 0', borderRadius: '10px', marginTop: '35px' };
const styleRecoverd = { boxShadow: '5px 7px #888888', background: '#90bf52', color: 'white', padding: '8px 0', borderRadius: '10px', marginTop: '35px' };
const styleDeath = { boxShadow: '5px 7px #888888', background: '#d97171', color: 'white', padding: '8px 0', borderRadius: '10px', marginTop: '35px' };
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div>
            <Row gutter={{ xs: 12, md: 12 }} justify="center" >
                <Col className="gutter-row" span={4}>
                    <Card title="Infected" style={styleInfected} >
                        <Typography variant="h5" component="h2" style={colorStyle}>
                            <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary" style={colorStyle}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p" style={colorStyle}>
                            <br />
                        Total active cases of COVID-19.
                        </Typography>
                    </Card>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Card title="Recoverd" style={styleRecoverd} >
                        <Typography variant="h5" component="h2" style={colorStyle}>
                            <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary" style={colorStyle}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p" style={colorStyle}>
                            <br />
                            Total recoveries from COVID-19.
                        </Typography>
                    </Card>
                </Col>
                <Col className="gutter-row" span={4}>
                    <Card title="Death" style={styleDeath} >
                        <Typography variant="h5" component="h2" style={colorStyle}>
                            <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
                        </Typography>
                        <Typography color="textSecondary" style={colorStyle}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2" component="p" style={colorStyle}>
                            <br />
                                Total deaths caused by COVID-19.
                        </Typography>

                    </Card>
                </Col>
            </Row>

        </div>
    );
};
export default Cards;
