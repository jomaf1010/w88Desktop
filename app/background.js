// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.
var path = require('path');

import { app, Menu } from 'electron';
import { MenuTemplate } from './helpers/dev_menu_template';
import createWindow from './helpers/window';

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from './env';

let mainWindow, ppapi_flash_path = null;

var setApplicationMenu = function () {
    var menus = [MenuTemplate];

    if (env.name !== 'production') {
        //menus.push(MenuTemplate);
    }

    Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

var initFlashPlayer = function () {

    if(process.platform  == 'win32'){

        ppapi_flash_path = path.join(__dirname, 'flashPlugin/pepflashplayer.dll');

    } else if (process.platform == 'darwin') {

        ppapi_flash_path = path.join(__dirname, 'flashPlugin/PepperFlashPlayer.plugin');
    }

    console.log(ppapi_flash_path);

    app.commandLine.appendSwitch('ppapi-flash-path', ppapi_flash_path);

// Specify flash version, for example, v18.0.0.203
    app.commandLine.appendSwitch('ppapi-flash-version', '21.0.0.216');


};

var _createWindow = function () {

    mainWindow = createWindow('main', {
        width: 1377,
        height: 768,
        resizable: true,
        'webPreferences': {'plugins': true}
    });

    //mainWindow.loadURL('file://' + __dirname + '/app.html');

    mainWindow.loadURL('http://w88981.com');

    if (env.name !== 'production') {
        mainWindow.openDevTools();
    }

};

initFlashPlayer();

app.on('ready', function () {

    setApplicationMenu();

    _createWindow();
});

app.on('window-all-closed', function () {
        app.quit();
});


