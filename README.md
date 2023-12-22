# Primer desafio
<h2 align="center">Clases con ECMAScript y ECMAScript avanzado</h1>
<div><p>Realizar una clase "<b>ProductManager</b>" que gestione un conjunto de productos.</p><br/>
<p>Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.</p><br/>
<p>Cada producto que gestione debe contar con las propiedades:</p>
<ul>
  <li>title (nombre del producto)</li>
  <li>description (descripción del producto)</li>
  <li>price (precio)</li>
  <li>thumbnail (ruta de imagen)</li>
  <li>code (código identificador)</li>
  <li>stock (número de piezas disponibles)</li>
</ul><br/>
<p>Debe contar con un método "<b>addProduct</b>" el cual agregará un producto al arreglo de productos inicial.Validar que no se repita el campo "code" y que todos los campos sean obligatorios. Al agregarlo, debe crearse con un id autoincrementable</p><br/>
<p>Debe contar con un método "<b>getProducts</b>" el cual debe devolver el arreglo con todos los productos creados hasta ese momento</p><br/>
<p>Debe contar con un método "<b>getProductByld</b>" el cual debe buscar en el arreglo el producto que coincida con el id. En caso de no coincidir ningún id, mostrar en consola un error "<i>Not found</i>"</p>
</div>
