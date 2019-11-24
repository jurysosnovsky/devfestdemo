const { app, BrowserWindow } = require("electron");

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        backgroundColor: "#F7F7F7",
        minWidth: 300,
        resizable: true,
        center: true,
        show: false,
        maximizable: true,
        fullscreenable: false,
        titleBarStyle: "default",
        webPreferences: {
            nodeIntegration: true,
        },
        useContentSize: true,
        height: 800,
        width:  800,
    });

    mainWindow.loadURL('http://localhost:3000/');

    mainWindow.once("ready-to-show", () => {
        mainWindow.show();
    });

};

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    app.quit();
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});