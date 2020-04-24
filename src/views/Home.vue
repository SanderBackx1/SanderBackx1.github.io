<template>
  <div class="home">
    <Landing/>
    <Projects/>
    <Opleidingen/>
    <Prijzen/>
    <Links/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue'
import Projects from '@/components/Projects.vue'
import Opleidingen from '@/components/Opleidingen.vue'
import Prijzen from '@/components/Prijzen.vue'
import Links from '@/components/Links.vue'


export default {
  name: 'Home',
  components: {
    Landing,
    Projects,
    Opleidingen,
    Prijzen,
    Links
  }
}
</script>
