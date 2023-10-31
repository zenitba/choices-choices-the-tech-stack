<template>
   
      <navbar />
      <home />
      <over />
      <expertise />
      <klimaatadaptie />
      <wateradaptie />
      <brain />
      <projecten />
      <kennisbank />
      <team />
      <contact />
      <partners />
      <foot />

  </template>
  
  <script>
  import navbar from '~/components/navbar.vue'
  import home from '~/components/home.vue'
  import over from '~/components/over.vue'
  import expertise from '~/components/expertise.vue'
  import klimaatadaptie from '~/components/klimaatadaptie.vue'
  import wateradaptie from '~/components/wateradaptie.vue'
  import brain from '~/components/brain.vue'
  import projecten from '~/components/projecten.vue'
  import kennisbank from '~/components/kennisbank.vue'
  import team from '~/components/team.vue'
  import contact from '~/components/contact.vue'
  import partners from '~/components/partners.vue'
  import foot from '~/components/foot.vue'
  
  export default {
    components: {
      navbar,
      home,
      over,
      expertise,
      klimaatadaptie,
      wateradaptie,
      brain,
      projecten,
      kennisbank,
      team,
      contact,
      partners,
      foot
    }
  }
  </script>
  