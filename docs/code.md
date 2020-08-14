## Naming

  ### Nombres con sentido

  Una de las tareas más difícil de programar es dar con buenos nombres a las variables y funciones, debe ser corto pero a la vez explicativo. Evitar nombres que no sean explicativos:

  ##### No hacer
  ```javascript
  const theThing = '';
  const a = '...'; 
  ```

  ### Evitar abreviaciones

  Se deben evitar abreviaciones o iniciales. Estas dificultan la lectura, lo que para uno puede ser unas iniciales y-o abreviaciones obvia para otro no tiene por qué serlo:

  ##### No hacer
  ```javascript
  const msg= 'message'; 
  const upi = 'user profile image'; 
  ```

  ##### Hacer
  ```javascript
  const message= 'message'; 
  const userProfileImage = 'user profile image'; 
  ```

  Siendo honestos esta regla no está libre de excepciones, existen casos en que usar abreviaciones o iniciales está bien, por ejemplo `bbdd` o usar un iterador `i` en vez de `index`. Sin embargo, como regla general se deben reducir al mínimo las abreviaciones.
  

  ### Inglés

  ¡Se programa en inglés! Esto es algo medio contra-intuitivo considerando que somos Chilenos y hablamos Chileno. Entonces, ¿por qué en inglés? La principal razón es porque la programación es un lenguaje universal que no depende del país. Acá un listado de más razones:

  * A la mente le cuesta leer spanglish, el proceso mental de saltar de un idioma a otro es difícil. Los lenguajes de programación de por si son en inglés, por lo que programar en español te genera confusión. 
  * Expandiendo sobre el mismo tema, las librerías y frameworks son en inglés, por lo que mezclar idiomas dificulta la lectura. 
  * Pueden haber colegas que hablan distintos idiomas (hoy o en el futuro), por lo que se tiene que programar en un idioma común: inglés.
  * Por último es una buena opción para practicar inglés :)
  
  [Acá](https://softwareengineering.stackexchange.com/questions/1483/do-people-in-non-english-speaking-countries-code-in-english) hay una interesante discusión al respecto, donde se debate para ambos lados.

  :::tip Consejo Personal
  Para los programadores que no se manejen bien en inglés esto puede algo muy difícil, pero mi recomendación es que intenten de familiarizarse en inglés. Las documentaciones, las mejores preguntas/respuestas de los foros, los blogs, etc. suelen estar en inglés. 
  :::

  ### Boolean

  La convención más común sobre booleans es una el prefijo "is" o "has", por ejemplo, `isActive` o `hasAccess`. Se asemeja más al lenguaje natural que si la llamamos `active`. 

  Como segunda ley: ¡Piensa positivo! las variables boolean tienen que ser positivas, por ejemplo llamar la variable `isActive` y no `isNotActive`. Y la razón es simple, la negación de una variable negativa es confusa: `!isNotActive`, a nuestro cerebro le cuesta procesar una doble negación.

  Más sobre booleans [acá](https://dev.to/michi/tips-on-naming-boolean-variables-cleaner-code-35ig#:~:text=There%20is%20a%20convention%20to,just%20thrown%20out%20the%20window).


  ### Funciones

  Cada función es una accion, por ende el nombre debe contener al menos un verbo. No está de más repetir que los nombres deben ser auto explicativos y evitar abreviaciones.


  #### no hacer

  ```javascript
  function absoluteDifference() { ... } // falta un verbo
  function inc() { ... } // Abreviación, es increase, increment, include?
  function getAbsoluteDifferrenceOfTwoNumbers() { ... } // innecesariamente largo
  ``` 

  #### hacer

  ```javascript
  function getAbsoluteDifference() { ... }
  function increase() { ... } 
  ``` 

  Para más sobre nombrando funciones, recomiendo [este](https://dmitripavlutin.com/coding-like-shakespeare-practical-function-naming-conventions/) artículo.


  ### Array

  Los nombres de los arreglos deben ser en plural. `students.forEach((student) => {... })`;



  ### Conclusión

  Como conclusión, al programar hay que intentar de imitar el lenguaje natural. Esto va a facilitar la lectura y comprensibilidad del código ¡Tómate un minuto para pensar los nombres!


## Cases

  Lo más importante con los cases es ser consistentes, esta consistencia muchas veces depende del lenguaje, es decir distintos lenguajes usan distintos cases, Existen distintos tipos de cases:

  * camelCase
  * PascalCase
  * TRAIN-CASE
  * snake_case
  * kebab-case
  * MACRO_CASE


  ### Variables y Funciones

  En javascript las variables y funciones se escriben en camelCase. 

  ### Constantes Globales

  Las variables que son una constante "global" se escriben en MACRO_CASE. No confundir con variables definidas con `const`, por constante global nos referimos a variables cuyo valor es una verdad absoluta, está fijo, jamás será cambiado y, normalmente, no depende de parámetros. Por lo general estas constantes son declaradas al comienzo del archivo.

  #### No Hacer

  ```javascript
  const STUDENT_NAME = getStudentName(studentId);
  ```

  Si bien `STUDENT_NAME` es una constante y que no va a ser cambiada, depende de parametros y no es una constante "global", por ende debería estar en camelCase.

  #### Hacer

  ```javascript
  const GRAVITY = 9.8;
  const TIMEOUT = 5000;
  const ONE_DAY = 24 * 60 * 60 * 1000;
  ```

  En todos estos casos estas variables son "verdades absolutas".

  ### Clases

  Las clases se declaran en PascalCase y las instancias en camelCase:

  ```javascript
  class VikingWarrior { .... }

  const ragnarLothbrok = new VikingWarrior();
  ```

  ### Archivos

  En Accionet se ha optado por usar kebab-case para los archivos y directorios. Esta resolución es relativamente reciente, por lo que varios archivos están en camelCase.


  ### BBDD

  Por lo general las base de datos, y en particular postgreSQL, no son case sensitive, por lo que camelCase no es opción. La convensión que usamos en Accionet es usar snake_case. 
 

  ### Propiedades de JSON - Javascript Objects

  Si bien acá no existe una convención general y depende del caso, en Accionet preferimos camelCase. Sin embargo, existen varias excepciones, por ejemplo cuando el objeto representa una entrada de la base de datos, el case correcto sería snake_case para ser consistente con la BB.DD.

  ### css y html

  Las variables de css y html se escriben con kebab-case.

  ### Variables de Entorno

  Las variables de entorno por naturaleza son Constantes Globales, por ende se deben escribir en MACRO_CASE.

  
## Usar Variables

  Esto puede sonar como obvio, pero es muy importante evitar el uso de variables no definidas. Supongamos que queremos calcular la energía potencial gravitacional, nos podemos ver tentado a escribir lo siguiente:

  ```javascript
  const calculateGravitationPotentialEnergy = (mass, height) => {
    return mass * 10 * height;
  }
  ```

  ¿El problema? 

  Para partir si no estamos familiarizados con la formula no tenemos por qué asumir que 10 hace alusión a la gravedad. Segundo ¿qué pasa si decidimos usar 9.8 en vez de 10? Tendríamos que entrar a bucear en el código buscando cada vez que usamos la gravedad y cambiarla manual, suena a posible error. Mejor guardarlo una vez en una variable global:

  ```javascript
  const GRAVITY = 10;
  
  const calculateGravitationPotentialEnergy = (mass, height) => {
    return mass * GRAVITY * height;
  }
  ```

## Linter

  En Accionet se utiliza [ESLint](https://eslint.org/). Este nos permite definir un estilo de programación, es muy importante que todo el equipo utilize el mismo estilo, esto facilatará la compresión del código de otro miembro. El linter será responsable de ir indicando ciertos errores y advertencias. No podremos mergear una [Pull Request](/git.html#pull-request-code-review) si el linter está arrojando errores.

## Comentarios

## Logs

## Tests

