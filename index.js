let a = document.getElementById("1");
let b = document.getElementById("2");
let c = document.getElementById("3");
let d = document.getElementById("4");
let e = document.getElementById("5");
let f = document.getElementById("6");
let g = document.getElementById("7");
let h = document.getElementById("8");
let y = document.getElementById("b");
let gr = document.getElementById("g");
let cl = document.getElementById("cl");

y.addEventListener("click", fun);
gr.addEventListener("click", gun);
cl.addEventListener("click", () => {
  x.value = "";
  z.value = "";
});
function gun() {
  z.value = "Disjoint Set Union(DSU)";
  x.value =
    " Disjoint Set Union or DSU. Often it is also called Union Find because of its two main operations.This data structure provides the following capabilities. We are given several elements, each of which is a separate set. A DSU will have an operation to combine any two sets, and it will be able to tell in which set a specific element is. The classical version also introduces a third operation, it can create a set from a new element.";
}
function fun() {
  if (
    (b.checked && d.checked && a.checked == false && c.checked == false) ||
    (b.checked &&
      d.checked == false &&
      a.checked == false &&
      c.checked == false) ||
    (b.checked == false &&
      d.checked &&
      a.checked == false &&
      c.checked == false)
  ) {
    z.value = "vector";
    x.value =
      "Vectors are the same as dynamic arrays with the ability to resize itself automatically when an element is inserted or deleted, with their storage being handled automatically by the container. Vector elements are placed in contiguous storage so that they can be accessed and traversed using iterators. In vectors, data is inserted at the end. Inserting at the end takes differential time, as sometimes the array may need to be extended. Removing the last element takes only constant time because no resizing happens. Inserting and erasing at the beginning or in the middle is linear in time.";
  } else if (b.checked || d.checked || a.checked || c.checked) {
    z.value = "set , map";
    x.value =
      "A Map is an associative container that store elements in a mapped fashion. Each element has a key value and a mapped value. No two mapped values can have the same key values. So, it is clear from above that, set contains the only key, and map contains a value with the key, both should have unique and sorted value.";
  } else if (
    (!e.checked && !f.checked && g.checked && !h.checked) ||
    (!e.checked && !f.checked && g.checked && h.checked)
  ) {
    z.value = "Sparse table";
    x.value =
      "A sparse table is a data structure that can answer some range query problems, such as range minimum query problem, in. time. In this tutorial, we'll show how to construct a sparse table and its applications on various range query problems.";
  } else {
    z.value = "Segment tree";
    x.value =
      "Segment Tree is used in cases where there are multiple range queries on array and modifications of elements of the same array. For example, finding the sum of all the elements in an array from indices L to R, or finding the minimum (famously known as Range Minumum Query problem) of all the elements in an array from indices L to R. These problems can be easily solved with one of the most versatile data structures, Segment Tree.";
  }
}
