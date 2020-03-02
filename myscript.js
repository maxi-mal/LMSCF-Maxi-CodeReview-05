var movies = JSON.parse(movies);
console.log(movies);

$(document).ready(function() {
    for (var i = 0; i < movies.length; i++) {
        $("#background").append(
            `<div class="col-5" class="col-5${movies[i].uniqueid}">
				<div class="col-5" id="imgbox">${movies[i].image} style="height:300px">
				</div>
					<div class="col-7" id="textbox">
						<p id="movietitle">${movies[i].title}</p>
						<p id="moviedescrip">${movies[i].description}</p>
							<div class="Likes">
						  		<div id="like">
						  			Like
						  		</div>
								<div id="thumb">
					  				<button id="clickme">
					  				<img src="img/greenthumb.png">
					  				</button
					  			</div>
					  			<div class="counter">
					  			</div>
						  	</div>				
					</div>
			</div>`
        )
    }

    var counter = $("button");
    var newValue = $(".counter");

    for (let i = 0; i < movies.length; i++) {

        $(counter[i]).on('click', function() {
            ++movies[i].like;
            $(newValue[i]).text(movies[i].like);
        });
    }


});