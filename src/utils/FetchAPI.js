const KEY = "b7f3e399a51c75a192171090ffeeea8e"

function fetch_themoviedb(path){
    return new Promise(resolve => {
        fetch('https://api.themoviedb.org/3/'+path+'?api_key='+KEY+"&language=fr")
        .then(response => response.json())
        .then(json => resolve(json));
    })
}

module.exports = { fetch_themoviedb }