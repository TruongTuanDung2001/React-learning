function App(){
  const name = "Dũng"
  const age = 25
  const total = 50
  return (
    <div>
      <h1>Tên: {name}</h1>
      <h1>Tuổi: {age}</h1>
      <h1>Tổng: {total + age}</h1>
    </div>
  )
}

export default App
