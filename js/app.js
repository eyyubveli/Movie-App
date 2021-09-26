const input = document.getElementById('search');
const btn = document.getElementById('btn');
const imgUrl = 'https://image.tmdb.org/t/p/w500'
const seachUrl = 'https://image.tmdb.org/t/p/w500';
const message = document.getElementById('message');
const notFound = document.getElementById('found');
const loader = document.querySelector("#loading");
const banner = document.querySelector('.banner');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
var pageNumbers = document.querySelector(".page-numbers")
let pagination = document.querySelector('.pag');
let pageNumber = 1;
let totalPage = '';

function getMovies() {
    const key = '78b3aaa97f72398b45abb1963ae299b2';
    const baseUrl = 'https://api.themoviedb.org/3';

    if (input.value === '') {

        message.innerHTML = "Bu hissə boş buraxıla bilməz"

        setTimeout(function() {
            message.innerHTML = '';
        }, 2500)

        return;
    }

    fetch(`${baseUrl}/search/movie?api_key=${key}&language=tr-TR&query=${input.value}&page=${pageNumber}`)
        .then(response => response.json())
        .then(data => {
            movieDetail(data);
            //colden(data.total_pages);
        })
        .catch(err => {
            found()
        })


    loading();
}

function loading() {
    loader.classList.add('active');

    setTimeout(function() {
        loader.classList.remove('active');
    }, 4500)
}

function found() {
    notFound.innerHTML = 'Bu adda bir film tapılmadı'

    setTimeout(function() {
        notFound.innerHTML = ''
    }, 2500)

}

function hide() {
    loader.classList.remove('active');
}

function movieDetail(result) {
    result.results.forEach(movie => {
        let div = document.createElement('div');
        div.className = 'movie-list';
        let img = document.createElement('img');
        img.className = 'img'
        img.src = `${seachUrl}${movie.poster_path}`;
        img.title = `${movie.original_title}`
        let divOverlay = document.createElement('div');
        let h4 = document.createElement("h4");
        let small = document.createElement('small');
        let date = document.createElement("time");
        let vote = document.createElement('span');
        vote.textContent = movie.vote_average;
        let voteTitle = document.createElement('div');
        voteTitle.className = 'vote-title'
        divOverlay.className = 'overlay';
        h4.textContent = movie.original_title;
        small.textContent = movie.overview;
        date.textContent = `${movie.release_date}`;
        voteTitle.appendChild(h4);
        voteTitle.appendChild(vote);
        divOverlay.appendChild(voteTitle);
        divOverlay.appendChild(small);
        divOverlay.appendChild(date);
        if (img.src === seachUrl + null) {
            img.src = "./img/not_found.gif";
        } else {
            img.src = `${seachUrl}${movie.poster_path}`
        }

        //`${seachUrl}${movie.poster_path}`
        div.appendChild(img);
        div.appendChild(divOverlay);
        document.getElementById('movie-inner').appendChild(div);

    });

    hide();
    pageNumbers.classList.add('active')
    pagination.textContent = result.total_pages;
    totalPage = result.total_pages;
    console.log(result);
    console.log(pageNumber);
}


btn.addEventListener('click', (e) => {
    pageNumber = 1;
    getMovies();
    pageNumbers.classList.remove('active')
    document.getElementById('movie-inner').innerHTML = '';
    e.preventDefault();
})

function random() {

    var number = Math.floor(Math.random() * 4);

    banner.style.backgroundImage = `${images[number].gradient} , url(${images[number].src})`;

}

next.addEventListener('click', () => {
    document.getElementById('movie-inner').innerHTML = '';

    if (pageNumber < totalPage) {
        pageNumber++;
    }
    getMovies();

})

previous.addEventListener('click', () => {
    document.getElementById('movie-inner').innerHTML = '';
    pageNumber--;
    if (pageNumber < 1) {
        pageNumber++;
    }
    getMovies();




})

window.addEventListener('load', () => {
    random();
});