<script lang="ts">
  import type { Food } from '@/types'

  export let data: Food
  export let className: string

  export { className as class }
</script>

<main
  class="flex h-fit cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all hover:scale-110 {className}"
>
  <img
    src="123"
    alt=""
    class="w-full"
    height="200"
  />
  <div>{data.name}</div>
  <div></div>
</main>
