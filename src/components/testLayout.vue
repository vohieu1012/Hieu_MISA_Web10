<template>
  <div>
    <select
      name=""
      id=""
      multiple
      multiselect-select-all="true"
      multiselect-max-selected="3"
    >
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
    </select>
  </div>
</template>


<script>
import select from "../js/layout/multiselect-dropdown.js";

export default {
  components: {},
  mounted() {
    select;
  },
};
</script>
<style scoped>
select {
  width: 220px;
  height: 32px;
}
</style>