

function merge(storm,darkness){
    var inferno = [];
    var tillStorm = 0;
    var tillDarkness = 0;
    var paradise = [];
    var count = 0;
    var countAfter = 1;
    for(tillStorm;tillStorm < storm.length;tillStorm++){
        inferno.push(storm[tillStorm]);
        tillDarkness++;
        if(tillDarkness == storm.length){
            tillDarkness = 0;
            for(tillDarkness; tillDarkness < darkness.length; tillDarkness++){
                inferno.push(darkness[tillDarkness]);
            }
        }
    } // hai solo creato un vettore di elementi non ordinati, ora vanno ordinati

    
    return inferno.sort();
    

}
