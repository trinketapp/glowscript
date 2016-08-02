GlowScript makes it easy to write programs in JavaScript, CoffeeScript, RapydScript (a Python look-alike that compiles Python to JavaScript), or VPython (which uses the RapydScript compiler) that generate navigable real-time 3D animations, using the WebGL 3D graphics library available in modern browsers (with modern GPU-based graphics cards). For example, the following complete program creates a 3D canvas in the browser, displays a white 3D cube, creates default lighting, places the camera so that the cube fills the scene, and enables mouse controls to rotate and zoom the camera:

   box()

That's it. That's the whole program (except for the GlowScript version header line that is supplied automatically). The key point is that lots of sensible defaults are built into the GlowScript library. You can of course specify the canvas size, the color and other attributes of the objects, the direction of the camera view, etc.

Full documentation for users is provided: At glowscript.org, click Help at the upper right. There is an extensive set of example programs available from the first page of glowscript.org. Programs can be created and stored at glowscript.org, but it is also possible to export a program to place on your own web page, or use the GlowScript library without storing the program at glowscript.org. For programs stored at glowscript.org, you can share a link with someone and they can run your program simply by clicking on the link. Here is an example:

   http://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/Bounce-VPython

GlowScript was inspired by VPython (http://vpython.org). The project was begun in 2011 by David Scherer and Bruce Sherwood. Originally programs had to be written in JavaScript, but in November 2014 it became possible to use Python, thanks to the RapydScript Python-to-JavaScript compiler (http://www.rapydscript.com).

A new project lets you run VPython programs in a Jupyter notebook: see http://vpython.org. The syntax is the same as GlowScript VPython, but Jupyter VPython uses an installed standard Python, which provides access to the large number of Python modules. GlowScript VPython does not require installing any software but provides access only to libraries written in JavaScript, not to standard Python modules.

In December 2014 the original GlowScript repository was corrupted in such a way that it could not be reconstituted, but a backup that contains the history of commits is here:

   https://bitbucket.org/davidscherer/glowscript_backup/overview
