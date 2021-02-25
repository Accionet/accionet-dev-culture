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


## TSLint

##### eg2.tslint
Esta extensión cumple la misma función que ESLint pero para los archivos de typescript, en nuestro caso para Angular. Notar que la versión que usamos está deprecada, sin embargo funciona mejor que la no deprecada por lo que seguimos usando esa. Al igual que antes se recomienda configurarlo para que haga un auto-fix cada vez que se guarda el archivo.

Para esto abrir el Command Palette y correr:
```
Open Settings (JSON)
```

Agregar la siguiente configuración:

```JSON
  "tslint.autoFixOnSave": true,
```


## Code Spell Checker 

  ##### streetsidesoftware.code-spell-checker
  ##### streetsidesoftware.code-spell-checker-spanish

  Este subraya los errores de ortografía. Se recomienda instalar la extensión tanto de español como en inglés. Es decir instalar tanto **streetsidesoftware.code-spell-checker** como **streetsidesoftware.code-spell-checker-spanish**

  Para que tome los dos idiomas en settings de Code Spell Checker > User > Languages colocar:

  ```
  en, es
  ```

## Htmlhint 

  ##### mkaufman.htmlhint

  Es muy similar a eslint y tslint pero para los archivos html.


## Otros

### Auto Import

##### steoates.autoimport

Te sugiere para auto-importar módulos.

### Git Blame

##### waderyan.gitblame

En la barra inferior indica quién fue el último es editar la línea del código y hace cuánto.


### Bracket Pair Colorizer

##### coenraads.bracket-pair-colorizer

Pinta del mismo color cada pareja de brackets, ayuda a entender cuándo falta o sobra un bracket. 


### open in browser

##### techer.open-in-browser

Al apretar `Shift` + `Alt` + `b` te abre el archivo HTML seleccionado en el navegador.

### Angular 8 Snippets

##### mikael.angular-beastcode

Snippet para Angular.

### Angular Language Service

##### angular.ng-template

Permite autocompletar cosas del component.ts en el component.html.

### HTML Snippets

##### abusaidm.html-snippets

Snippet para HTML5.

### Live Share

##### ms-vsliveshare.vsliveshare

Permite compartir tu visual studio code para que otros lo puedan ver y editar. En otras palabras tu vscode se transforma en un google docs.

### Nasc VSCode Touchbar

##### felipe.nasc-touchbar

[SOLO PARA iOS con touchbar] Permite configurar el touchbar para agregar funcionalidades de vscode. La configuración más común en Accionet es:

Abrir el Command Palette y correr:
```
Open Settings (JSON)
```

Agregar la siguiente configuración:

```JSON
  "nasc-touchbar.addCursorBelow": false,
  "nasc-touchbar.commentLine": true,
  "nasc-touchbar.jumpToBracket": true,
  "nasc-touchbar.goToDefinition": false,
  "nasc-touchbar.nextInFiles": true,
  "nasc-touchbar.rename": false,
```


## Mis Settings


A continuación una lista de un ejemplo de configuraciones usadas en Accionet:

```JSON
{
    "editor.overviewRulerBorder": false,
    "javascript.autoClosingTags": false,
    "javascript.format.enable": false,
    "javascript.format.insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
    "javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": false,
    "javascript.format.insertSpaceAfterSemicolonInForStatements": false,
    "javascript.format.insertSpaceBeforeAndAfterBinaryOperators": false,
    "workbench.startupEditor": "newUntitledFile",
    "workbench.enableExperiments": false,
    "editor.minimap.enabled": false,
    "editor.multiCursorModifier": "ctrlCmd",
    "window.zoomLevel": 1,
    "editor.tabSize": 2,
    "workbench.colorCustomizations": {
        "statusBar.background": "#1A1A1A",
        "statusBar.noFolderBackground": "#212121",
        "statusBar.debuggingBackground": "#263238"
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
    "git.enableSmartCommit": true,
    "[python]": {},
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
    },
    "tslint.autoFixOnSave": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "cSpell.userWords": [
        "Meraki",
        "Remarketing",
        "accionet",
        "behaviour",
        "chinchay",
        "configurarlo",
        "echarts",
        "envato",
        "guayo",
        "hateoas",
        "iterador",
        "meeseeks",
        "postgres",
        "psql",
        "pyme",
        "requestify",
        "shopify",
        "vuepress",
        "webkul"
    ],
    "cSpell.allowCompoundWords": true,
    "cSpell.language": "en, es",
    "nasc-touchbar.addCursorBelow": false,
    "nasc-touchbar.commentLine": true,
    "nasc-touchbar.jumpToBracket": true,
    "nasc-touchbar.goToDefinition": false,
    "nasc-touchbar.nextInFiles": true,
    "nasc-touchbar.rename": false,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "liveshare.presence": true
}
```

