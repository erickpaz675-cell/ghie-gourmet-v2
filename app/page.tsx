export default function MenuPage() {
  const dishes = [
    { name: "Adobo de Pollo", price: 8.50, description: "Pollo guisado en vinagre y salsa de soya" },
    { name: "Sinigang", price: 9.00, description: "Sopa agria con verduras y cerdo" },
    { name: "Lechon Kawali", price: 10.00, description: "Panceta de cerdo frita crujiente" },
    { name: "Pancit Bihon", price: 7.50, description: "Fideos de arroz salteados con verduras" },
    { name: "Kare-Kare", price: 11.00, description: "Guiso de maní con verduras y rabo de buey" },
  ]

  return (
    <main className="min-h-screen bg-orange-50 p-6">
      <a href="/" className="text-orange-500 font-semibold mb-4 block">← Volver</a>
      <h1 className="text-3xl font-bold text-orange-600 mb-6">📋 Menú Filipino</h1>

      <div className="flex flex-col gap-4">
        {dishes.map((dish, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-bold text-gray-800">{dish.name}</h2>
              <span className="text-orange-500 font-bold">${dish.price.toFixed(2)}</span>
            </div>
            <p className="text-gray-500 text-sm">{dish.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}