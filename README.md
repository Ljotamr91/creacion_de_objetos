# Creacion_de_objetos

0 clonas repositorio 

    git clone url


1 borrar carpeta .git que ya viene de la clonacion 
	carpeta oculta .git
		 rm -rf .git

2 inicializas el repositorio para que cree la carpeta oculta .git
    git init

3 añades los archivos al seguimiento de git de uno en uno o todos a la vez ( hay 2 opciones )

	git add namefile

    git add -A

4 hacemos commit con comentario 

	git commit -m "introduze aqui el comentario"

5 agregamos la url del repositorio donde lo subiremos

	git remote add origin url

6 subimos los cambios definitivamente 

	git push origin master

X  eliminar tus vias remotas

	git remote remove origin

Y luego crearlas con TU url, no la mia, tu GitHub
	git remote origin master

Z repetir el 4 y el 6 cada vez que quieras actualiar en tu repositorio github


