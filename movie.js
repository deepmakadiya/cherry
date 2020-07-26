alert("Connected");

var movie = [
	{	name: "Inception",
		rate : 5,
		watched: true
	},

	{	name: "Intersatller",
		rate : 5,
		watched: true
	},

	{	name: "Dunkrick",
		rate : 4,
		watched: true
	},

	{	name: "Tenet",
		rate : 0,
		watched: false
	}
]

//function list(movie){
//	for(var i = 0; i < movie.length; i++){
//		movie.forEach(list){
//			if(watched === true ){
//			console.log("Yes ! you have already watched " + movie[i].name );
//			}
//			else{
//				console.log("NO ! You havn't watched " + movie[i].name); 
//			}
//		}
//	}
//}

movie.forEach(function(movie) {
	var result = "You have ";
	if(movie.watched === true){
		result += "watched ";
	}
	else{
		result += "not seen ";
	}
	result += "\"" + movie.name + "\" - " + movie.rate + " stars.";
	console.log(result)
})

   



