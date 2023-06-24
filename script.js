const tombolCari = document.querySelector('.search-button')
tombolCari.addEventListener('click', function() {
    const inputKeyword = document.querySelector('.inputKeyword').value;
    fetch('http://www.omdbapi.com/?apikey=78c19bad&s=' + inputKeyword)
    .then(response => response.json())
    .then(response => {
        const film = response.Search;
        let cards= ''
        film.forEach( movie => cards += `<div class="col-md-4 my-3">
        <div class="card" style="width: 18rem;">
          <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
          <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
            <a href="#" class="btn btn-primary detailButton" data-bs-toggle="modal" data-bs-target="#showDetail" data-imdbid="${movie.imdbID}" >Lihat Detail</a>
          </div>
        </div>
     </div>`)

     const filmGallery = document.querySelector('.film-gallery');
      filmGallery.innerHTML = cards
      

      // ketika tombol detail di klik

      const tombolDetail = document.querySelectorAll('.detailButton');
      tombolDetail.forEach(btn => {
        btn.addEventListener('click', function() {
          const imdbid = this.dataset.imdbid
            fetch('http://www.omdbapi.com/?apikey=78c19bad&i=' + imdbid)
            .then(response => response.json())
            .then(film => {
              let cardDetail = `<div class="container-fluid">
              <div class="row">
                <div class="col">
                  <img src="${film.Poster}" alt="${film.Title}" class="image-fluid">
                </div>
                <div class="col">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${film.Title}</h4></li>
                    <li class="list-group-item"> <strong>Direction : </strong> ${film.Director} </li>
                    <li class="list-group-item"> <strong>Actors : </strong>${film.Actors}</li>
                    <li class="list-group-item"> <strong>Writer : </strong>${film.Writer}</li>
                    <li class="list-group-item"> <strong>Plot
                       : </strong> ${film.Plot}</li>
                  </ul>
                </div>
              </div>
            </div>`

            let detailFilm = document.querySelector('.detailFilm')
            detailFilm.innerHTML = cardDetail
            })
        })
      })
    })
         
    
})
