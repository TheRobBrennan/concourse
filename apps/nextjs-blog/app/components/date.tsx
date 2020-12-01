import { parseISO, format } from "date-fns"

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)

  // See https://date-fns.org/v2.16.1/docs/format for more format() string options
  // Monday, November 30th, 2020
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>
}
