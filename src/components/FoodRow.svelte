<script lang="ts">
  let {foodName, units, quantity, quantityUnit, onQuantityUpdate, onUnitUpdate} = $props();


  let selectedUnitProtein = $derived(quantityUnit.protein * quantity)
</script>

<style>
  li {
    display: grid; 
    grid-template-columns: 10fr 1fr 10fr 10fr;
    padding: 4px;
  }
</style>

<li>
  <div>
    {foodName}
  </div>
  <div>
    <input type="number" bind:value={() => quantity, (v) => onQuantityUpdate(v)}  min="0" style="width: 40px;"/>
  </div>
  <div>
    <select name="unit" bind:value={() => quantityUnit.unitName, (v) => onUnitUpdate(v)}>
      {#each units as unit}
        <option value={unit.unitName}>{unit.unitName}</option>
      {/each}
    </select>
  </div>
  <div>
    {Math.round(selectedUnitProtein)}
  </div>
</li>