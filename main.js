// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow,Menu} = require('electron')
const path = require('node:path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    icon: 'assets/favicon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
        webviewTag: true, // Enable webview tag
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('home.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}
// Listen for the will-fail-load event

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
  const menu = Menu.buildFromTemplate([]);
  Menu.setApplicationMenu(menu);
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.