module.exports = Heap;

function Heap(array) {
  this.sz = array.length;
  this.heap = array;
  for (var i = this.sz - 1; i >= 0; i--)
    this.heapify(i);
}

Heap.prototype.heapify = function(i) {
  var j = this.maxKids(i);
  if (j != -1 && j < this.sz)
  {
    this.swap(i, j);
    this.heapify(j);
  }
}

Heap.prototype.left = function(i) {
  var left = 2 * i + 1;
  if (left < this.sz)
    return this.heap[left];
  return -1;
}

Heap.prototype.right = function(i) {
  var right = 2 * i + 2;
  if (right < this.sz)
    return this.heap[right];
  return -1;
}

Heap.prototype.insert = function(value) {
  if (this.sz < this.heap.length)
    heap[this.sz] = value;
  this.bubble(this.sz++);
}

Heap.prototype.bubble = function(i) {
  if (i == 0) return;
  var parent = i / 2;
  if (this.heap[i] > this.heap[parent]) {
    this.swap(i, parent);
    this.bubble(parent);
  }
}

Heap.prototype.hasKids = function(i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  
  return (right < this.sz) || (left < this.sz);
}

Heap.prototype.maxKids = function(i) {
  var index = -1;
  var max = this.heap[i];
  if (this.hasKids(i))
  {
    var left = this.left(i);
    if (left > max) {
      index = 2 * i + 1;
      max = left;
    }
    var right = this.right(i);
    if (right > max) {
      index = 2 * i + 2;
    }
  }
  return index;
}

Heap.prototype.swap = function(a, b) {
  var temp = this.heap[a];
  this.heap[a] = this.heap[b];
  this.heap[b] = temp;
}

Heap.prototype.getMax = function() {
  if (this.sz > 0)
    return this.heap[0];
  return -1;
}

Heap.prototype.find = function(value) {
  var index = -1;
  for (var i = 0; i < this.sz; i++)
    if (this.heap[i] == value)
      return i;
  return index;
}

Heap.prototype.delete = function(value) {
  var i = this.fiind(value);
  
  if (i != -1 && i < this.sz)
  {
    this.swap(i, this.sz - 1);
    this.sz--;
    this.heapify(i);
  }
}

Heap.prototype.sort = function() {
  var restoreSz = this.sz;
  for (this.sz = this.sz - 1; this.sz > 0; this.sz--)
  {
    this.swap(0, this.sz);
    this.heapify(0);
  }
  this.sz = restoreSz;
}

Heap.prototype.print = function() {
  console.log(this.heap);
}

Heap.prototype.merge = function(array) {
  for (var i = 0; i < array.length; i++)
    this.heap[this.sz++] = array[i];
  for (var i = this.sz - 1; i >= 0; i--)
    this.heapify(i);
}
