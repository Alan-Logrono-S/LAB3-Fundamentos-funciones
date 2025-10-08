// Laboratorio 3
// Fundamentos y Funciones

// Integrantes:
// Alan Logroño
// Britany Chuma
// Khaterine Sailema

// pagina web: https://www.multicines.com.ec/

// ======================================================
//     Multicines Ecuador - Componentes JavaScript
// ======================================================

// ----> Variables <---- ☠️
// 🔷 Información base del sitio
const nombre = "Multicines Ecuador";
const urlBase = "https://www.multicines.com.ec/";
const descripcion =
  "Red de cines con funciones 2D/3D, snacks, promociones y beneficios.";

// ----> Tipos de Datos - Primitivos (CamelCase) <---- ☠️
// 🔷 String - Number - Boolean - Undefined - Null - Symbol - BigInt
// String
const correoSoporte = "multicines@multicines.com.ec";
const telefonoSoporte = "+59323802195";
// Number
const añosOperacion = 25;
const calificacionApp = 4.8;
const reseñasApp = 30500;
// Boolean
const tieneApp = true;
let sitioMantenimiento = false;

// -----> Objetos <---- ☠️
// 🔷 Tipos de Datos - Compuestos
const contacto = {
  email: correoSoporte,
  telefono: telefonoSoporte,
};

const plataformaApps = {
  android: true,
  ios: true,
};

const secciones = [
  "Cartelera",
  "Dulcería",
  "Beneficios",
  "Promociones",
  "Perfil",
];

// ----> Strings <---- ☠️
// 🔷 Cadena de caracteres
const mensajeBienvenida = `Bienvenido a ${nombre}. Disfruta de tus películas favoritas 🍿`;

// ----> Numbers <---- ☠️
// 🔷 Números (Ejemplo de operaciones)
const precioEntrada = 7.5;
const precioCombo = 12.0;
const totalCompra = precioEntrada + precioCombo;

// ----> Boolean <---- ☠️
// 🔷 Verdadero o Falso

// Comparación no estricta (==)
// true
const esMayorEdad = "18" == 18;

// Comparación estricta (===)
// false
const esMayorEdadEstricta = "18" === 18;

// Valores truthy y falsy
// falsy
const clienteRegistrado = "";
// truthy
const tienePuntos = 120;

// Nullish Coalescing (??)
let puntosUsuario = null;
let puntosFinal = puntosUsuario ?? 0;

// AND lógico (&&)
let mostrarBeneficio = tieneApp && "Descuento disponible";

// ----> Condicionales <---- ☠️
// 🔷 Operador Ternario
let accesoPromos = tieneApp
  ? "Promociones activas 🎟️"
  : "Descarga la app para ver promociones.";

// 🔷 Condiciones anidadas (if - else if - else)
if (añosOperacion > 30) {
  console.log("Más de 3 décadas brindando cine de calidad 🎬");
} else if (añosOperacion >= 20) {
  console.log("Más de 20 años compartiendo emociones en pantalla.");
} else {
  console.log("Una nueva experiencia de cine ha llegado.");
}

// ----> Propiedad de los arreglos <---- ☠️
console.log("Total de secciones:", secciones.length);
console.log("Primera sección:", secciones[0]);
console.log("Última sección:", secciones[secciones.length - 1]);

// ----> Funciones <---- ☠️
// 🔷 Bloque de código reutilizable

// Función declarada
function obtenerContacto() {
  return contacto;
}

// Función expresada
const seccionDisponible = function (seccion) {
  return secciones.includes(seccion);
};

// Función flecha
const urlSeccion = (seccion) =>
  seccionDisponible(seccion)
    ? urlBase + seccion.toLowerCase()
    : "Sección no disponible";
