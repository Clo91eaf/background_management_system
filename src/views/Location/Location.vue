<template>
  <baidu-map class="map" center="杭州" :scroll-wheel-zoom="true">
    <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
  </baidu-map>
</template>
<style>
.map {
  width: 100%;
  height: 100%;
}
</style>