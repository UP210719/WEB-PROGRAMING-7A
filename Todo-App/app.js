const userSelect = document.getElementById('usuarios');
const userContainer = document.getElementById('datosUsuario'); 
const taskContainer = document.getElementById('tareasUsuario'); 


function mostrarDatosUsuario() {
  const select = document.getElementById("usuarios");
  const selectedUserId = parseInt(select.value);

  
  const usuario = usuarios.find(user => user.id === selectedUserId);


  userContainer.innerHTML = `
    <h2>Datos del usuario</h2>
    <p>Nombre: ${usuario.firstname} ${usuario.lastname}</p>
    <p>Email: ${usuario.email}</p>
  `;
}


function mostrarTareasUsuario() {
  const selectedUserId = parseInt(userSelect.value);

  const tareasUsuario = tareas.filter(task => task.userId === selectedUserId);

  taskContainer.innerHTML = '<h2>Tareas del usuario:</h2>';
  if (tareasUsuario.length > 0) {
    const ul = document.createElement('ul');
    tareasUsuario.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      ul.appendChild(li);
    });
    taskContainer.appendChild(ul);
  } else {
    taskContainer.innerHTML += '<p>No hay tareas para este usuario.</p>';

document.addEventListener("DOMContentLoaded", function() {

  usuarios.forEach(usuario => {
    const option = document.createElement("option");
    option.value = usuario.id;
    option.textContent = `${usuario.firstname} ${usuario.lastname}`;
    userSelect.appendChild(option);
  });

  mostrarDatosUsuario();
});

userSelect.addEventListener("change", mostrarDatosUsuario);


document.getElementById("mostrarTareas").addEventListener("click", mostrarTareasUsuario);