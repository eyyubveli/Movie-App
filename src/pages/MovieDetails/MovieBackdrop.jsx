import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IMG_PATH_DESKTOP } from '../../constants/Api';

export const MovieBackdrop = ({ movie }) => {


    return (
        <div className="movie-backdrop">
            <LazyLoadImage
                src={IMG_PATH_DESKTOP + movie?.backdrop_path}
                alt={movie?.original_title}
                title={movie?.original_title}
                loading='lazy'
                effect='blur'
                width={"100%"}
                height={"100%"}
            />
        </div>
    );
}