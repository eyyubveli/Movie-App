import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const MovieSkeleton = () => {
    return (
        <Box
            sx={{
                bgcolor: '#121212',
                p: 8,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            {[...Array(6)].map((_, index) => (
                <Box
                    key={index}
                    sx={{
                        width: 'calc(33.33% - 10px)',
                        bgcolor: '#121212',
                        mb: 2,
                    }}
                >
                    <Skeleton
                        sx={{
                            bgcolor: 'grey.900',
                            width: '100%',
                            height: 118,
                            marginBottom: '10px',
                            borderRadius: '10px'
                        }}
                        variant="rectangular"
                    />

                    <Skeleton
                        width="100%"
                        height="20px"
                        variant="text"
                        sx={{ bgcolor: 'grey.800', mb: 1 }}
                    />
                    <Box
                        className="movie-bottom-right"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Skeleton
                            width="20%"
                            height="20px"
                            variant="text"
                            sx={{ bgcolor: 'grey.800', mr: 1 }}
                        />
                        <Skeleton
                            width="20%"
                            height="20px"
                            variant="text"
                            sx={{ bgcolor: 'grey.800' }}
                        />
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default MovieSkeleton