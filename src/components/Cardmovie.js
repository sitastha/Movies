import React, {useEffect,useState} from 'react';
import {movies$} from "../data/Movies"
import '.././App.css';

import MovieList from './MovieList';
import Pagination from './Pagination';




export default function Cardmovie() {

    const[movies, setMovies] = useState([]);

    const [perPage, setPerPage] = useState(4);

    const [currentPage, setCurrentPage] = useState(1);

    const [categories, setcategories] = useState([]);

    const [moviesOriginal, setmoviesOriginal] = useState([])

    useEffect(() => {
        movies$.then(data=>{
            setmoviesOriginal(data);
            setMovies(data);
            var cats = data.map(item => item.category)
                        .filter((value, index, self) => self.indexOf(value) === index);
            setcategories(cats);
       });
    },[]);


    const handleRemove = (item) => {
      
        var newData = movies.filter((i) => {
            return i.id !== item.id;
        });
        setMovies(newData);

    };


    const selectItem = (category) => {
        if(category !== ""){
            var categoryMovies = moviesOriginal.filter((i) => i.category === category);
            setMovies(categoryMovies);
        }else{
            movies$.then(data=>{
                setMovies(data);
            });
        }
    }


    const handleLikes = (item, action) => {
        var newData = [];
        movies.map((i) => {
            if(i.id === item.id && action === "likes"){
                i.likes = i.likes + 1;
            }
            if(i.id === item.id && action === "dislikes"){
                i.dislikes = i.dislikes + 1;
            }
            newData.push(i);
        });
        setMovies(newData);
    };

    const indexOfLastMovie = currentPage * perPage;
    const indexOfFirstMovie = indexOfLastMovie - perPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    


    return (
        <div className="drop" style={{ }}>

            <div class="input-group mb-3 justify-content-md-center" style={{width: "50%", position: "absolute", top: "4%", right: "28%"}}>
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary dropdown-toggle" style={{color:"white"}} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#" onClick={() => selectItem("")}>All</a>
                        {
                            categories.map((value, index )=> {
                                return(
                                    <a class="dropdown-item" href="#" key={index} onClick={() => selectItem(value)}>{value}</a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            <MovieList 
                movies={currentMovies} 
                handleLikes={handleLikes} 
                handleRemove={handleRemove} />
         
            <Pagination
                 perPage={perPage}
                 totalMovies={movies.length}
                 paginate={paginate}
            />

        </div>
  
    )
}

