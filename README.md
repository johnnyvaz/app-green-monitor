# Site Dândaro


[![Netlify Status](https://api.netlify.com/api/v1/badges/2aceecf8-d107-49c1-a897-a93eb5a079ce/deploy-status)](https://app.netlify.com/sites/dandaroeducacional/deploys)    [![Gerador de CHANGELOG](https://github.com/johnnyvaz1/site-dandaro/actions/workflows/gerador-de-changelog.yml/badge.svg)](https://github.com/johnnyvaz1/site-dandaro/actions/workflows/gerador-de-changelog.yml) 

## Programas 

Toda edição no site será feito de maneira local, por isso vamos instalar algumas ferramentas para trabalhar com os arquivos do site.

Para começar a manutenção no site será é necessário instalar o __GIT__ , que é uma ferramenta de versionamento.

https://git-scm.com/downloads

Para facilitar a edição iremos instalar o Visual Studio Code.

https://code.visualstudio.com/

## Download dos códigos

Abra o visualstudio na pasta onde irá armazenar os arquivos do site e no Terminal digite os comandos:
```bash
git clone git@github.com:johnnyvaz/site-dandaro.git
```

## Requisitos 
Node e NPM

```bash 
# Instalar os programas
## node 
$ https://nodejs.org/en/download/

## Verifique se estão instalados com os comandos abaixo para verificar a versão
$ npm -v

$ node -v

## Instalar o Yarn de modo global 
$ npm install -g yarn
``` 

## Construir

```bash
# Instalar deṕendências (este comando irá criar a pasta node_modules)
$ npm install 

# Comando para iniciar o site localmente, em seguida abrir o link 
$ npm run dev

```

## Edição do Texto

Diretório __CONTENT__ 



# Tecnologia Utilizadas 
## NUXT JS
[https://nuxtjs.org](https://nuxtjs.org).


## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
diego
