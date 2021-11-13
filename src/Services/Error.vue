<template>
  <div>

  </div>
</template>

<script>

import {Notify} from 'quasar'

let notify = null
let process = null
export default {

  openNotify(message, timeout=0) {
    notify = Notify.create({
      type:'negative',

      message: message,
      timeout: timeout
    })
  },
  openPrrocessing( timeout=0) {

    process = Notify.create({
      spinner:true,
      message: 'Por favor aguarde',
      timeout: timeout
    })
  },
  closeNotify(){
    notify()
  },
  closeprocessing(){
    process()
  }
}
</script>
