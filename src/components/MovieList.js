import React from 'react';
import styled, { css } from "styled-components"
import { Form } from 'react-bootstrap';

const Styles = styled.div `
.card {
   background-color:#000;
}
.card-title, .card-subtitle {
    color:#fff;
    font-size:1.5rem;
    text-align:center;
}
.card-subtitle {
   color:#FF4500;
}
.card-link {
    color:#fff;
    text-align:center;
    margin:40px;

}
.icon {
    color:#fff;
}
 
`;


export default function MovieList(props) {

    const { movies, handleLikes, handleRemove} = props;
    
    return(
        <Styles>

             <div className="container" style={{ backgroundColor: "#E0E0E0",width:"100%",overflow:"hidden", marginTop:"30px"}}>

            <div className="row row-cols-1 row-cols-md-4 justify-content-md-center"  >
                {movies.map((item,index) => {
               
               return(<div className="card m-3" key={index}>             
                    <span onClick={() => handleRemove(item)} className="icon"><i className="fa fa-times " aria-hidden="true"></i></span>

                    <div className="card-body" >
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-subtitle mb-2">{item.category}</h6>
                        <a href="#" className="card-link"><i className="fa fa-thumbs-up" onClick={() => handleLikes(item, "likes")}></i> {item.likes}</a>
                        <a href="#" className="card-link"><i className="fa fa-thumbs-down" onClick={() => handleLikes(item, "dislikes")}></i> {item.dislikes}</a>
                    </div>
                </div>)
})}
            </div>
            </div>
        </Styles>
    )
}