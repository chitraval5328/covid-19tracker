import React, { useState, useEffect } from 'react';
import { Select, DatePicker, Form, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { fetchCountries } from '../apiCall/apiCalls';
const { Option } = Select;
const CountryDatePicker = ({ handleCountryChange }) => {
    console.log(handleCountryChange, "prop")
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);

    return (
        <Form className="ant-advanced-search-form">


            <Select showSearch
                style={{ width: 400 }}
                defaultValue=""
                onChange={handleCountryChange}
            >
                <Option value="">Select Country</Option>
                {countries.map((country, i) => <Option key={i} value={country}>{country}</Option>)}
            </Select>

        </Form>
    );
};

export default CountryDatePicker;