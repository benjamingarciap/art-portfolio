export default function formatTitleAndDetailsWithYear(slug: string) {
  // Split year and rest
  const [year, restSlug] = slug.split('/')

  // Run your existing logic on restSlug
  const withSpaces = restSlug.replace(/-/g, ' ')

  const match = withSpaces.match(/\d.*$/)

  let titlePart = withSpaces
  let detailsPart = ''

  if (match) {
    const index = match.index!
    titlePart = withSpaces.slice(0, index).trim()
    detailsPart = withSpaces.slice(index).trim()
  }

  const capitalizedTitle =
    titlePart.charAt(0).toUpperCase() + titlePart.slice(1).toLowerCase()

  const measurementMatch = detailsPart.match(/^([\d\scmx\.]+)(.*)$/i)

  if (!measurementMatch) {
    const capitalizedDetails =
      detailsPart.charAt(0).toUpperCase() + detailsPart.slice(1)
    return { year, title: capitalizedTitle, details: capitalizedDetails.trim() }
  }

  const measurements = measurementMatch[1].trim()
  let rest = measurementMatch[2].trim()

  if (!rest) {
    return { year, title: capitalizedTitle, details: measurements }
  }

  const firstSpaceIndex = rest.indexOf(' ')
  if (firstSpaceIndex === -1) {
    rest = rest.charAt(0).toUpperCase() + rest.slice(1)
  } else {
    const firstWord = rest.slice(0, firstSpaceIndex)
    const remaining = rest.slice(firstSpaceIndex)
    rest = firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + remaining
  }

  const finalDetails = `${measurements} - ${rest}`

  return { year, title: capitalizedTitle, details: finalDetails }
}
