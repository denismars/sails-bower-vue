# Simple Sails.js - Bower - Vue.js Project Structure

a [Sails](http://sailsjs.org) application configured to run bower.js and vue.js on the front end.

Note: You need to edit the bower.json file when ever you want to add more front end libraries and also edit the exportsOverride section to incorporate your newly added front end libraries.

To run the application..

sudo npm install

bower install

sails lift

While in development - watch changes to your Vue components:

sudo watchify -t vueify -e src/main.js -o assets/js/builds/build.js

This watchify command will look for changes to you Vue application files under the src directory.
Build your web application within the src directory if you are planning to build a real SPA (single page application) - otherwise feel free to add views in the Sails view area as per Sails docs.

Enjoy!

ps. (to avoid issues i pref some commands with sudo, if you have your paths correctly isntalled without needing sudo then please ignore.)
