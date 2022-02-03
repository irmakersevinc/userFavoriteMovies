import React, {Component} from 'react'
import './App.css';

class FavoriteMovies extends Component {
  //example output: Jane Cruz's favorite movie is Planet Earth 1.
  findFavoriteMovie = (id) => {
    var userProfile = this.props.Profiles.filter((profile) => (
  							profile.userID == id												
  						))
    var userFavMovie = Object.keys(this.props.Movies).filter((movie) => (
      						this.props.Movies[movie].id == userProfile[0].favoriteMovieID
      					))
    return this.props.Movies[userFavMovie].name;
  }
	render() {
      return (
        <ol className="movies-list">
          {this.props.Users && Object.keys(this.props.Users).map((person,key)=> (
              <li key={key} className="user-fav-movies">
                  <div className="user-detail">
                      <p>{this.props.Users[person].name}'s favorite movie is {this.findFavoriteMovie(this.props.Users[person].id)}</p>
                  </div>
              </li>
      		))}
        </ol>
      );
    }
}

export default FavoriteMovies;