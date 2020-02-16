var movies = JSON.parse(movies);
console.log(movies);

$(document).ready(function(){
	for (var i = 0; i < movies.length; i++) {
		$("#background").append(
			`<div class="col-5" class="col-5${movies[i].uniqueid}">
			<div id="imgbox">
			${movies[i].image} style="height:300px">
			</div>
			<div id="textbox">
				<p id="movietitle">${movies[i].title}</p>
				<p id="moviedescrip">${movies[i].description}</p>
				<div id="rating">${movies[i].rating}></div>
			</div>
		</div>`
		)
	}
});