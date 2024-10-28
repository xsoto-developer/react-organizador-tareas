# Organizador de Tareas React: Un enfoque moderno y escalable

## Descripción
Este organizador de tareas es una aplicación web de una sola página (SPA) desarrollada con React, diseñada para ayudar a los usuarios a gestionar sus tareas de manera eficiente. La aplicación ofrece una interfaz intuitiva y personalizable, permitiendo a los usuarios crear, eliminar y organizar sus tareas de manera efectiva.

## Características Clave
- Gestión de tareas: Crear, editar, eliminar y marcar tareas como completadas.
- Búsqueda avanzada: Filtrar tareas por título, descripción o estado.
- Diseño responsivo: Experiencia de usuario óptima en diferentes dispositivos.
- Creación de tareas: Permite agregar nuevas tareas con descripciones detalladas.
- Marcar como completadas: Las tareas completadas se pueden marcar para un seguimiento visual.
- Búsqueda: Permite buscar tareas por palabras clave.
- Diseño responsivo: Se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- React: Biblioteca JavaScript para construir interfaces de usuario.
- CSS: Para el estilo y diseño de la interfaz.
- React Context: Para gestionar el estado global de la aplicación, como el tema actual y la lista de tareas.
- useLocalStorage: Hook personalizado para persistir los datos de las tareas en el almacenamiento local del navegador.
- useState, useEffect: Hooks básicos de React para gestionar el estado local de los componentes y realizar efectos secundarios.

## Decisiones de Diseño
- React Context: Utilizamos React Context para crear un contexto global de tareas, permitiendo que cualquier componente de la aplicación acceda y modifique la lista de tareas.
- useLocalStorage: Creamos un hook personalizado useLocalStorage para persistir los datos de las tareas en el almacenamiento local del navegador, asegurando que los datos se mantengan incluso si el usuario recarga la página.
- useState y useEffect: Utilizamos useState para gestionar el estado local de los componentes y useEffect para realizar efectos secundarios, como suscribirse a cambios en el estado y realizar operaciones asíncronas.
- Componentes funcionales: Optamos por componentes funcionales con hooks para una mejor gestión del estado y rendimiento.

## Beneficios de este enfoque
- Escalabilidad: La estructura basada en componentes y el uso de Context facilitan la escalabilidad de la aplicación.
- Reutilización de código: Los componentes pueden reutilizarse en diferentes partes de la aplicación.
- Mantenimiento: El código es más fácil de mantener y depurar gracias a su modularidad.
- Experiencia de usuario: La persistencia de los datos en el almacenamiento local mejora la experiencia del usuario

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio:

### `git clone https://github.com/xsoto-developer/react-organizador-tareas.git`

2. Instalar dependencias:

### cd organizador-de-tareas
### `npm install`

3. Iniciar el servidor de desarrollo:   

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se volverá a cargar cuando realices cambios.\
También puedes ver errores de lint en la consola.

### `npm run build`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Compila la aplicación para producción en la carpeta `build`.\
Integra React correctamente en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para implementarse!


