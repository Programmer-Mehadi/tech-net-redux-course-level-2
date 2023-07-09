function App() {
  return (
    <div className="mt-8">
      <div className="flex gap-4 items-center justify-center">
        <button className="w-fit border-2 border-red-700 py-2 px-5 rounded-full">
          Decrement
        </button>
        <div className="w-fit">0</div>
        <button className="w-fit border-2 border-green-700 py-2 px-5 rounded-full">
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
