<template>
  <div class="faq-container">
     <div class="row">
      <h1>FAQ</h1>
      <div class="faq-question">
        <p class="faq-questions__questions">{{ t('faq.ques1') }}</p>
        <p>{{ t('faq.answer1') }}</p>
      </div>
      <div class="faq-question">
        <p class="faq-questions__questions">{{ t('faq.ques2') }}</p>
        <p>{{ t('faq.answer2') }}</p>
      </div>
      <div class="faq-question">
        <p class="faq-questions__questions">{{ t('faq.ques3') }}</p>
        <p>{{ t('faq.answer3') }}</p>
      </div>
      <div class="faq-question">
        <p class="faq-questions__questions">{{ t('faq.ques4') }}</p>
        <p>{{ t('faq.answer4') }}</p>
      </div>
      <div class="faq-question">
        <p class="faq-questions__questions">{{ t('faq.ques5') }}</p>
        <p>{{ t('faq.answer5') }}</p>
      </div>
    </div> 
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
  .faq-container{
    width: 99.8%;
    height: 100%;
    background-color: #1e1f27;
    border: 1px solid #1e1f27;
  }
  .row{
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
  }
  .faq-questions__questions{
    font-size: 1.6em;
  }
  @media (max-width:610px) {
    .faq-container{
      width: 99.8%;
    }
    .row{
      max-width: 590px;
      height: 100%;
      flex-direction: column;
    }
  }
  @media (max-width:590px) {
    .faq-container{
      width: 99.6%;
    }
    .row{
      max-width: 500px;
      height: 100%;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width:490px) {
    .faq-container{
      width: 99.6%;
    }
    .row{
      max-width: 400px;
      height: 100%;
      flex-direction: column;
      align-items: center;
    }
  }
</style>