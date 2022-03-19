import { useState } from "react"

export default function Home() {
  const [data, updateData] = useState("Data");

  return (
    <div className="container mx-auto">
      <button className="bg-orange-600 px-4 py-1 border-2 border-black-400" onClick={ () => updateData(document.getElementById("data").value)}>Update Data</button>
      <br/>
      <input className="bg-gray-400" id="data" type="text" />
      <br/><br/>
      <p>{data}</p>

    </div>
  )
}
