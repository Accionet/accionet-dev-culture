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

  Para pasar código a `master` y a `dev` siempre lo hacemos a través de Pull Request. Esto nos permite tener control de que no cualquier basura llegue a las branches principales, poniendo reglas, tanto subjetivas cómo objetivas, que nos permitan revisar si cómo equipo aceptamos el cambio o no.

  ### Continuous Integration

  Esto se suele llamar Integración Continua. Citando a [wikipedia](https://es.wikipedia.org/wiki/Integraci%C3%B3n_continua):

  :::tip Integración Continua
  Es una práctica de ingeniería de software que consiste en hacer integraciones automáticas de un proyecto lo más a menudo posible para así poder detectar fallos cuanto antes. Entendemos por integración la compilación y ejecución de pruebas de todo un proyecto
  :::

  En concreto, cada vez que se sube un commit a github, se revisan lo siguiente:

  * Test: Revisa que todos los tests pasen. Esto permite detectar fallos tempranamente.
  * Coverage: Cobertura de los tests. Accionet exige un mínimo de cobertura que los tests deben tener. No sirve tener tests si estos no cubren todos los casos.
  * Linter: Revisa los errores de sintaxis y estilo del código. Se permiten `warnings` pero no `errors`. Más información sobre el linter [acá](/code.html#linter).

  Si alguno de estos arroja un error, no dejará mergear la Pull Request hasta que el error haya sido arreglado. De esta forma nos aseguramos que nuestro código mantenga unos estándares mínimos.

  ### Branch Actualizada

  Además de las condiciones de Continuous Integration, la branch que se está comparando (es decir la que se busca mergear) debe estar al día con la branch base. Es decir todos los commits de la branch base deben estar en la branch comparada.

  ### Code Review

  Todas las reglas anteriores son objetivas, es decir cumple o no cumple. Hay una última condición que es subjetiva y muy importante: Code Review. Un miembro del equipo debe darle el "visto bueno" a la Pull Request, es decir debe revisar el código que se busca agregar y revisar que sea fácil de comprender, que no tenga fallas ni [code smells](https://en.wikipedia.org/wiki/Code_smell#:~:text=In%20computer%20programming%2C%20a%20code,%2C%20developer%2C%20and%20development%20methodology.&text=It%20is%20also%20a%20term%20used%20by%20agile%20programmers.). Esta es una buenísima oportunidad, para tanto el revisador como para el revisado, para aprender el uno y del otro.

  ### Cada Cuanto Hacer una Pull Request

  Hacerle Code Review a una Pull Request muy larga es un infierno. Por lo mismo las Pull Requests deben ser periódicas, concisas y cortas. Pero esto no se debe forzar, una Pull Request indica que la funcionalidad en cuestión está lista, jamás hacer una Pull Request si la funcionalidad todavía no está lista. Debe hacerse un trabajo conjunto por parte de todo el equipo para dividir las funcionalidades grandes en pequeñas funcionalidad e ir armando de a poco, con varias Pull Requests.


## Commits

### Cuándo

  Una difícil pregunta: ¿cuánto y cuándo commitear? Viendo parafraseando la respuesta a [esta](https://softwareengineering.stackexchange.com/questions/74764/how-often-should-i-do-you-make-commits) pregunta:

  :::tip Cúanto Commitear
  Uno no debe hacer commits baso en tiempo, sino que basado en cuando uno agregó o bien arregló algo. Agregaste un método que funciona, arreglaste un typo, arreglaste cosas de estilo, etc. 
  :::

  Como regla general los commits deben ser atómicos, deben englobar un solo cambio. Yo suelo hacer la analogía cuando uno esta trabajando en un archivo Word y decide apretar el botón *save*. Hacer un commit es equivalente a apretar *save*, uno no apreta save cada vez que uno ingresa una letra pero tampoco uno escribe un ensayo de 5 planas sin apretar *save*.  


### Formato

Cada commit debe tener un mensaje, si bien en git esto es opcional, ¡en Accionet es obligatorio! Este mensaje debe explicar el cambio que se hizo. Accionet sigue la [guía](https://la-guia.platan.us/herramientas/git) de platanus sobre commits.

Pero en concreto, deben ser en inglés, no muy largos y tener el siguiente formato:


```
  tipo(contexto): descripción
```

#### Tipo
El tipo corresponde a que se debe el commit:

  * feat: Un nuevo feature
  * fix: La corrección de un bug
  * docs: Cambios en la documentación
  * style: Cambios que no afectan el significado del código (espacios, indentación, etc.)
  * refactor: Un cambio en el código que no agrega una funcionalidad ni corrige un bug
  * perf Cambios en el código que sólo mejoran la performance
  * test: Agrega, corrige o mejora tests
  * chore: Cambios al proceso de build y herramientas auxiliares


#### Contexto

Funcionalidad que en global el commit. Opcionalmente se puede agregar un `/` para indicar el archivo o componente dónde fue el cambio: 

```
  tipo(contexto/componente): descripción
```

#### Descripción

Descripción, no muy larga, de lo que el commit hace. Recordar, siempre en inglés!


## Git Aliases

¿No encuentran verboso que cada vez que tenemos que commitear tengamos que hacer `git add .` y después `git commit -m 'type(contexto): descripcion'`?

La solución: [git alias](https://www.atlassian.com/es/git/tutorials/git-alias). Los alias se usan para crear comandos más cortos que se asignan a comandos más largos. Si corres el siguiente comando:

```
git config --global alias.ac "! git add -A && git commit -m"
```

Después puedes hacer:

```
git ac 'type(contexto): descripcion'
```

Y hará tanto el  `git add .` como el `git commit -m 'type(contexto): descripcion'`.

A continuación una lista de aliases que usamos en accionet:


### git update-dev

Para actualizar la branch dev:

```
git config --global alias.update-dev "! git checkout dev && git pull origin dev"
```

### git update-master

Para actualizar la branch master:

```
git config --global alias.update-master "! git checkout master && git pull origin master"
```

### git da

Elimina todas las branches mergeadas exceptuando master y dev:

```
git config --global alias.da "! git branch | grep -v "master\|dev" | xargs git branch -d"
```

### git da

Elimina todas las branches mergeadas exceptuando master y dev:

```
git config --global alias.da "! git branch | grep -v "master\|dev" | xargs git branch -d"
```

### git alias

Para ver todos los alias que has creado

```
git config --global alias.da "! git config --get-regexp ^alias\. | sed -e s/^alias\.// -e s/\ /\ =\ /"
```

### git ac

El primero que vimos, para agregar y commitear en un solo comando.

```
git config --global alias.ac "! git add -A && git commit -m"
```