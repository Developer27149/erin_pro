import { format } from "date-fns"
import { useEffect, useState } from "react"

interface ClockProps {
  className?: string
}
export default function (props: ClockProps) {
  // const [time, setTime] = useState<string>(
  //   format(Date.now(), "yyyy-MM-dd HH:mm:ss")
  // )
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const value = format(Date.now(), "yyyy-MM-dd HH:mm:ss")
  //     console.log(value)
  //     setTime(value)
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])

  const time = 1
  console.log(format(Date.now(), "yyyy-MM-dd HH:mm:ss"))
  return (
    <div {...props}>
      <div className="w-[320px]">{time}</div>
    </div>
  )
}
