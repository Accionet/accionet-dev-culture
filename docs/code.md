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

## Cases

## Linter

## Comentarios

## Logs

## Tests

