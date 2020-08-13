## Gitflow

  El [control de versiones](https://www.atlassian.com/git/tutorials/what-is-version-control) lo gestionamos con [git](https://www.atlassian.com/git/tutorials/what-is-git). Esta maravillosa herramienta desarrollada con [Linus Torvalds](https://es.wikipedia.org/wiki/Linus_Torvalds) nos permite trabajar en equipo e ir gestionando los cambios al código. Pero, ¿cómo lo usamos?

  En Accionet seguimos la metodología [GitFlow](https://medium.com/@okandavut/what-is-gitflow-c0be7a659992). Por si no la conocen dejamos unos artículos que pueden ser de interés:

  * [What is GitFlow?](https://medium.com/@okandavut/what-is-gitflow-c0be7a659992)
  * [GITFLOW MEJORA LA GESTIÓN DE TU REPOSITORIO GIT](http://bemobile.es/blog/2016/11/gitflow-mejora-la-gestion-de-tu-repositorio-git/#:~:text=GitFlow%20es%20un%20workflow%20y,ramas%20en%20nuestros%20repositorios%20Git.)
  *  [Qué es Git flow y cómo funciona](https://cleventy.com/que-es-git-flow-y-como-funciona/)

  En simple gitflow define cúando crear una rama (branch) y cómo gestionar las distintas ramas para minimizar conflictos. 

## Branches

  En concreto lo que Gitflow propone es 2 branches principales:

  * master: Esta es la branch principal y debe contener el mismo código que está en producción actualmente.
  * develop: Esta es la branch donde están todas las cosas que están "listas" para producción. Para rapidez de tecleo, en Accionet a esta la llamados `dev`.

  Nunca desarrollamos o escribimos código directamente en una de estas branches. Para desarrollar existen dos "familias" de branches:

  ### Feature Branch

  #### Función
  
  Cuando tenemos que hacer una nueva funcionalidad, creamos una nueva branch. Siempre hacer 1 funcionalidad por cada branch. No acumular funcionalidades en una branch.
  
  #### Salir desde
  
  Siempre salir desde `dev` jamás desde `master`:
  ```
  git checkout -b myFeature dev
  ```

  #### Volver A
  
  Una vez que hayamos desarrollado la funcionalidad y testeado adecuadamente, debemos hacer una [Pull Request](#pull-request-code-review) a `dev` no a `master`.

  #### Convención de Nombre

  En Accionet no tenemos una convención de nombre muy estricta sobre cómo se debe llamar cada branch. Pero como regla general:
  
  * En lo posible, evitar nombres largos.
  * Evitar nombres solo con número o alguna codificación que no tenga relación directa con lo desarrollado.
  * Auto descriptivo, que con el nombre de un indicio sobre lo que se está desarrollando.
  * Nombres en Inglés.

  :::danger JAMÁS HACER
  En rojo y grande, un práctica muy común que se debe evitar es nombrar las branches según quién es el desarrollador. Si Juan va a desarrollar una funcionalidad, que la branch no se llame "Juan".
  :::


  ##### No Hacer

  ```
  git checkout -b addImagesToProfileOfUser dev   # muy largo
  ```
  ```
  git checkout -b 12345 dev   # solo números
  ```
  ```
  git checkout -b feature12345 dev    # no es auto descriptivo
  ```

  ```
  git checkout -b agregarImagen dev   # en inglés
  ```

  ```
  git checkout -b juan dev   # indicar qué, no quién
  ```

  ##### Hacer

  ```
  git checkout -b profileImages dev
  ```


  ### Hotfix Branch

  #### Función
  
  No todos los cambios al código son nuevas funcionalidades. Si se debe arreglar un typo, bug u otro, se hace a través de una hotfix branch. Mantener estas branches chicas, solo deben arreglar el error puntuar que se busca corregir.

  #### Salir Desde

  Usualmente desde `master`. Si el error fue encontrado en `dev` y todavía no está en `master` entonces se puede salir desde `dev`.

  #### Volver A

  Se debe volver desde dónde se salió. Es decir si se salió de `dev`, se debe volver a `dev`, si se salió desde `master` se debe volver a `master`. En este último caso, luego se debe actualizar `dev`, para que `dev` esté al día con `master`.

  :::tip Regla de Oro
  Todo el código que está en `master` debe estar en `dev` a todo momento.
  :::

  #### Convención de Nombre

  La misma convención de nombre que aplica para [Feature Branch](#feature-branch). La única excepción es que se debe empezar con la palabra "hotfix". Por ejemplo:

  ##### No Hacer

  ```
  git checkout -b fixTypoLogin master
  ```

  ##### Hacer

  ```
  git checkout -b hotfixFixTypoLogin master
  ```

  ```
  git checkout -b hotfix-fixTypoLogin master
  ```

  ### Merge a Master

  Solo se debe mergear a `master` una Hotfix o bien `dev`, una vez que esté listo para producción. Bueno, en verdad jamás hacer un merge a `master`, siempre usar una [Pull Request](#pull-request-code-review).


## Pull Request + Code Review

## Commits

### Cuándo

### Cómo



