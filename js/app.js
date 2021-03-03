new Vue({
    el: "#root",
    data: {
        prova: "ok",
        // albums: [
        //     {
        //         "album": "New Jersey",
        //         "band": "Bon Jovi",
        //         "date": 1988,
        //         "cover": "https://via.placeholder.com/150.jpg",
        //         "genre": "rock" 
        //     },
        
        //     {
        //         "album": "Live at Wembley 86",
        //         "band": "Queen",
        //         "date": 1992,
        //         "cover": "https://via.placeholder.com/150.jpg",
        //         "genre": "rock" 
        //     },
        
        //     {
        //         "album": "Ten's Summoner's Tales",
        //         "band": "Sting",
        //         "date": 1993,
        //         "cover": "https://via.placeholder.com/150.jpg",
        //         "genre": "pop" 
        //     },
            
        //     {
        //         "album": "New Jersey",
        //         "band": "Bon Jovi",
        //         "date": 1988,
        //         "cover": "https://via.placeholder.com/150.jpg",
        //         "genre": "rock" 
        //     },
        
        //     {
        //         "album": "Live at Wembley 86",
        //         "band": "Queen",
        //         "date": 1992,
        //         "cover": "https://via.placeholder.com/150.jpg",
        //         "genre": "rock" 
        //     },
        
        //     {
        //         "album": "Ten's Summoner's Tales",
        //         "band": "Sting",
        //         "date": 1993,
        //         "cover": "https://via.placeholder.com/150.jpg",
        //         "genre": "pop" 
        //     },
        
        // ],
        albums: [],
    },

    mounted() {
        axios
        .get("http://localhost:8888/php-ajax-dischi/app/server.php")
        .then(resp => this.albums = [...resp.data])
        .catch(error => console.log(error))
    }

});

Vue.config.devtools = true;

// function filterByGenere($sourceArray, $genere) {
//     $res = [];
//     foreach($sourceArray as $album) {
//         // ..
//     }
//     return $res;
// }

// $genreQuery = $_GET['genre'];
// if(!empty($genreQuery)){
//     $dischi = filterByGenere($sourceArray, $genreQuery);
// }