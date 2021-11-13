<template>
  <div>
    <h4 class="text-center">{{actualQuestion.question}} </h4>

    <div class="row">
      <div class="col-12">
        <q-btn class="q-mt-md bg-secondary text-white" @click="giveAnswer(1)" style="width: 100%" :label="actualQuestion.first"/>
        <q-btn class="q-mt-md bg-secondary text-white" @click="giveAnswer(2)"  style="width: 100%" :label="actualQuestion.second"/>
        <q-btn class="q-mt-md bg-secondary text-white" @click="giveAnswer(3)"  style="width: 100%" :label="actualQuestion.third"/>
        <q-btn class="q-mt-md bg-secondary text-white" @click="giveAnswer(4)"  style="width: 100%" :label="actualQuestion.fourth"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "VueQuestion",
  props:["actualQuestion"],
  methods: {
    giveAnswer(index){
      console.log(index, '99')
      this.$emit('answerQuestion', index)
    }
  }
}
</script>

<style scoped>

</style>
