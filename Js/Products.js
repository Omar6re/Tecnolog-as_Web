function Vista_aux()
{
   $.getJSON("Catalogo.json", function(data){
      console.log(data);
        $.each(data, function(i, field){
         $(".total-productos").html('');
         $(".total-productos").append(field.length + ' productos');
         $(".catalogo-productos").append('<div class="row"><div class="column-productos" id="1"></div><div class="column-productos" id="2"></div><div class="column-productos" id="3"></div></div>');

         for (var i = 0; i < field.length; i++) {
            var st = field[i].Nombre;
            var st_aux = st.split(' ').join('%20');
            if(i % 3 == 0)
            {
               $(".column-productos#1").append('<div id="idcel" class="container-cel' + i +'">');
               $(".column-productos#1 .container-cel"+ i).append('<img class="cat-cel" src=img/' + st_aux + '.jpg>');
               $(".column-productos#1 .container-cel"+ i).append('<div class="name">' + st + '</div>');
               $(".column-productos#1 .container-cel"+ i).append('<div class="price">' + field[i].Precio + '</div');
               $(".column-productos#1 .container-cel"+ i).append('<div class="inc">' + field[i].Fabricante + '</div');
               $(".column-productos#1 .container-cel"+ i).append('<div class="alm">' + field[i].Almacenamiento + '</div');
               $(".column-productos#1 .container-cel"+ i).append('Caracteristicas: <br>');
               for(var j = 0; j < field[i].Caracteristicas.length; j++)
               {
                  $(".column-productos#1 .container-cel"+ i).append('<li class=caract>' + field[i].Caracteristicas[j] + '</li>');
               }
               $(".column-productos#1").append('</div>');
            }
            if(i % 3 == 1)
            {
               $(".column-productos#2").append('<div id="idcel" class="container-cel' + i +'">');
               $(".column-productos#2 .container-cel"+i).append('<img class="cat-cel" src=img/' + st_aux + '.jpg>');
               $(".column-productos#2 .container-cel"+i).append('<div class="name">' + st + '</div>');
               $(".column-productos#2 .container-cel"+i).append('<div class="price">' + field[i].Precio + '</div');
               $(".column-productos#2 .container-cel"+i).append('<div class="inc">' + field[i].Fabricante + '</div');
               $(".column-productos#2 .container-cel"+i).append('<div class="alm">' + field[i].Almacenamiento + '</div');
               $(".column-productos#2 .container-cel"+i).append('Caracteristicas: <br>');
               for(var j = 0; j < field[i].Caracteristicas.length; j++)
               {
                  $(".column-productos#2 .container-cel"+i).append('<li class=caract>' + field[i].Caracteristicas[j] + '</li>');
               }
               $(".column-productos#2").append('</div>');
            }
            if(i % 3 == 2)
            {
               $(".column-productos#3").append('<div id="idcel" class="container-cel' + i +'">');
               $(".column-productos#3 .container-cel"+i).append('<img class="cat-cel" src=img/' + st_aux + '.jpg>');
               $(".column-productos#3 .container-cel"+i).append('<div class="name">' + st + '</div>');
               $(".column-productos#3 .container-cel"+i).append('<div class="price">' + field[i].Precio + '</div');
               $(".column-productos#3 .container-cel"+i).append('<div class="inc">' + field[i].Fabricante + '</div');
               $(".column-productos#3 .container-cel"+i).append('<div class="alm">' + field[i].Almacenamiento + '</div');
               $(".column-productos#3 .container-cel"+i).append('Caracteristicas: <br>');
               for(var j = 0; j < field[i].Caracteristicas.length; j++)
               {
                  $(".column-productos#3 .container-cel"+i).append('<li class=caract>' + field[i].Caracteristicas[j] + '</li>');
               }
               $(".column-productos#3").append('</div>');
            }
         }
        });
    });
}

function Vista_aux2()
{
   $.getJSON("Catalogo.json", function(data){
      console.log(data);
         $.each(data, function(i, field){
            $(".total-productos").html('');
            $(".total-productos").append(field.length + ' productos');
            for (var i = 0; i < field.length; i++) {
               $('.catalogo-productos').append('<div class="row v2' + i +'">');
               var st = field[i].Nombre;
               var st_aux = st.split(' ').join('%20');
               $('.catalogo-productos .v2'+i).append('<div class="column left"> <img class="cat-cel2" src=img/' + st_aux + '.jpg></div>');
               $('.catalogo-productos .v2'+i).append('<div class="column right"> <div class="name2">' + st + '</div>');
               $('.catalogo-productos .v2'+i + ' .right').append('<div class="price2">' + field[i].Precio + '</div');
               $('.catalogo-productos .v2'+i + ' .right').append('<div class="inc2">' + field[i].Fabricante + '</div');
               $('.catalogo-productos .v2'+i + ' .right').append('<div class="alm2">' + field[i].Almacenamiento + '</div');
               $('.catalogo-productos .v2'+i + ' .right').append('Caracteristicas: <br>');
               for(var j = 0; j < field[i].Caracteristicas.length; j++)
               {
                  $('.catalogo-productos .v2'+i + ' .right').append('<li class=caract>' + field[i].Caracteristicas[j] + '</li>');
               }
               $('.catalogo-productos').append('</div></div><hr>');
            }
         });
         /*
<div class="row">
      <div class="column left">
      </div>
      <div class="column right"
      </div
</div>
         */
    });
}

function Products()
{

}

Products.prototype.View = function(windowName){

   switch(windowName)
   {
      case 'Vista1':
         $(".catalogo-productos").html("");
         Vista_aux();
         break;
      case 'Vista2':
         $(".catalogo-productos").html("");
         Vista_aux2();
         break;
      }
}

var products = new Products();