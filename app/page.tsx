export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-orange-600 mb-2">🍽️ Ghie Gourmet</h1>
      <p className="text-gray-500 mb-10 text-center">Sistema de operaciones del restaurante</p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <a href="/menu" className="bg-orange-500 text-white text-center text-xl font-semibold py-5 rounded-2xl shadow-md active:scale-95">
          📋 Menú
        </a>
        <a href="/shopping" className="bg-yellow-400 text-white text-center text-xl font-semibold py-5 rounded-2xl shadow-md active:scale-95">
          🛒 Lista de Compras
        </a>
        <a href="/inventory" className="bg-green-500 text-white text-center text-xl font-semibold py-5 rounded-2xl shadow-md active:scale-95">
          📦 Inventario
        </a>
      </div>
    </main>
  )
}