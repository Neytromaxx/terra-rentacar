<template>
  <div class="faq-container">
     <div class="row">
      <h1>FAQ</h1>
      <div class="faq-question">
        <p class="faq-questions__questions">What is the minimum age requirements to rent a car in Dubai ?</p>
        <p>Drivers under 25 must have a license for a minimum of three years. The same applies for the person(s) whose name(s) is/are mentioned as additional driver.</p>
      </div>
      <div class="faq-question">
        <p class="faq-questions__questions">What do you need for a luxury car rental in Dubai ?</p>
        <p>Drivers shall be required to have a valid driver's license and Passport copy.</p>
      </div>
      <div class="faq-question">
        <p class="faq-questions__questions">How much is the Insurance limit on luxury car rental Dubai?</p>
        <p>Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.</p>
      </div>
      <div class="faq-question">
        <p class="faq-questions__questions">What are the driving licenses that can be used in Arab countries ?</p>
        <p>Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17 Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.</p>
      </div>
      <div class="faq-question">
        <p class="faq-questions__questions">Can anyone else drive the car i rent?</p>
        <p>The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver's license and passport</p>
      </div>
    </div> 
  </div>
</template>

<script setup>

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