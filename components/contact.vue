<template>
    <section class="contact section" id="experience">
      <div class="contact-container container grid">
        <div class="contact-data">
          <div class="contact-text">
            <h2>We houden van korte lijntjes, jij toch ook?</h2>
            <h2>Kom met ons in gesprek!</h2>
            <a class="send-us" href="mailto:info@spatwater.nl">Stuur ons een e-mail</a>
          </div>
          <p class="mail-text"><strong>info@spatwater.nl</strong></p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
    .contact {
      padding: 4rem 3rem;
      background-color: var(--lg-bg);
    }
  
    .contact-text {
      font-size: 1rem;
      color: var(--darkblue);
    }
  
    .contact-data {
      color: var(--spat);
    }
  
    .send-us {
      color: var(--spat);
      text-decoration: underline;
    }
  
    .send-us:hover {
      text-decoration: none;
    }
  </style>
