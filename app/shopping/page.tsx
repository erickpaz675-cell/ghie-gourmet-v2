'use client'
import { useState } from 'react'

export default function ShoppingPage() {
  const [items, setItems] = useState([
    { id: 1, name: 'Pollo', quantity: '2 kg', checked: false },
    { id: 2, name: 'Arroz', quantity: '5 kg', checked: false },
    { id: 3, name: 'Salsa de soya', quantity: '1 botella', checked: false },
    { id: 4, name: 'Vinagre', quantity: '1 botella', checked: false },
  ])
  const [newItem, setNewItem] = useState('')
  const [newQty, setNewQty] = useState('')

  const addItem = () => {
    if (!newItem.trim()) return
    setItems([...items, { id: Date.now(), name: newItem, quantity: newQty, checked: false }])
    setNewItem('')
    setNewQty('')
  }

  const toggle = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i))
  }

  const remove = (id: number) => {
    setItems(items.filter(i => i.id !== id))
  }

  return (
    <main className="min-h-screen bg-yellow-50 p-6">
      <a href="/" className="text-yellow-600 font-semibold mb-4 block">← Volver</a>
      <h1 className="text-3xl font-bold text-yellow-600 mb-6">🛒 Lista de Compras</h1>

      <div className="flex gap-2 mb-6">
        <input
          className="flex-1 border-2 border-yellow-300 rounded-xl p-3 text-sm"
          placeholder="Ingrediente..."
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
        />
        <input
          className="w-24 border-2 border-yellow-300 rounded-xl p-3 text-sm"
          placeholder="Cantidad"
          value={newQty}
          onChange={e => setNewQty(e.target.value)}
        />
        <button
          onClick={addItem}
          className="bg-yellow-400 text-white font-bold px-4 rounded-xl"
        >
          +
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {items.map(item => (
          <div key={item.id} className={`bg-white rounded-2xl p-4 shadow-md flex items-center gap-3 ${item.checked ? 'opacity-50' : ''}`}>
            <input type="checkbox" checked={item.checked} onChange={() => toggle(item.id)} className="w-5 h-5 accent-yellow-500" />
            <div className="flex-1">
              <p className={`font-semibold text-gray-800 ${item.checked ? 'line-through' : ''}`}>{item.name}</p>
              <p className="text-sm text-gray-400">{item.quantity}</p>
            </div>
            <button onClick={() => remove(item.id)} className="text-red-400 font-bold text-lg">✕</button>
          </div>
        ))}
      </div>
    </main>
  )
}