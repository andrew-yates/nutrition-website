<script lang="ts">
  import FoodRow from './FoodRow.svelte';
  let {foods, datePickerId} = $props();

  let date = $state((document.getElementById(datePickerId) as HTMLInputElement).value)

  $effect(() => {
    const datePicker = document.getElementById(datePickerId) as HTMLInputElement;
    const handler = () => {
      date = datePicker.value;
    };
    datePicker.addEventListener("change", handler);
    
    return () => {
      datePicker.removeEventListener("change", handler);
    };
  });

  interface FoodHistory {
    [key: string]: FoodDay | null
  }
  interface FoodDay {
    [foodName: string]: FoodDayQuantity | null
  }
  interface FoodDayQuantity {
    unitName: string;
    quantity: number;
  }

  // Todo: pull from localStorage and update localStorage
  // let dailyFoodAmounts: FoodHistory = $state({
  //   "2025-04-02": {"peas": {"unitName": "g", "quantity": 200}, "egg": {"unitName": "egg", "quantity": 2}}
  // });
  let dailyFoodAmounts: FoodHistory = $state(JSON.parse(localStorage.getItem("dailyFoodAmounts") || "{}"));
  let foodAmounts = $derived(dailyFoodAmounts[date] ?? {});

  const onQuantityUpdate = (date: string) => (foodName: string) => (quantity: number) => {
    if (!dailyFoodAmounts[date]) {
      dailyFoodAmounts[date] = {}
    }
    if (!dailyFoodAmounts[date][foodName]) {
      const foodUnits = foods.find(food => food.foodName === foodName).units;
      dailyFoodAmounts[date][foodName] = {unitName: foodUnits[0].unitName, quantity: 0}
    }
    dailyFoodAmounts[date][foodName].quantity = quantity;
    updateLocalStorage();
  }

  const onUnitUpdate = (date: string) => (foodName: string) => (unitName: string) => {
    if (!dailyFoodAmounts[date]) {
      dailyFoodAmounts[date] = {}
    }
    if (!dailyFoodAmounts[date][foodName]) {
      const foodUnits = foods.find(food => food.foodName === foodName).units;
      dailyFoodAmounts[date][foodName] = {unitName: foodUnits[0].unitName, quantity: 0}
    }
    dailyFoodAmounts[date][foodName].unitName = unitName;
    updateLocalStorage();
  }

  const updateLocalStorage = () => localStorage.setItem("dailyFoodAmounts", JSON.stringify(dailyFoodAmounts));

  let unitNameToUnit = (foodName: string, unitName: string) => foods.find(f => f.foodName === foodName).units.find(u => u.unitName === unitName)
</script>

<style>
  ul {
    padding-inline-start: 0;
  }
</style>

<ul>
  {#each foods as food}
    <FoodRow 
      foodName={food.foodName}
      units={food.units} 
      quantity={foodAmounts[food.foodName]?.quantity ?? 0} 
      quantityUnit={unitNameToUnit(food.foodName, foodAmounts[food.foodName]?.unitName ?? food.units[0].unitName)}
      onQuantityUpdate={onQuantityUpdate(date)(food.foodName)}
      onUnitUpdate={onUnitUpdate(date)(food.foodName)} />
  {/each}
</ul>

