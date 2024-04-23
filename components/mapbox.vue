<template>
  <div class="map-box">
    <LMap
        ref="map"
        :zoom="zoom"
        :center="center"
        :marker-zoom-animation="true"
        :zoom-animation="true"
    >
      <LMarker :lat-lng="[35.729319, 51.360412]"></LMarker>
      <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
      />
    </LMap>
  </div>
</template>

<script>
export default {
  data(){
    return{
      zoom: 18,
      center : [35.729319, 51.360412]
    }
  }
}
</script>

<style>
.map-box{
  width: 100%;
  height: 100%;
}
</style>
