import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Prato } from '../../ProductList'

type PratoState = {
  items: Prato[]
  isOpen: boolean
  step: number
}

const initialState: PratoState = {
  items: [],
  isOpen: false,
  step: 1
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('Este prato ja foi adicionado ao carrinho')
      }
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },

    open: (state) => {
      state.isOpen = true
    },

    close: (state) => {
      state.isOpen = false
    },

    nextStep: (state) => {
      state.step += 1
    },

    prevStep: (state) => {
      state.step -= 1
    }
  }
})

export const { add, remove, open, close, nextStep, prevStep } =
  cartSlice.actions

export default cartSlice.reducer
