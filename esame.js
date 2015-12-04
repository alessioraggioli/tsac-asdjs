

        function Stack() { 
            this.array = [];
        }

        Stack.prototype.push = function (x) {
            this.array.push(x);
        }

        Stack.prototype.pop = function () {
            return this.array.pop();
        }

        Stack.prototype.peek = function () {
            return this.array[this.array.length - 1];
        }

        Stack.prototype.isEmpty = function () {
            return this.array.length == 0;
        }

        function initialArray() {
            var seed = 1;
            function random() {
                var x = Math.sin(seed++) * 10000;
                return Math.floor(x);
            }

            var a = [];
            var sum = 0;

            for (var i = 0; i < 10000; i++) {
                a.push(random());
            }
            for (var k = 0; k < a.length; k++) {
                sum += a[k];//11340
            }
            return a;

        }

        function f5070(a) {
            var count = 0;
            if (a.length == 0) {
                return 0;
            }
            if (a[0] == 5070)
                return 1 + f5070(a.slice(1));
            else
                return 0 + f5070(a.slice(1));
           
        }
        


        function radice(a) {
            var sum = 0;
            var arrayp = a.filter(function (x) {
                if (x % 2 == 0 && x >= 0)
                    return x;

            })
            var arrayq = arrayp.map(function (x) {

                return x * x;

            })
            var arrays = arrayq.reduce(  // il reduce non me lo legge non capisco perchè...
                             function (a, x) {
                                 return sum = a + x;
                             })
            return Math.sqrt(sum);
        };
       


        /*
        Esercizio Ricorsione (15 punti)
        Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo ricorsivo non di coda in javascript che restituisca il numero di elementi presenti in A che corrispondono al valore 5070.
        */

        /*Esercizio filter/map/reduce (15 punti)
        Dato l’array A creato dalla funzione initialArray() sviluppare un algoritmo in javascript che restituisca la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari.
        Si implementi l’agoritmo utilizzando almeno una volta tutti i seguenti metodi dell’oggetto Array: filter, map e reduce.
        */

        /*
        Tree (15 punti)
        Si implementi un albero binario di ricerca in javascript e si inseriscano gli elementi contenuti nell’array A[0..n-1], ottenuto da initialArray(), nell’ordine dall’indice 0 all’indice n-1.
        Si calcoli, mediante l’implementazione di un algoritmo ricorsivo, il valore massimo all’interno dell’albero.
        */

        /*Esercizio 3*/

        function ev(stringa) {
            var array = stringa.split(' ');
            var sS = new Stack();
            var sV = new Stack();
            var operA;
            var operB;
            for (var i = 0; i < array.length; i++) {
                if (array[i] != ')' && array[i] != '(') {
                    if (array[i] == '+' || array[i] == '-' || array[i] == '*' || array[i] == '/')
                        sS.push(array[i]);
                    else
                        sV.push(parseInt(array[i]));
                }
                else if (array[i] == ')') {
                    operA = sV.pop();
                    operB = sV.pop();
                    switch (sS.pop()) {
                        
                        case '*':
                            sV.push(operB * operA);
                            break;
                        case '/':
                            sV.push(operB / operA);
                            break;
                        case '+':
                            sV.push(operB + operA);
                            break;
                        case '-':
                            sV.push(operB - operA);
                            break;
                    }
                }
            }
            return sV.pop();
        }

        function Node(i, left, right) {
            this.item = i;
            this.l = left;
            this.r = right;
        }

        function BST() {
            this.root = null;

        }

        BST.prototype.addNode = function (currentNode, newNode) {
            if (newNode.item < currentNode.item) {
                if (currentNode.l == null)
                    currentNode.l = newNode;
                else
                    this.addNode(currentNode.l, newNode);
            } else {
                if (currentNode.r == null)
                    currentNode.r = newNode;
                else
                    this.addNode(currentNode.r, newNode);
            }
        }

        BST.prototype.add = function (item) {
            if (this.root == null) {
                this.root = new Node(item, null, null);
            } else {
                this.addNode(this.root, new Node(item, null, null));
            }
        }

        var max = 0;
        var container = 0;

        function tree(a) {
            var albero = new BST();

            if (a.length == 0) {
                return max;
            }

            albero.add(a[0] + tree(a.slice(1)));
            container = a[0];
            if (container > max) {
                max = container;
            }
            return max;
        }



