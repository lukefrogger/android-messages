const {app, BrowserWindow} = require('electron')
var path = require('path')

let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 600, icon: path.join(__dirname, 'assets/messages_96dp.png')})

  mainWindow.on('closed', function () {
      mainWindow = null;
  })
  mainWindow.loadURL("https://messages.android.com/");
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
