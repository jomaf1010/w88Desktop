import { app, BrowserWindow } from 'electron';

export var MenuTemplate = {
    label: 'Development',
    submenu: [{
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function () {
            BrowserWindow.getFocusedWindow().webContents.reloadIgnoringCache();
        }
    },{
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click: function () {
            app.quit();
        }
    }]
};
