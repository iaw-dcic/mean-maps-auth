# Ejemplo de Mean usando maps y autenticación, para subir a codenvy.

## Fuentes

- [GoogleMap AngularJS Directive](https://github.com/allenhwkim/angularjs-google-maps)
- [Node Token Authentication](https://github.com/scotch-io/node-token-authentication)
- [Facebook Comments Plugin](https://developers.facebook.com/docs/plugins/comments/)


## Codenvy

[Create Workspace](https://codenvy.io/dashboard/#/create-project)

- Source => Import from existing location (https://github.com/iaw-dcic/mean-maps-auth.git)
- Create new workspace from stack => Node
- Cambiar nombres y descripciones 

## Eclipse Che

### Mongo

Instalar Mongo desde la consola ([Instrucciones completas](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/#install-mongodb-community-edition))

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```


### configurar comandos:

Agregar 2 'run commands':

- db: 
  - command line: `cd /projects/mean-maps-auth && mkdir -p data && mongod --dbpath ./data`

- node server:
  - command line: `cd /projects/mean-maps-auth && npm install && node server.js`
  - preview: `${server.3000}`

### Maps Key

Agregar la key correspondiente a google maps en el import de la librería js en index.html

`<script src="http://maps.google.com/maps/api/js?key=<key>"></script>`

