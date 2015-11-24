
    function Stack() {
        this.array = [];
    }

    Stack.prototype.push = function (insert) {
        this.array.push(insert);
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

    function dec2bin(num) {
        var resto = new Stack();
        while (num > 0) {
            resto.push(num % 2);
            num = Math.floor(num / 2);
        }
        var binario = "";
        while (!resto.isEmpty()) {
            binario += "" + resto.pop() + "";
        }
        return binario;
    }