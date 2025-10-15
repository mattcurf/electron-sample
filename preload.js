const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // Future IPC methods will be added here
  onGaugeUpdate: (callback) => {
    ipcRenderer.on('gauge-update', callback);
  },
  
  removeAllListeners: (channel) => {
    ipcRenderer.removeAllListeners(channel);
  }
});
