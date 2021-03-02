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
        .get("../app/server.php")
        .then(
            function(resp) {

                // assegna i dati recuperati a albums
                // this.albums = resp.data;
                console.log(resp);

            }
        )
    }

})