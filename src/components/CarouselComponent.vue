<template>
  <div class="carousel" v-if="images.length">
    <div class="inner" ref="inner">
      <transition-group name="list-complete" tag="div">
        <img v-for="image in images" :key="image.id" :class="{active: selectedImages.includes(image)}" @click="$store.commit('list/set', image)" :src="image.download_url" />
      </transition-group>
    </div>
    <button class="carousel-button prev" @click="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-left"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="15 6 9 12 15 18" />
      </svg>
    </button>
    <button @click="next" class="carousel-button next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-right"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    storeImages() {
      return this.$store.getters['images/get']
    },
    selectedImages() {
      return this.$store.getters['list/get']
    }
  },
  watch: {
    storeImages(val) {
      this.images = [...val]
    }
  },
  data() {
    return {
      images: []
    }
  },
  methods: {
    next() {
      const img = this.images.shift()
      this.images.push(img)
    },
    prev() {
      const img = this.images.pop()
      this.images.unshift(img)
    }
  }
}
</script>
