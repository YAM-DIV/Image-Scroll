let imageBig = document.getElementById('imagebig');
let allImge = document.querySelectorAll('.allimge img');




allImge.forEach(function(item) {

  item.addEventListener("click", function() {
    // item.scroll
    imageBig.src = item.src;
  });
});