## Visual Studio Code

  El IDE por defecto que usamos en Accionet es Visual Studio Code.  A continuación listaremos las extensiones con que usamos VS.

## ESLint

  ##### dbaeumer.vscode-eslint
  Esta es la extensión más útil. En tiempo real va subrayando los errores y advertencias al programar. Esto permite ir arreglandolas apenas ocurren. Se recomienda configurarlo para que haga un auto-fix cada vez que se guarda el archivo.

  Para esto abrir el Command Palette y correr:
  ```
  Open Settings (JSON)
  ```

  Agregar la siguiente configuración:

  ```JSON
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
    },
  ```


## Code Spell Checker 

  ##### streetsidesoftware.code-spell-checker
  Este subraya los errores de tipografía. Se recomienda instalar la extensión tanto de español como en inglés. Para que tome los dos idiomas en settings de Code Spell Checker > User > Languages colocar:

  ```
  en, es
  ```

## Otros

### Auto Import

##### steoates.autoimport
Te sugiere para auto-importar módulos.

### Git Blame

##### waderyan.gitblame
En la barra inferior indica quien fue el último es editar la línea del código y hace cuanto.


### Bracket Pair Colorizer

##### coenraads.bracket-pair-colorizer
Pinta del mismo color cada pareja de brackets, ayuda a entender cuándo falta o sobra un bracket. 


### open in browser

##### techer.open-in-browser

Al apretar `Shift` + `Alt` + `b` te abre el archivo HTML seleccionado en el navegador.

### Angular 8 Snippets

##### mikael.angular-beastcode

Snippet para Angular.

### HTML Snippets

##### abusaidm.html-snippets

Snippet para HTML5.

