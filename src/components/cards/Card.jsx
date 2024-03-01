import './cards.css'

function Card({title, img}) {

  return (
    <div className="card">
        <img className="card-img" src={img} />
        <p>{title}</p>
        <div className="btn-container">
          <button className="spotify-btn">Spotify Playlist</button>
          <button className="spotify-btn youtube-btn">YouTube Playlist</button>
        </div>
    </div>
  )
}

export default Card
