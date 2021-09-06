import { boot } from 'quasar/wrappers'


// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

let settingsFiles;
if(process.env.DEBUGGING || process.env.DEV){
   settingsFiles = require('./env_development')
} else {
   settingsFiles = require('./env_prod')
}
const settings = settingsFiles.default.settings


export default { settings }
