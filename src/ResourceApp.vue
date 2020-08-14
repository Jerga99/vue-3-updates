
<template>
  <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">{{title}}</span>
        <span class="badge badge-secondary badge-pill">{{resourceCount}}</span>
      </h4>
      <resource-list
        :resources="resources"
        :activeId="activeResource?._id"
        @on-item-click="selectResource"
      />
    </div>
    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Resource {{activeResource?._id}}</h4>
      <resource-detail :resource="activeResource" />
    </div>
  </div>
</template>

<script>
import { fetchResources } from '@/actions'
import ResourceDetail from '@/components/ResourceDetail'
import ResourceList from '@/components/ResourceList'
export default {
  components: {
    ResourceDetail,
    ResourceList,
  },
  data() {
    return {
      title: 'Your resources',
      selectedResource: null,
      resources: []
    }
  },
  async created() {
    this.resources = await fetchResources()
  },
  computed: {
    hasResources() {
      return this.resourceCount > 0
    },
    activeResource() {
      return this.selectedResource || (this.hasResources && this.resources[0]) || null
    },
    resourceCount(){
      return this.resources.length
    }
  },
  methods: {
    selectResource(resource) {
      this.selectedResource = {...resource}
    }
  }
}
</script>
