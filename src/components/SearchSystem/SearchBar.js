import React from 'react';
import './css/SearchBar.css';

export default function SearchBar(){

    return(
        <div className="SearchContainer">
            <select id="shi" name="shi"><option>시</option></select>
            <select id="goo" name="goo"><option>구</option></select>
            <select id="dong" name="dong"><option>동</option></select>
            <button><i className="bi bi-search"></i></button>
        </div>
    )
}