import {getAllModels} from "@/app/lib/models"
import type { Model } from "@/app/types"

export default async function Modelspage() {
const models =  await getAllModels()
  return (

models.map((model:Model) => {
 return <p key ={model.id}>{model.name}</p>
})

  )
}
