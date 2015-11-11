
        function somma(array) { //It1
            
            var sum = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] < 0) {
                    break;
                }
                sum += array[i];

            }
            return sum;
        }
		
		 function ex_1_I(array){
		return somma(array);
		}

        function sommaDispari(n) { //It2
            var sum = 0;
          
            for (var i = 1; i <= n; i++) {
                sum += 1 + 2 * i;
            }
            return sum;
        }

        function ex_2_I(n){
		return sommaDispari(n);
		}


        function sommaArray(array) { //It3
            
            var somma = 0;
            var media = 0;
            for (var i = 0; i < array.length; i++) {
                somma += array[i];

            }
            media = somma / array.length;
            return media;
        }
     
		function ex_3_I(array){
		return sommaArray(array);
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

      	function ex_4_I(a,b){
		return sommaIntervallo(a,b);
		}


        function sommaPiù(a, b) { //It5
            var somma = 0;
            for (var i = 0; i < b; i++) {
                somma += a;
            }
            return somma;

        }
       function ex_5_I(a,b){
		return sommaPiù(a,b);
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
 
       function ex_6_I(a,b){
		return resto(a,b);
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
      
	  function ex_7_I(a,b){
		return potenza(a,b);
		}

        function matrix(array) { //It8
            var matrice = [[]];
            var conta = 0;
            var matriceRiga = Math.sqrt(array.length);
            for (var i = 0; i < matriceRiga; i++) {
                matrice[i] = [];
                for (var j = 0; j < matriceRiga; j++) {
                    matrice[i][j] = array[conta];
                    conta++;
                }
            }
            return matrice;


        }
    
	function ex_8_I(array){
		return matrix(array);
		}

        function invert(array) { //It9
            var lista = [];
            var lunghezza = array.length;
            for (var i = 0; i < array.length; i++) {
                lunghezza -= 1;
                lista[lunghezza] = array[i];
            }

            return lista;
        }
      function ex_9_I(array){
		return invert(array);
		}

        function replicate(a, n) { //It10
            var array = [];
            for (var i = 0; i < n; i++) {
                array[i] = a;
            }

            return array;

        }
        
function ex_10_I(a,n){
		return replicate(a,n);
		}

        function ordinate(array) { //It11

            var lista = [];
            var conta = 0;
            for (var i = 0; i < array.length; i++) {
                if (array[i] % 2 != 0) {
                    lista[conta] = array[i];
                    conta++;
                }
            }
            for (var j = 0; j < array.length; j++) {
                if (array[j] % 2 == 0) {
                    lista[conta] = array[j];
                    conta++;
                }
            }
            return lista;
        }
		
		function ex_11_I(array){
		return ordinate(array);
		}


		function mutuarSTN(array) { //Ri1
		    return rSTN(array, 0, 0);
		}
        function rSTN(array,a,b) { 
            if (a == array.length || array[a] < 0) return b;
            return rSTN(array, a + 1, b + array[a]);
        }
      
		    function ex_1_R(array){
		        return mutuarSTN(array);
		    }
		    
		    function sD(n) {   //Ri2
		        if (n == 0) {
		            return 0;
		        } else {
		            return 2 * n - 1 + sD(n - 1);
		        }
       
		    function ex_2_R(s){
		        return sD(s);
		    }
		   



		    function m(array, i, sum, medium) {  //Ri3
		        if (i > array.length) return medium;
		        return m(array, i + 1, sum + array[i], medium = sum / i);

		    }
     
		    function ex_3_R(array, i, sum, medium){
		        return m(array, i, sum, medium);
		    }

		    function sIntB(b, a) { //Ri4
		        if (b < a) return sIntA(b, a, 0);
		        else {
		            return sIntA(a, b, 0);
		        }
		    }
		    function sIntA(a, b, sum) { 
		        if (a > b) return sum;
		        return sIntA(a + 1, b, sum + a);
		        if (b < a) return sum;
		        return sInt(b + 1, a, sum + b);
		    }
		
		    function ex_4_R(b,a){
		        return sIntB(b, a)
		    }
      
		    function Per(a,b){ //Ri5
		        return sPer(a, b, 0, 0);
		    }
        
		    function sPer(a,b,i,sum){ 
		        if(i>=b) return sum;
		        return sPer(a,b,i+1,sum+a);
		
		    }
		    function ex_5_R(a,b){
		        return sPer(a,b);
		    }
      
	  
		    function sDiv(a,b,sum){  //Ri6
		        if(a<1) return a +" resto di 1 "; 
		        if(a==b) return "1 resto di 0";
		        if(a<b) return sum +" resto "+ a;
		        return sDiv(a-b,b,sum+1);
		
		    }
	 
		    function ex_6_R(a,b,sum){
		        return  sDiv(a,b,sum);
		    }
	
		    function sPot(a,b,i,sum){ //Ri7
		        if(a==1) return 1;
		        if (b==0) return 1;
		        if(i>=b) return sum;
		        sum = Per(sum,a);
		        return sPot(a,b,i+1,sum);
		
		    }

		    function ex_7_R(a,b,i,sum){
		        return  sPot(a,b,i,sum);
		    }
	
		    function change(array,i,array2){ //Ri9
	
		        if(i>=array.length) return array2;
		        array2[i] = array[array.length - 1 - i];
		        return change(array,i+1,array2);
		    }
	
		    function ex_9_R(array,i,array2){
		        return  change(array,i,array2);
		    }
	
		    function createArray(array,a,n,i){ //Ri10
		        if(i>=n) return array;
		        array[i]=a;
		        return createArray(array,a,n,i+1);

		    }

		    function ex_10_R(array,a,n,i){
		        return  createArray(array,a,n,i);
		    }
	
		    function soloD(array,i,k,array2){ //Ri11
		        if(i>array.length) return array2;
		        if(array[i]%2!=0){
		            array2[k]=array[i];
		            k++;
		        }
	
		        return soloD(array,i+1,k,array2);
		    }
	
		    function soloP(array,i,k,array2){
		        if(i>array.length) return array2;
		        if(array[i]%2==0){
		            array2[k]=array[i];
		            k++;
		        }
	
		        return soloP(array,i+1,k,array2);
		    }
		    function sumDandP(array){
		        return soloD(array,0,0,[])+soloP(array,0,0,[]);
		    }

		    function ex_11_R(array){
		        return  sumDandP(array);
		    }




