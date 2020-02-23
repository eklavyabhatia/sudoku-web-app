var arr = {}
for (var i = 0; i < 81; i++) {
    arr[i] = document.getElementById(i);
    arr[i].innerText = i
}

console.log(arr)