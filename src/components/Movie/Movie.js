import React from 'react'
import './Movie.scss'
import Button from '@material-ui/core/Button';
import { FaTrash, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import PropTypes from 'prop-types'

const Movie = ({
    deleteMovie,
    setUserEvaluation,
    id,
    title,
    image,
    category,
    likes,
    dislikes,
    evaluation
}) => {
    
    let countLikes = evaluation === 'like' ? likes + 1 : likes
    let countDislikes = evaluation === 'dislike' ? dislikes + 1 : dislikes

    return (
        <div className='movie'>
            <h3>{title}</h3>
            <h4>{category}</h4>
            <div>
                <img src={image}  alt='films'/>
            </div>
            <div className='avis-clients'>
                <div onClick={() => setUserEvaluation(id, 'dislike')} className='dislike'>
                    <FaThumbsDown />
                </div>
                <div onClick={() => setUserEvaluation(id, 'like')} className='like'>
                    <FaThumbsUp />
                </div>
            </div>
            <div className='avis-count'>
                <p>{countDislikes} dislikes</p>
                <p>{countLikes} likes</p>
            </div>
            <Button
                variant="contained"
                style ={{
                    color: 'white',
                    backgroundColor: 'red',
                    marginTop: '20px',
                    padding: '10px',
                }}
                onClick={() => deleteMovie(id, category)}
            >
                Supprimer <FaTrash />
            </Button>
            <div className='avis-user'>
                {evaluation === 'like' ?
                    <span className='avis-like'>Vous avez aimez ce film</span> :
                    evaluation === 'dislike' ?
                        <span className='avis-dislike'>Vous n'aimez pas ce film</span> :
                        <span></span>
                }
            </div>
        </div>
    )
}

Movie.propTypes = {
    deleteMovie: PropTypes.func.isRequired,
    setUserEvaluation: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image:  PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    evaluation: PropTypes.string
}

export default Movie