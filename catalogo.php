<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Cat&aacute;logo</title>
	<link rel="shortcut icon" href="img/icon.ico"/>
	<link href="fontAwesome/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" href="Css/index.css">
	<script src="Js/jquery-3.3.1.min.js"></script>
	<script src="Js/Products.js" type="text/javascript"></script>
	<script src="Js/index.js" type="text/javascript"></script>
</head>




<!--<div></div>
<pre id="json"></pre>-->

<body>
	<header id="main-header">
		
		<a id="logo-header" href="#">
			<span class="site-name">CelularesMX</span>
			<span class="site-desc">Apple / Samsung / Huawei / M&aacute;s...</span>
		</a>

		<nav class="nav">
			<ul>
				<li><a href="index.php">Inicio</a></li>
				<li><a href="#">Cat&aacute;logo</a></li>
				<li><a href="contacto.php">Contacto</a></li>
			</ul>
		</nav>
 
	</header>
 	
 	<ol class="horizontal-menu" itemscope itemtype="http://schema.org/BreadcrumbList">
 		<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
 			<a href="/Catálogo" itemprop="item">
 				<span itemprop="name">Inicio</span>
 			</a>
 			&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
 		</li>
 		<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
 			<a href="/Catálogo/catalogo.php" itemprop="item">
 					<span itemprop="name">Celulares</span>
 			</a>
 			&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
 		</li>
 		<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
 			<a href="/" itemprop="item">
 				<span itemprop="name">Marca</span>
 			</a>
 		</li>
 	</ol>

	<div class="row">
  		<div class="column left">
    		<div class="catalogo-derecha">
    			<div class="menu">
    				Celulares y Smartphones
    			</div>
    			<div class="filtros">
    				Filtros
    			</div>
    		</div>
  		</div>
  		<div class="column right">
		    <h1 class="catalogo-titulo">
		    	Celulares y Smartphones
		    </h1>
		    <div class="row">

		    	<div class="col2">
		    		<a href="">	
		    			<img src="img/1.jpeg" alt="Apple" title="Apple">
		    		</a>
		    		<div id="f1">
		    			Apple	
		    		</div>
		    	</div>

		    	<div class="col2">
		    		<a href="">	
		    		<img src="img/2.jpeg" alt="Samsung" title="Samsung">
		    		</a>
		    		<div id="f1">
		    			Samsung
		    		</div>
		    	</div>

		    	<div class="col2">
		    		<a href="">
		    			<img src="img/3.jpeg" alt="Motorola" title="Motorola">			
		  	  		</a>
		  			<div id="f1">
		  				Motorola
		  			</div>
		    	</div>

		    	<div class="col2">
		    		<a href="">
		    			<img src="img/4.jpeg" alt="Huawei" title="Huawei">	
		    		</a>
		    		<div id="f1">
		    			Huawei
		    		</div>
		    	</div>

		    	<div class="col2">
		    		<a href="">
		    			<img src="img/5.jpeg" alt="Xiaomi" title="Xiaomi">	
		    		</a>
		    		<div id="f1">
		    			Xiaomi
		    		</div>
		    	</div>

		    	<div class="col2">
		    		<a href="">
		    			<img src="img/6.jpeg" alt="Sony" title="Sony">	
		    		</a>
		    		<div id="f1">
		    			Sony
		    		</div>
		    	</div>
		    </div>
		    
		    <div class="catalogo-busqueda">
		    	
		    	<div id="contenido-cat" class="total-productos">
		    	</div>

		    	<div id="contenido-cat" class="lista-busqueda">
			    	<form>
			    		<div class="styled-select yellow rounded">	
					    	<select id="orden">
					    		<option value="Relevancia">
					    			Popularidad
					    		</option>
					    		<option value="precio_ascendente">
					    			Menor precio
					    		</option>
					    		<option value="precio_descendente">
					    			Mayor precio
					    		</option>
					    	</select>
			    		</div>
			    	</form>
		    	</div>
		    	
		    	<div id="contenido-cat" class="tipo-vista">
			    	<p>
			    		<a onclick="products.View('Vista1')">
				    		<span class="icono1">
					    		<i id="ic" class="fa fa-th-large"></i>
				    		</span>
				    	</a>
				    	&nbsp;&nbsp;&nbsp;&nbsp;
				    	<a onclick="products.View('Vista2')">
				    		<span class="icono2">
					    		<i id="ic" class="fa fa-list-ul"></i>
				    		</span>
				    	</a>
			    	</p>
		    	</div>
		    </div>

		    <hr>
		    <div class="catalogo-productos">
		    	
		    </div>
  		</div>
	</div>
	
	<footer id="main-footer">
		<p>&copy; 2018 Cat&aacute;logo de Celulares</p>
	</footer>

</body>
</html>