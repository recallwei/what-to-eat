import type { Food } from '@/types'

export const getRandomFood = (foods: Food[]): Food => {
  const randomIndex = Math.floor(Math.random() * foods.length)
  return foods[randomIndex]
}
