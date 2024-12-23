import React, { useEffect, useState } from 'react';
import useFetchMovies from '../../hooks/useFetchMovies';
import { RequestsForDetails } from '../../constants/Api';
import MovieSliderContainer from '../../components/MovieSlider/MovieSliderContainer';
import "./TopRatedMovies.scss";
const TopRatedMovies = () => {
    const [page, setPage] = useState(1);
    const { data, loading } = useFetchMovies(RequestsForDetails(page).RequestTopRatedMovies);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && data?.total_pages && newPage <= data.total_pages) {
            setPage(newPage);
        }
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
        return () => clearTimeout(timeout);
    }, [page]);



    const generatePaginationButtons = () => {
        if (!data?.total_pages) return null;

        const buttons = [];
        const totalPage = data.total_pages;

        for (let i = 1; i <= 3; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={page === i ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }

        const startPage = Math.max(4, page - 1);
        const endPage = Math.min(totalPage, page + 2);

        if (page > 4) {
            buttons.push(
                <button key="left-ellipsis" disabled>
                    ...
                </button>
            );
        }


        for (let i = startPage; i < endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={page === i ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }

        if (page < totalPage - 4) {
            buttons.push(
                <button key="right-ellipsis" disabled>
                    ...
                </button>
            );
        }

        if (page <= totalPage) {
            buttons.push(
                <button
                    key={totalPage}
                    onClick={() => handlePageChange(totalPage)}
                    className={page === totalPage ? 'active' : ''}
                >
                    {totalPage}
                </button>
            );
        }

        return buttons;
    };

    return (
        <section className="top-rated-movies">
            <div className="container">
                {data && data.results.length > 0 && (
                    <MovieSliderContainer type="top-rated-movies" data={data} loading={loading} />
                )}
                {
                    !loading && (
                        <div className="pagination">
                            <button
                                onClick={() => handlePageChange(page - 1)}
                                disabled={page === 1}
                            >
                                {"<"}
                            </button>
                            {generatePaginationButtons()}
                            <button
                                onClick={() => handlePageChange(page + 1)}
                                disabled={page === data?.total_pages}

                            >
                                {">"}
                            </button>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default TopRatedMovies;
