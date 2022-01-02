<template>
  <div>
   <!-- <iframe :src="'https://docs.google.com/gview?url=https://expert.co.mz/'+'storage/pdf/DXw91638622732.pdf'+'&embedded=true'"
            style="width:100%; height:100%;" frameborder="0">

    </iframe>-->
    <div v-if="lesson.pdf_link">
      <iframe :src="'https://docs.google.com/gview?url=https://expert.co.mz/'+lesson.pdf_link+'&embedded=true'"
              style="width:100%; height:100%;" frameborder="0">

      </iframe>

      <q-btn label="Baixar PDF" @click="downloadPDF"/>
    </div>
    <div class="text-h6 text-center" v-else>
      Sem informação
    </div>


  </div>
</template>

<script>
export default {
  name: "LessonPDF",
  props: ["lesson"],
  methods: {
    downloadPDF() {
      console.log('Im downloading')
      this.$axios.get('/api/downloadPDF/'+this.lesson.id,
        {responseType: 'blob'}).then(function (response) {
        console.log('data',response.data)
        let blob = new Blob([response.data])

        if (typeof cordova !== 'undefined') {
          this.saveBlob2File(this.lesson.pdf_link, blob)
        } else {
          console.log('I aint doing', cordova)
        }

      }).catch(function (error) {
        console.log('Im failing')
        console.log(error)
      })
    },
    saveBlob2File: function saveBlob2File(fileName, blob) {
      let folder = cordova.file.externalRootDirectory + 'Download'
      window.resolveLocalFileSystemURL(folder, function (dirEntry) {
        console.log('file system open: ' + dirEntry.name)
        this.createFile(dirEntry, fileName, blob)
      }, this.onErrorLoadFs())
    },
    createFile(dirEntry, fileName, blob) {
      // Creates a new file
      dirEntry.getFile(fileName, {create: true, exclusive: false}, function (fileEntry) {
        this.writeFile(fileEntry, blob)
      }, this.onErrorCreateFile)
    },
    writeFile(fileEntry, dataObj) {
      // Create a FileWriter object for our FileEntry
      fileEntry.createWriter(function (fileWriter) {
        fileWriter.onwriteend = function () {
          console.log('Successful file write...')
        }

        fileWriter.onerror = function (error) {
          console.log('Failed file write: ' + error)
        }
        fileWriter.write(dataObj)
      })
    },
    onErrorLoadFs(error) {
      console.log('erro ',error)
    },
    onErrorCreateFile(error) {
      console.log('Error ',error)
    }
  }
}
</script>

<style scoped>

</style>
