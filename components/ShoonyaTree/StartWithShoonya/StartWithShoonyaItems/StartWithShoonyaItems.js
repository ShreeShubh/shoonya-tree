import { startWithShoonyaData } from "@/utils/shoonyaTreeData"
import React from "react"

const StartWithShoonyaItems = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {startWithShoonyaData.map((item, index) => {
        return (
          <li key={item.index}>
            <div
              className="h-96 w-72 bg-cover bg-center flex items-end"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="bg-[#7F3F97] rounded-b-2xl w-full px-3 py-5 flex flex-col gap-3">
                <h1 className="text-2xl text-white font-semibold">
                  {item.title}
                </h1>
                <p className="text-lg text-white">{item.desc}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default StartWithShoonyaItems
