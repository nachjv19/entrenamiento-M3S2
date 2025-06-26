// creacion de objetos donde se almacenan 3 productos con ID, nombre y precio.
const productos = {
    prod1: { id: 1, nombre: "Monitor 24inch" , precio: 500000 },
    prod2: { id: 2, nombre: "Iceberg C4" , precio: 400000},
    prod3: { id: 3, nombre: "Soporte audifonos" , precio: 100000}
};
 //conversion de productos a un set(para productos duplicados) 
const setProductos = new Set();
for(let clave in productos){
    setProductos.add(productos[clave]);
}
    //Creamos un Map que nos permita agrupar por categoria
const mapaCategorias = new Map();
mapaCategorias.set("Pantallas", "Monitor 24inch");
mapaCategorias.set("Chasis", "Iceberg c4");
mapaCategorias.set("Accesorios", "Soporte audifonos");

//creamos un ap para buscar una lista de productos
const categorias = new Map();
categorias.set("Accesorios", ["Soporte audifonos"]);
categorias.set("Pantallas", ["Monitor 24inch"]);
// Recorremos productos usando for...in
console.log("🔍Recorriendo Productos (for...in)");
for(let clave in productos){
    console.log(`${clave}:`, productos[clave]);
}
//recorremos productos usando for...of    
console.log("\n🔄recorriendo Set (for... of)");
for(let item of setProductos){
    console.log(`ID: ${item.id}, Producto: ${item.nombre}, precio: $${item.precio}`);
}
//recorremos productos usando map con forEach
console.log("\n📊Recorriendo Map :");
categorias.forEach((nombres, categoria) => {
    console.log(`Categoria: ${categoria}, Productos: ${nombres.join(", ")}`);
    
});
// validaciones
console.log("\n✅Lista completa de productos: ");
console.log(Object.values(productos));

console.log("\n✅Productos Unicos(Set)");
setProductos.forEach(prod => console.log(`${prod.nombre} - $${prod.precio}`));

console.log("\n✅Categorias y productos (Map): ");
for(let[cat, prods]of categorias.entries()){
    console.log(`${cat}: ${prods.join(", ")}`);
    
}


