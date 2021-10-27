import React, {useState} from 'react';
import {InputGroup, Button, FormControl} from "react-bootstrap";

export const SearchBar = ({ onSearch }) => {

    return(
        <InputGroup className="mb-3">
            <input type="text"
                   onChange={(event) => onSearch(event.target.value)}
                   placeholder="Search Character"
                   className="form-control form-control-md"
            />
        </InputGroup>
    );
};


