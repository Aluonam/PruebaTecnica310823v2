# PruebaTecnica310823v2

Tarea 1: Configuración Inicial

Crea un nuevo proyecto React utilizando la herramienta de línea de comandos de React.
Instala el paquete axios para manejar las solicitudes HTTP.

Tarea 2: Llamada API y Mostrar Datos

Crea un componente funcional llamado UserList.
Agrega un estado utilizando useState para almacenar la lista de usuarios.
Utiliza el efecto useEffect para realizar una solicitud GET a la URL https://jsonplaceholder.typicode.com/users al montar el componente.
Almacena los datos de usuarios en el estado.
Renderiza la lista de usuarios en una lista utilizando elementos <ul> y <li>.
Cada usuario debe ser representado como un componente llamado UserItem.

Tarea 3: Mostrar Hora Actual en Tiempo Real

Crea un componente funcional llamado Clock.
Utiliza el estado y el efecto useEffect para almacenar y actualizar la hora actual.
Utiliza la función setInterval para actualizar la hora cada segundo.
Renderiza la hora actual en un formato legible, como "HH:MM:SS", en el componente Clock.

Tarea 4: Uso de Modal

Instala el paquete react-modal.
Crea un componente funcional llamado UserModal.
Dentro de UserModal, utiliza useState para manejar el estado de si el modal está abierto o cerrado.
Crea un botón "Detalles" junto a cada usuario en la lista.
Al hacer clic en el botón "Detalles", abre el modal y muestra más información sobre el usuario, como nombre, correo electrónico, teléfono, etc.
Agrega un botón "Cerrar" dentro del modal para cerrarlo.

Tarea 5 (Bono): Estilos con CSS

Agrega estilos para mejorar la apariencia de la lista de usuarios y el modal.
Estiliza los elementos de la lista (<li>) para que tengan un fondo claro y un borde.
Estiliza el modal para que tenga un fondo blanco y aparezca centrado en la pantalla.