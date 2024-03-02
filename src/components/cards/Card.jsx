import './cards.css'
import '../../App.css'

function Card({title, img, spotifyLink, youtubeLink}) {

  return (
    <div className="card">
        <img className="card-img" src={img} />
        <p>{title}</p>
        <div className="btn-container">
          <a href={spotifyLink}><button className="spotify-btn" target="_blank">Spotify Playlist</button></a>
          <a href={youtubeLink}><button className="spotify-btn youtube-btn" target="_blank">YouTube Playlist</button></a>
        </div>
    </div>
  )
}

export default Card
