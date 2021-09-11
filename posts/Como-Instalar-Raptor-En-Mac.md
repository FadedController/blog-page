# ¿Cómo intalar raptor en MacOS?

*Autor:* Axel Daniel Padilla Reyes

*Última Modificación:* 10 Sep 2021 a las 22:41 PM

![Screen Shot 2021-09-10 at 22.07.07.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.07.07.png)

Muy buen día, en este artículo los guiaré a través del proceso de **instalación de el software [Raptor](https://raptor.martincarlisle.com) en una dispositivo MacOS**. Este método funciona en todas las Mac corriendo MacOS Catalina o MacOS BigSur, las dos versiones mas recientes al momento de escribir esta guía. **Esto incluye a las mas recientes Mac con procesador M1 presentadas en 2020.**

## ¿Qué vamos a necesitar?

1. **Tener Homebrew instalado**. *Si no lo tienes [puedes instalarlo con esta guía](https://franyerverjel.com/blog/instalacion-de-homebrew-en-mac)*
2. **Descargar el instalador de Raptor** y tenerlo en la carpeta de Descargas en tu Mac. *[Puedes descargarlo aquí](https://drive.google.com/file/d/1ldgCpR_wam4lAvLeBoklqUOA9qZzUJBv/view?usp=sharing)*
3. **Extra:** Si tu Mac tiene varias cuentas, asegurate que la cuenta que usarás tiene permisos de administrador o es la cuenta principal

## Proceso de Instalación

Ahora vamos a comenzar con el proceso de instalación, lo primero que hay que hacer es **abrir una ventana de la aplicación de Terminal**. Puedes encontrar la aplicación de Terminal via Spotlight o **buscándola en tu dock de aplicaciones.**

![Screen Shot 2021-09-10 at 21.12.08.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_21.12.08.png)

Una vez abierta la terminal, deberemos usarla para instalar una aplicación llamada [Crossover](https://www.codeweavers.com/store), la cuál nos ayudara a instalar el programa Raptor. Para instalar Crossover, **copia este comando, pegalo en tu ventana de terminal, y presiona enter.**

```bash
brew install --cask crossover
```

**Después de haber dado enter**, deberá aparecer información indicando el proceso de descarga e instalación. En mi caso, aparece muy poca información ya que la aplicación ya esta descargada.

![Screen Shot 2021-09-10 at 21.36.56.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_21.36.56.png)

Esperaremos a que nos apareza el siguiente mensaje *"🍺 crossover was successfully installed!"*, tal como aparece en la imagen de arriba, y después podremos buscar "Crossover" en nuestras aplicaciones y nos debería aparecer. **Damos clic en el icono para abrir el programa.**

![Screen Shot 2021-09-10 at 21.21.22.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_21.21.22.png)

Al abrir la aplicación por primera vez, veremos un anuncio muy parecido a este, **debemos dar clic en "Open" o "Abrir",** dependiendo de lo que nos aparezca

![Screen Shot 2021-09-10 at 21.40.01.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_21.40.01.png)

Después de aceptar este mensaje, nos aparecerá otro parecido, solo que este aparecerá cada vez que abramos el programa de ahora en adelante. Este mensaje nos dice cuanto tiempo nos queda de la prueba gratuita, y de momento **solo vamos a dar clic en "Try Now" o "Probar ahora"**

![Screen Shot 2021-09-10 at 21.44.21.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_21.44.21.png)

Ahora se nos abrirá otra ventana, donde por fin podremos comenzar la instalación de Raptor. Daremos clic en donde dice "Install a Windows Application" o "Instalar una Aplicación Windows" y se nos abrira el siguiente menú.

![Screen Shot 2021-09-10 at 21.48.26.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_21.48.26.png)

Debemos dar clic en el botón que nos aparece abajo a la izquierda, donde dice **"Browse All Applications", o "Explorar Todas las Aplicaciones"**. Eso desplegará las siguientes opciones, donde **tendremos que escoger "Unlisted Application" o "Applicacion no Listada",** la cual se encuentra al final de la lista. Por último, **daremos clic en el botón de "Continuar"**

![Screen Shot 2021-09-10 at 21.51.51.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_21.51.51.png)

Estamos cerca de terminar la instalación, ahora aparecerá un menú con dos opciones principales, daremos clic en la de arriba que dice **"Choose Installer File..." o "Escoger Archivo de Instalación..."**

![Screen Shot 2021-09-10 at 21.56.21.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_21.56.21.png)

Esto nos abrira una ventana para escoger un archivo, ahi tendremos que escoger el instalador de Raptor que descargamos hace unos minutos, y que debe estar en la carpeta de Descargas. **Despues de haber encontrado el archivo y haberlo seleccionado, haremos clic en "Use this installer" o "Usar este instalador"**

![Screen Shot 2021-09-10 at 22.00.56.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.00.56.png)

Al dar clic, nos aparecerá en la pantalla anterior y **daremos clic en "Continuar"**

![Screen Shot 2021-09-10 at 22.01.27.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.01.27.png)

Por último, nos aparecera una pantalla de confirmación, verifica que los datos sean correctos y **da clic en "Install" o "Instalar"**

![Screen Shot 2021-09-10 at 22.02.22.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.02.22.png)

Eso comenzará el proceso de instalación de Raptor, debemos esperar hasta que nos salga la ventana de instalación que encontrariamos en Windows:

![Screen Shot 2021-09-10 at 22.04.19.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.04.19.png)

Aqui solo es necesario dar "Siguiente" o "Next" en cada una de las ventanas que aparecen, sin cambiar nada de datos, hasta que se complete la instalación y nos aparezca esta pantalla:

![Screen Shot 2021-09-10 at 22.05.10.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.05.10.png)

Ahi podemos dar clic en "Close" o "Cerrar" para concluir la instalación. **¡Felicidades! Has instalado Raptor en tu dispositivo MacOS**

## Consideraciones al usar

Al haber sido una instalación poco convencional al programa, hay algunas consideraciones que debemos tener al utilizarlo. 

### Abrir el programa

Para abrir el programa, podemos encontrarlo en nuestra lista de aplicaciones, tal como cualquier otra aplicación nativa

![Screen Shot 2021-09-10 at 22.10.21.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.10.21.png)

Al dar clic en el Icono, notaras primero se abre la aplicación Crossover, con un mensaje como el que nos aparecio durante la instalación, diciendonos los días restantes de la prueba gratuita. Debemos dar clic en "Try Now" o "Probar ahora" para que Raptor pueda abrirse

![Screen Shot 2021-09-10 at 22.12.36.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.12.36.png)

Después de eso, Raptor iniciará y estará listo para usarse

![Screen Shot 2021-09-10 at 22.13.19.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.13.19.png)

### Guardar Archivos

Una parte muy importante de un programa como Raptor es el poder Guardar y Abrir archivos para poder manipularlos en el programa, pero como esto no es una instalación nativa, esto se debe hacer de una manera específica

Para guardar archivos, debemos ubicarnos dentro de raptor, y dar clic en el menú de arriba a la derecha "File" > "Save as". Eso abrira esta ventana donde **deberemos seleccionar My Mac Desktop. ESTO ES MUY IMPORTANTE,** ya que tenemos que guardar los archivos **SOLAMENTE EN ESTA CARPETA.** Una vez seleccionado My Mac Desktop, escribimos el nombre del archivo y damos clic en "Save"

![Screen Shot 2021-09-10 at 22.18.36.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.18.36.png)

Esto guardará el archivo en el Escritorio de tu Mac, y de ahí podras moverlo a otras carpetas, enviarlo a otras aplicaciones y compartir el archivo con otros.

![Screen Shot 2021-09-10 at 22.19.36.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.19.36.png)

### Abrir Archivos

Ya que ya sabemos Guardar archivos, podrías pensar que abrir archivos sería tan fácil como hacer clic en el icono del escritorio, **pero esto no es así.** Si hacemos clic a un archivo .rap (Archivo de Raptor) desde nuestra Mac, nos aparecera un error así

![Screen Shot 2021-09-10 at 22.21.44.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.21.44.png)

La manera correcta de abrir archivos es la siguiente, primero nos ubicaremos en una ventana de Raptor, y **daremos clic en la parte superior izquierda donde dice "File" > "Open".** Eso nos abrirá un menu donde tendremos que seleccionar la Carpeta que se llama "My Mac Desktop", la misma en donde guardamos nuestros archivos. Ahi podremos encontrar todos los archivos en el Escritorio de la Mac, **basta con escoger el que queremos abrir, y dar clic en "Open"**

![Screen Shot 2021-09-10 at 22.25.15.png](/%C2%BFCo%CC%81mo%20intalar%20raptor%20en%20MacOS%2008b136db64194f9b82d1c86a79f58f60/Screen_Shot_2021-09-10_at_22.25.15.png)

## Conclusión

Si seguimos esta guía correctamente, deberiamos tener una instalación funcional del software de Raptor en nuestro dispositivo MacOS. La principal desventaja de este método, es que la aplicación que utilizamos para lograrlo (Crossover) solo tiene una prueba gratuita de 14 días. Sin embargo, [existe una manera de alargar esta prueba indefinidamente como se explica en este artículo.](http://example.com)

¡Espero que esta guía te haya sido de mucha ayuda y que te haya sacado de un apuro!