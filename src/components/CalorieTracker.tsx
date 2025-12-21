import type { Activity } from "../types"

type CalorieTrackerProps = {
  activities: Activity[]
}

export default function CalorieTracker({activities}: CalorieTrackerProps){
  return (
    <div className="text-white">Calorie Tracker</div>
  )
}