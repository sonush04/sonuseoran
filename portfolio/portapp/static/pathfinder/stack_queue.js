// queue implementation
function Queue() {
   this.elements = [];
Queue.prototype.enqueue = function (e) {
   this.elements.push(e);
};
Queue.prototype.dequeue = function () {
    return this.elements.shift();
};
Queue.prototype.isEmpty = function () {
    return this.elements.length == 0;
};
Queue.prototype.peek = function () {
    return !this.isEmpty() ? this.elements[0] : undefined;
};
}
// stack implementation
function Stack() {
   this.dataStore = [];
   this.top = 0;
   this.push = push;
   this.pop = pop;
   this.peek = peek;
   this.clear = clear;
   this.length = length;
}
function push(element) {
   this.dataStore[this.top++] = element;
}
function peek() {
   return this.dataStore[this.top-1];
}
function pop() {
   return this.dataStore[--this.top];
}
function clear() {
   this.top = 0;
}
function length() {
   return this.top;
}
