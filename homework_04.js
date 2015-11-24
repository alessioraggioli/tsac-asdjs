    function rpn(stringa) {
        var stack = new Stack();
        var z = stringa.split(" ");
        for (var i = 0; i < z.length; i++) {
            var ris = 0;
            switch (z[i]) {
                case "+":
                    ris = stack.pop();
                    ris += stack.pop();
                    stack.push(ris);
                    break;
                case "-":
                    ris = stack.pop();
                    ris -= stack.pop();
                    stack.push(ris);
                    break;
                case "*":
                    ris = stack.pop();
                    ris *= stack.pop();
                    stack.push(ris);
                    break;
                case "/":
                    ris = stack.pop();
                    ris /= stack.pop();
                    stack.push(ris);
                    break;
                case "^":
                    ris = stack.pop();
                    ris = Math.pow(ris, stack.pop());
                    stack.push(ris);
                    break;

                default:
                    stack.push(parseInt(z[i]));
            }
        }
        return stack.pop();
    }