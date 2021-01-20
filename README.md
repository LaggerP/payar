# PAYAR

PAYAR es una plataforma web que te permite crear y registrar cobros realizados a través de criptomonedas. La misma plataforma nace de la necesidad (personal) y curiosidad de aprender una nueva tecnología, en este caso **NextJS**, **Tailwind** y las **criptomonedas**. 

 - **¿Por qué criptomonedas?** Simple, la pandemia hizo que la adopción de las mismas se aceleren muchísimo. Personas que nunca se animaron a ingresar a este mundo, lo hicieron y hasta entendieron el poder que estas tienen.
 - **¿Por qué una plataforma que te permite registrar cobros a través de criptos?** Si bien existen plataformas que ya tienen estas funcionalidades, no encontré ningun ejemplo ni código abierto al público. Es por eso que aproveché mis vacaciones universitarias para codificar PAYAR y dejar el código libre por si alguien quiere mejorarlo para que la plataforma siga creciendo.

**PD**: El código de esta plataforma puede que no sea el mejor (ni el peor), eso no quita que aprendí muchísimo de NextJS y Tailwind. Creo que ahora me siento preparado para implementarlas en el futuro y seguir perfeccionando el entendimiento de estas, además de agregarlo a mi lista de tecnologías con las que me gustaría trabajar (Recruiters... 📧😉).

### Funcionalidades (algunas en desarrollo)

  - Generación de códigos QR personalizados según monto.
  - Registro de cobros realizados.
  - Biblioteca de cripto direcciones (aloje sus direcciones para un mejor manejo de la plataforma).
  - Confirmación de cobros: la plataforma le permite confirmar si un cobro se hizo o no.

### Próximas mejoras: (si el tiempo lo permite)

  - Generar PDF con las transacciones realizadas. La misma dispondrá de filtros para generar el PDF.
  - Poder hacer deploy de **PAYAR** en Vercel. 
  - Ver precios de criptomonedas en tiempo real.
  - Mandar emails de: reportes, cobros confirmados, etc.
  - Migrar el código a TypeScript.
  - Y muchas más (esto es interminable).

### Tecnologías

* NextJS
* Tailwind CSS
* MongoDB

### Cómo correr el proyecto en forma local:

Crear un archivo de variables de entorno local (`.env.local`) en la carpeta raíz: 
```sh
MONGODB_URI= tuDireccionMongoDB
JWT_SECRET= tuSuperClaveSecreta
```

Con NPM

```sh
$ npm install 
$ npm run dev
```

Con Yarn

```sh
$ yarn install 
$ yarn dev
```

### Roadmap y desarrollo

Si bien es una plataforma que nació por querer buscar algo que aprender, creo que pueden agregarse más features y mejorar implementaciones actuales. Si te gustaría contribuir con este proyecto, más que bienvenida tu iniciativa. También son bienvenidas las propuestas de mejoras. Los **Issues** y **PRs** están listos para ser bombardeados.

Licencia
----

¿Licencia? la única que conozco es licencia por maternidad y paternidad (por ahora). Código 100% libre.
