<template>
  <iframe
    :src="getEmbedUrl(location)"
    frameborder="0"
    allowfullscreen
    class="location-map"
  />
</template>

<script>
const EMBED_URL = Object.freeze({
  'AJ Katzenmaier': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.6542461157287!2d-87.63124444865021!3d41.900292379118454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses!2ses!4v1553613699189',
  'Greenbay': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0258843736074!2d-87.64003334864985!3d41.91380227911725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses!2ses!4v1553613815661',
  'Howard A Yeager': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5856830903645!2d-87.66511994864962!3d41.92326457911664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses!2ses!4v1553613879011',
  'Marjorie P Hart': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.29191466318!2d-87.64809164864947!3d41.929578279116114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses!2ses!4v1553613943049',
  'North': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.33779985396!2d-87.64838234865003!3d41.907096479117804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+EE.+UU.!5e0!3m2!1ses!2ses!4v1553613982996',
  'South': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.747950529812!2d-87.65356074864968!3d41.919776779116916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+EE.+UU.!5e0!3m2!1ses!2ses!4v1553614032359'
})

export default {
  name: 'LocationMap',
  props: {
    location: {
      type: String,
      required: true
    }
  },
  methods: {
    getEmbedUrl (location) {
      return EMBED_URL[location]
    }
  }
}
</script>

<style>
.location-map {
  margin: 10px auto 0;
  width: 75vw;
  height: 150px;
  border: 0px;
}
</style>
