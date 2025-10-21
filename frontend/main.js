document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const container = document.getElementById("user-table");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const count = document.getElementById("count").value;
    container.innerHTML = "<p>Cargando usuarios...</p>";

    try {
      console.log(`http://127.0.0.1:5000/api/consumer/random?count=${count}`);
      const response = await fetch(
        `http://127.0.0.1:5000/api/consumer/random?count=${count}`
      );
      const data = await response.json();
      console.log(response)
      const users = data?.data || [];

      container.innerHTML = "";

      users.forEach((user) => {
        const div = document.createElement("div");
        div.classList.add("user-card");
        div.innerHTML = `
          <img src="${user.fotografia}" alt="${user.nombre}">
          <div>
            <h3>${user.nombre}</h3>
            <p><strong>Género:</strong> ${user.genero}</p>
            <p><strong>Ubicación:</strong> ${user.ubicacion}</p>
            <p><strong>Correo:</strong> ${user.correo}</p>
            <p><strong>Fecha de nacimiento:</strong> ${new Date(
              user.fecha_nacimiento
            ).toLocaleDateString()}</p>
          </div>
        `;
        container.appendChild(div);
      });

      if (users.length === 0) {
        container.innerHTML = "<p>No se generaron usuarios.</p>";
      }
    } catch (error) {
      container.innerHTML =
        '<p style="color:red;">Error al obtener los usuarios.</p>';
      console.error("Error fetching users:", error);
    }
  });
});
