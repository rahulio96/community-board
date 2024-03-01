import './cards.css'

function Card({title, img}) {

  return (
    <div className="card">
        <p>{img}</p>
        <p>{title}</p>
        <button>Spotify Playlist</button>
    </div>
  )
}

export default Card
