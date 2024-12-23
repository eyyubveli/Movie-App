export const MovieGenres = ({ genres }) => (
    <div className="genres">
        {genres.map((genre, index) => (
            <button key={index} type="button">
                {genre}
            </button>
        ))}
    </div>
);