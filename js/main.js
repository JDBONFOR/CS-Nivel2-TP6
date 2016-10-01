$(document).ready(function(){
  var items = [];
  function getProduct(){
    return {
      name: $('#productName').val(),
      desc: $('#productDescription').val(),
      categ: $('#productCategory').val()
    }
  }
  function productHTMLStructure(item){
    return '<img src="http://placehold.it/350x150"/>' + '<div class="productItem"> <h2>' + item.name + '</h2>' + '<p>' + item.desc + '</p>' + '<p>' + item.categ + '</p> </div>';
  }
  function addClassErrorInput(){
    $('#productName').css('border', "1px solid red");
    $('#productDescription').css('border', "1px solid red");
  }
  function add(alfinal) {
    var item = getProduct();
    items.push(item);
    var li = $('<li/>');
    li.html(productHTMLStructure(item));
    if (alfinal) {
      $('#items-1').append(li);
    } else {
      $('#items-1').prepend(li);
    }
  }
  function addColor(pares, nopares) {
    var listElement = $('#items-1')[0].children;
    $('#items-1 li').removeClass();
    for (var i=0; i < listElement.length; i++) {
      if(i%2 == 0 && nopares) {
        $(listElement[i]).addClass("pair");
      } else if (i%2 == 1 && pares) {
        $(listElement[i]).addClass("nopair");
      } {}
    }
  }
  function removeList(){
    $('#items-1 li').remove();
  }
  function clearInputs(){
    $('#productName').val("");
    $('#productDescription').val("");
  }
  $('#btnAddFirst')[0].addEventListener('click', function(){
    if ($('#productName').val() && $('#productDescription').val()){
      add(false);
      clearInputs();
    } else {
      addClassErrorInput();
    }
  });
  $('#btnAddLast')[0].addEventListener('click', function(){
    if ($('#productName').val() && $('#productDescription').val()){
      add(true);
      clearInputs();
    } else {
      addClassErrorInput();
    }
  });
  $('#btnAddColorPair')[0].addEventListener('click', function(){
    addColor(true, false);
  });
  $('#btnAddColorNoPair')[0].addEventListener('click', function(){
    addColor(false, true);
  });
  $('#btnRemove')[0].addEventListener('click', function(){
    removeList();
  });
});
