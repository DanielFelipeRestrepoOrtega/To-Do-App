// 1. Traemos los elementos del HTML
const input = document.getElementById("tareaInput");
const boton = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

// 2. Evento para cuando hagan clic en el botón
boton.addEventListener("click", function () {
  const texto = input.value;

  // 3. Validación para no agregar tareas vacías
  if (texto === "") {
    alert("Escribe una tarea primero");
    return;
  }

  // 4. Creamos un nuevo elemento <li>
  const li = document.createElement("li");
  li.textContent = texto;

  // 5. Lo agregamos a la lista
  lista.appendChild(li);

  // 6. Limpiamos el input
  input.value = "";

  // 7. Evento para eliminar la tarea al hacer clic
  li.addEventListener("click", function () {
    li.remove();
  });
});
