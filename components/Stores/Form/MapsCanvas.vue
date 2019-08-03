<template>
  <div id="map" />
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('wait')

export default {
  name: 'FormMapsCanvas',
  props: {
    hasId: {
      type: Boolean,
      default: false
    },
    isLoaded: {
      type: Boolean,
      default: false
    },
    defaultGeo: {
      type: Object,
      default() {
        return {
          lat: 37.565289,
          lng: 126.8491206
        }
      }
    }
  },
  computed: {
    ...mapGetters(['any']),
    hasGeo() {
      return Object.values(this.geo).every(l => l !== 0)
    },
    geo() {
      const [lat, lng] = this.$attrs.value
        .split(',')
        .map(v => parseFloat(v, 10))

      return {
        lat,
        lng
      }
    }
  },
  watch: {
    geo: {
      immediate: true,
      handler(geo) {
        this.$nextTick(() => this.initMap())
      }
    }
  },
  methods: {
    initMap() {
      const mapDiv = document.getElementById('map')
      const mapOptions = {
        center: this.hasGeo ? this.geo : this.defaultGeo,
        zoom: 14
      }
      const { google } = window
      const { Map, Marker, drawing, ControlPosition } = google.maps
      const { MARKER } = drawing.OverlayType
      const { TOP_CENTER } = ControlPosition
      const { DrawingManager } = drawing
      const drawingManagerOptions = {
        drawingMode: MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: TOP_CENTER,
          drawingModes: ['marker']
        },
        markerOptions: {
          draggable: true
        }
      }

      if (mapDiv) {
        this.map = new Map(mapDiv, mapOptions)

        if (this.hasId) {
          const { map, setGeo } = this
          const marker = new Marker({
            position: this.geo,
            map,
            draggable: true
          })
          marker.addListener('dragend', setGeo)
        } else {
          const drawingManager = new DrawingManager(drawingManagerOptions)

          let _marker

          drawingManager.setMap(this.map)
          drawingManager.addListener('markercomplete', marker => {
            if (_marker) {
              _marker.setMap(null)
            }
            _marker = marker
            marker.addListener('dragend', this.setGeo)
          })
        }
      }
    },
    getLatLng(e) {
      return Object.keys(e.latLng).reduce(
        (p, n) => ({
          ...p,
          [n]: e.latLng[n]()
        }),
        {}
      )
    },
    setGeo(e) {
      const { lat, lng } = this.getLatLng(e)

      this.$emit('input', `${lat},${lng}`)
    }
  }
}
</script>

<style scoped>
#map {
  height: 250px;
  margin-top: 20px;
}
</style>
