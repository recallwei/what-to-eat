<script lang="ts">
  import { slide } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  import { BaseLayout } from '@/layouts'
  import { FoodCard } from '@/components'
  import { foodList } from '@/constants'
  import { getRandomFood } from '@/utils'

  let todayYouWillEat = ''

  const handleClickWhatToEat = () => {
    todayYouWillEat = ''
    const foodItem = getRandomFood(foodList)
    todayYouWillEat = foodItem.name
  }

  let intervalId: NodeJS.Timeout
  let pressTimer: NodeJS.Timeout

  function startScroll() {
    pressTimer = setTimeout(() => {
      intervalId = setInterval(handleClickWhatToEat, 100)
    }, 1000)
  }

  function stopScroll() {
    clearTimeout(pressTimer)
    if (!intervalId) return
    clearInterval(intervalId)
  }
</script>

<main>
  <BaseLayout>
    <div class="flex flex-col items-center text-center">
      <button
        class="my-8 w-fit rounded-md bg-pink-400 p-2 text-white transition-all hover:scale-105 active:scale-100 active:opacity-80"
        on:click={handleClickWhatToEat}
        on:touchstart={startScroll}
        on:touchend={stopScroll}
        on:mousedown={startScroll}
        on:mouseup={stopScroll}
      >
        What to eat?
      </button>

      {#key todayYouWillEat}
        <div
          transition:slide={{
            delay: 200,
            duration: 300,
            easing: quintOut,
            axis: 'y'
          }}
          class="text-xl"
        >
          {#if todayYouWillEat}
            <span>{todayYouWillEat}</span>
          {/if}
        </div>
      {/key}

      {#if false}
        <div
          class="mb-8 flex w-full flex-col flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:flex-row sm:gap-y-8"
        >
          {#each foodList as foodItem}
            <FoodCard
              data={foodItem}
              class="h-60 w-full sm:w-[calc(25%-24px)]"
            />
          {/each}
        </div>
      {/if}
    </div>
  </BaseLayout>
</main>
