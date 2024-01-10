# Segundo desafio
<h2 align="center">Manejo de Archivos</h1>
<div><p>Realizar una clase de nombre "ProductManager", el cual permitirá trabajar con múltiples productos. Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos</p><br/>
<p>La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.</p><br/>
<p>Cada producto que gestione debe contar con las propiedades:</p>
<ul>
  <li>title (nombre del producto)</li>
  <li>description (descripción del producto)</li>
  <li>price (precio)</li>
  <li>thumbnail (ruta de imagen)</li>
  <li>code (código identificador)</li>
  <li>stock (número de piezas disponibles)</li>
</ul><br/>
<p>Debe contar con un método "<b>addProduct</b>" el cual agregará un producto al arreglo del archivo.Validar que no se repita el campo "code" y que todos los campos sean obligatorios. Al agregarlo, debe crearse con un id autoincrementable</p><br/>
<p>Debe tener un método "<b>getProducts</b>", el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo.</p><br/>
<p>Debe contar con un método "<b>getProductByld</b>" el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto</p>
<p>Debe tener un método "<b>updateProduct</b>", cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. <b>NO DEBE BORRARSE SU ID</b> </p>
<p>Debe tener un método "<b>deleteProduct</b>", el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.</p>
</div>
