
                function ex_1_F(array) {
                    var sum = 0;
                    array.every( // fa la funzione che se in tutto l'array ..
                        function (x) {
                            if (x > 0) { // x sia maggiore di 0
                                sum += x; // somma
                                return x > 0; // condizione dell'every
                            }
                        });
                    return sum;
                }

                function sommaDispari(n) { //It2
                    var sum = 0;

                    for (var i = 0; i < n; i++) {
                        sum += 1 + 2 * i;
                    }
                    return sum;
                }

                function ex_2_F(n) {
                    return sommaDispari(n);
                }
            
                function ex_3_F(array) {
                    var sum = 0;
                    array.every( // fa la funzione che se in tutto l'array ..
                     function (x) {
                         if (x > 0) { // x sia maggiore di 0
                             sum += x; // somma
                             return x > 0; // condizione dell'every
                         }
                     });
                    return sum/array.length;
                }
                function sommaIntervallo(a, b) { //It4
                    var sum = 0;

                    var c = 0;
                    if (b < a) {
                        c = a;
                        a = b;
                        b = c;
                    }

                    for (a; a <= b; a++) {
                        sum += a;
                    }

                    return sum;
                }

                function ex_4_F(a, b) {
                    return sommaIntervallo(a, b);
                }


                function sommaPiù(a, b) { //It5
                    var somma = 0;
                    for (var i = 0; i < b; i++) {
                        somma += a;
                    }
                    return somma;

                }
                function ex_5_F(a, b) {
                    return sommaPiù(a, b);
                }


                function resto(a, b) { //It6
                    var c = 0;
                    var ris = 0;
                    for (a; a >= b; a -= b) {
                        c = a - b;
                        ris++;
                    }

                    return ris + " con il resto di " + c;
                }

                function ex_6_F(a, b) {
                    return resto(a, b);
                }

                function potenza(a, b) { //It7
                    if (b == 0) return 1;
                    if (b == 1) return a;
                    var ris = a;
                    for (var i = 2; i <= b; i++) {
                        ris = sommaPiù(ris, a);
                    }
                    return ris;
                }
                function ex_7_F(a, b) {
                    return potenza(a, b);
                }

                function ex_8_F(array) {
                    var matriceRiga = Math.sqrt(array.length);
                    
                    return array.filter(
                         function (x) {
                             
                             if (x < matriceRiga) {
                                 return true;
                             }
                             else {
                                 return array.filter(
                                     function (x) {
                                         if (x < array.length) {
                                             return true;                                         
                                         }
                                         else {
                                             return false;
                                         }

                                     });
                             }
                         });
                }
                

                function ex_9_F(array) {

                    return array.reverse();
                }
                function replicate(a, n) { //It10
                    var array = [];
                    for (var i = 0; i < n; i++) {
                        array[i] = a;
                    }

                    return array;

                }

                function ex_10_F(a, n) {
                    return replicate(a, n);
                }

                function ex_Pari(array) {
			  
                   return array.filter(
                        function (x) {
                            if (x % 2 == 0) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    );
                }
                function ex_Dispari(array) {
                    return array.filter(
                        function (x) {
                            if (x % 2 != 0) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    );
                }
                function ex_11_F(array) {
                    return ex_Pari(array).concat(ex_Dispari(array));
                }
               
			 
			