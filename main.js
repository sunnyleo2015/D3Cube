/**
 * Created by Administrator on 2017/6/19.
 */
const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;

let _window;

function createWindow() {
    _window = new BrowserWindow({width: 1280, height: 800});
    _window.loadURL(`file://${__dirname}/index.html`);

    _window.webContents.openDevTools();

    _window.on('close', ()=>{
       win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', ()=>{
    if(win === null){
        createWindow();
    }
});