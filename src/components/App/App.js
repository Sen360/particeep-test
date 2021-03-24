import React, { useEffect, useState } from 'react'
import './App.scss'
import { movies$} from '../../data/movies'
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import PropTypes from 'prop-types'
import {Paper} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";


const App = () => {
    const theme = createMuiTheme({
        palette: {
          type: "dark"
        }
      });

    useEffect(() => {
        movies$
            .then(
                movies => {
                    setMoviesList(movies)
                }
            )
            .catch(error => console.log(error))
    }, [])

    const [moviesList, setMoviesList] = useState([])
    const [categoriesList, setCategoriesList] = useState([])
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        setCategoriesList([...new Set(moviesList.map(movie => movie.category))])
    }, [moviesList])

    return (
        <ThemeProvider theme={theme}>
            <Paper className="dark-theme">
            <Navbar/>
            <Header categoriesList={categoriesList} />
            <MovieList
                moviesList={moviesList}
                setMoviesList={setMoviesList}
                setTotalPages={setTotalPages}
                categoriesList={categoriesList}
                setCategoriesList={setCategoriesList}
            />
            <Footer totalPages={totalPages} />
            </Paper>
        </ThemeProvider>
    )
}

App.propTypes = {
    moviesList: PropTypes.arrayOf(PropTypes.object),
    setMoviesList: PropTypes.func,
    categoriesList: PropTypes.arrayOf(PropTypes.string),
    totalPages: PropTypes.number,
    setTotalPages: PropTypes.func
}

export default App