new Vue({
    el: "#root",
    data: {
        albums: [], // data di riferimento per visualizzazion album
        genres: [], // data di riferimento per menu select
        error404: false,
    },

    mounted() {
        axios
        .get("http://localhost:8888/php-ajax-dischi/app/server.php")
        .then(resp => {
            // creazione lista album da visualizzare
            this.albums = resp.data;

            // creazione data per menu select
            this.albums.forEach(album => {
               if(!this.genres.includes(album.genre)) {
                   this.genres.push(album.genre);
               } 
            });
        })
        .catch(error => console.log(error));

    },

    methods: {
        // chiamata al server per recuperare solo gli album con genere selezionato
        handleSelect(value) {
            this.error404 = false;
            if(value !== "all") {
                axios
                .get(`http://localhost:8888/php-ajax-dischi/app/server.php?genre=${value}`)
                .then(resp => this.albums = [...resp.data])
                .catch(error => (console.log(error), this.error404 = true));
            } else {
                axios
                .get(`http://localhost:8888/php-ajax-dischi/app/server.php`)
                .then(resp => this.albums = [...resp.data])
                .catch(error => console.log(error));
            }
        },
    }

});

Vue.config.devtools = true;