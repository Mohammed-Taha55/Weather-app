import { Select,
     SelectContent, 
     SelectItem, 
     SelectTrigger, 
     SelectValue ,
    } from  "@/components/ui/select"
import type { Dispatch, SetStateAction } from "react"


type Props = {
  location:string
  setLocation:Dispatch<SetStateAction<string>>
}
export default function LocationDropdown({location,setLocation}: Props) {
  return (
<Select value={location} onValueChange={(value) => setLocation(value)}>
  <SelectTrigger className="w-full xs:w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent className="z-1001">
   { location==="custom" && <SelectItem value={"custom"}>
      Custom
    </SelectItem>}
 {locations.map(city=>(
    <SelectItem key={city} value={city}>
        {city}
    </SelectItem>
 ))}
  </SelectContent>
</Select>
  )
}
const locations=[
  "New York",
  "London",
  "Tokyo",
  "Paris",
  "Dubai",
  "Singapore",
  "Sydney",
  "Hong Kong",
  "Rome",
  "Barcelona",
  "Istanbul",
  "Los Angeles",
  "Ballari"
]