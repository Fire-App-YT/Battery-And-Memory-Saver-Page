const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const path = require('path')

function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame:false,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false,
      enableRemoteModule: true
    }
  })


  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})