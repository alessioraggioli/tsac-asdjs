
function Stack(){
    this.array = [];
}

Stack.prototype.push = function(x){
    this.array.push(x);
}

Stack.prototype.pop = function(){
    return this.array.pop();
}

Stack.prototype.peek = function(){
    return this.array[this.array.length - 1];
} 

Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}


function Queue(){
    this.queue = [];
}

Queue.prototype.enqueue = function(x){
    this.queue.unshift(x);
}

Queue.prototype.dequeue = function(){
    return this.queue.pop();
}

Queue.prototype.front = function(){
    return this.queue[this.queue.length - 1];
}

Queue.prototype.size = function(){
    return this.queue.length;
}

Queue.prototype.isEmpty = function(){
    return this.size() == 0;
}


function PriorityQueue(){
    this.queue = [];
}

function QueueItem(){
    this.item = "?";
    this.priority = 0;
}

function QueueItem(v, p){
    this.item = v;
    this.priority = p;
}

PriorityQueue.prototype.dequeue = function(){
    return this.queue.pop();
}

PriorityQueue.prototype.front = function(){
    return this.queue[this.queue.length - 1];
}

PriorityQueue.prototype.size = function(){
    return this.queue.length;
}

PriorityQueue.prototype.isEmpty = function(){
    return this.size() == 0;
}

PriorityQueue.prototype.enqueue = function(x){
    for (var i = 0; i < this.size() && x.priority > this.queue[i].priority; i++);
    this.queue.splice(i, 0, x);
}

function PriorityQueueCallback(){
    this.queue = [];
}

PriorityQueueCallback.prototype.dequeue = function(){
    return this.queue.pop();
}

PriorityQueueCallback.prototype.front = function(){
    return this.queue[this.queue.length - 1];
}

PriorityQueueCallback.prototype.size = function(){
    return this.queue.length;
}

PriorityQueueCallback.prototype.isEmpty = function(){
    return this.size() == 0;
}

PriorityQueueCallback.prototype.callback = function(p1, p2){
    return p1 > p2 ? 1 : p1 == p2 ? 0 : -1;
}

PriorityQueueCallback.prototype.enqueue = function(x){
    for (var i = 0; i < this.size() && x.priority > this.queue[i].priority; i++);
    this.queue.splice(i, 0, x);
}

