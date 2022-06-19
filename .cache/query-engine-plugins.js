
import * as pluginGatsbyNode0 from "../node_modules/gatsby-source-drupal/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"

export const gatsbyNodes = {
"gatsby-source-drupal": pluginGatsbyNode0,
"gatsby-source-filesystem": pluginGatsbyNode1,
"gatsby-plugin-page-creator": pluginGatsbyNode2,
}

export const gatsbyWorkers = {

}

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "d1a32b8b-209b-5dcb-84e1-a3ea38cc426f",
    "name": "gatsby-source-drupal",
    "version": "5.17.1",
    "pluginOptions": {
      "plugins": [],
      "baseUrl": "https://jedi-obmg.pantheonsite.io/",
      "apiBase": "jsonapi",
      "concurrentFileRequests": 20,
      "concurrentAPIRequests": 20,
      "requestTimeoutMS": 30000,
      "imageCDN": true
    },
    "nodeAPIs": [
      "onPreBootstrap",
      "sourceNodes",
      "onCreateDevServer",
      "pluginOptionsSchema",
      "createSchemaCustomization"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "ed670848-db7b-5980-983e-77185789d2f7",
    "name": "gatsby-source-filesystem",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/src/images",
      "name": "images"
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "0a8bd2bd-703c-5545-9dae-e827278eabb6",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "87f3b437-08d2-50c2-9330-1fcaab4b7263",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "d273f9be-f1b7-5cde-ad40-20835f593fcc",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "ca55aba2-b55b-5111-a538-a998a7c91915",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "2c328c67-bba1-56ba-9291-c8e584e494c2",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "be3e1580-ebc8-5ba6-bad0-4f1a3743fca8",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "5654d582-a14d-54b8-8e22-970ae5fe0ab2",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "9e60703e-0c03-5215-9017-f09134db6102",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby-source-drupal/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "6d121081-0177-5620-8928-41055de02182",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "e29e5e88-3f98-5911-bf04-d1b0070c27ce",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/node_modules/gatsby-plugin-react-axe/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  },
  {
    "resolve": "",
    "id": "86760c02-b988-5982-979d-fc9035675a1f",
    "name": "gatsby-plugin-page-creator",
    "version": "4.16.0",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/jeremyevans/test/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPagesStatefully",
      "setFieldsOnGraphQLNodeType",
      "onPluginInit"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": ""
  }
]
