cordova.define('cordova/plugin_list', function(require, exports, module) {
               module.exports = [
                                 {
                                 "id": "com.telerik.plugins.nativepagetransitions.NativePageTransitions",
                                 "file": "plugins/com.telerik.plugins.nativepagetransitions/www/NativePageTransitions.js",
                                 "pluginId": "com.telerik.plugins.nativepagetransitions",
                                 "clobbers": [
                                              "window.plugins.nativepagetransitions"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-device.device",
                                 "file": "plugins/cordova-plugin-device/www/device.js",
                                 "pluginId": "cordova-plugin-device",
                                 "clobbers": [
                                              "device"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-keyboard.keyboard",
                                 "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
                                 "pluginId": "cordova-plugin-keyboard",
                                 "clobbers": [
                                              "window.Keyboard"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
                                 "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
                                 "pluginId": "cordova-plugin-wkwebview-engine",
                                 "clobbers": [
                                              "cordova.exec"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-camera.Camera",
                                 "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
                                 "pluginId": "cordova-plugin-camera",
                                 "clobbers": [
                                              "Camera"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-camera.CameraPopoverOptions",
                                 "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
                                 "pluginId": "cordova-plugin-camera",
                                 "clobbers": [
                                              "CameraPopoverOptions"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-camera.camera",
                                 "file": "plugins/cordova-plugin-camera/www/Camera.js",
                                 "pluginId": "cordova-plugin-camera",
                                 "clobbers": [
                                              "navigator.camera"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-camera.CameraPopoverHandle",
                                 "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
                                 "pluginId": "cordova-plugin-camera",
                                 "clobbers": [
                                              "CameraPopoverHandle"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-imagepicker.ImagePicker",
                                 "file": "plugins/cordova-plugin-imagepicker/www/imagepicker.js",
                                 "pluginId": "cordova-plugin-imagepicker",
                                 "clobbers": [
                                              "plugins.imagePicker"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-network-information.network",
                                 "file": "plugins/cordova-plugin-network-information/www/network.js",
                                 "pluginId": "cordova-plugin-network-information",
                                 "clobbers": [
                                              "navigator.connection",
                                              "navigator.network.connection"
                                              ]
                                 },
                                 {
                                 "id": "cordova-plugin-network-information.Connection",
                                 "file": "plugins/cordova-plugin-network-information/www/Connection.js",
                                 "pluginId": "cordova-plugin-network-information",
                                 "clobbers": [
                                              "Connection"
                                              ]
                                 }
                                 ];
               module.exports.metadata =
               // TOP OF METADATA
               {
               "com.telerik.plugins.nativepagetransitions": "0.6.5",
               "cordova-plugin-device": "1.1.6",
               "cordova-plugin-keyboard": "1.1.5",
               "cordova-plugin-whitelist": "1.3.2",
               "cordova-plugin-wkwebview-engine": "1.1.3",
               "cordova-plugin-x5-webview": "3.1.0",
               "cordova-plugin-camera": "2.4.1",
               "cordova-plugin-imagepicker": "1.1.0",
               "cordova-plugin-network-information": "1.3.3"
               };
               // BOTTOM OF METADATA
               });

