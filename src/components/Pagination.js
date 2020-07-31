import React, {useState} from 'react';

import styled, { css } from "styled-components";

const Styles = styled.div `
.pagination {
    justify-content: center;
    margin:10px;
 }
 .page-link {
    color:#000;
    font-weight: bold;
 }
 
`;

export default function Pagination(props) {

    const {totalMovies, perPage, paginate} = props;

    const pageNumbers = [];

    const [currentPage, setcurrentPage] = useState(1)

    for (let i = 1; i <= Math.ceil(totalMovies / perPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (number) => {
        if(number > 0 && number <= pageNumbers.length){
            setcurrentPage(number);
            paginate(number);
        }
    }

    return(
        <Styles>
            <nav aria-label="Page navigation example">
                <div class="text-xs-center">
                    
                    <ul className="pagination text-center mx-auto">
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={() => handleClick(currentPage-1)}>Previous</a>
                        </li>
                        {
                            pageNumbers.map(number => (
                                <li className={`page-item ${number === currentPage ? 'active': ''}`} key={number}>
                                    <a className="page-link" href="#" onClick={() => handleClick(number)}>{number}</a>
                                </li>
                            ))
                        }
                        <li className="page-item">
                            <a className="page-link" href="#" onClick={() => handleClick(currentPage +1)}>Next</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Styles>
    )
}