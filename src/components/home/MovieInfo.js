const MovieInfo = ({icon, type, value}) => {
  return (
    <div className="mb-1">
        <span><img src={icon} className="inline w-5 mr-2 svgInfo"/>{type}{value}</span>
    </div>
    )
}

export default MovieInfo;