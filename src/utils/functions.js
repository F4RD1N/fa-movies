export const sliceYearFromDate = value => value.slice(0, 4)

export const getFullLanguageName = lang => {
  switch(lang) {
    case 'en': return 'English'
    case 'fa': return 'Persian'
    case 'ja': return 'Japanese'
    case 'zh': return 'Chinese'
    case 'cn': return 'Chinese'
    case 'fr': return 'French'
    case 'es': return 'Spanish'
    case 'it': return 'Italiano'
    case 'no': return 'Norwegian'
    case 'bn': return 'Bengali'
    case 'ru': return 'Russian'
    case 'fi': return 'Finnish'
    case 'ko': return 'Korean'
    default : return 'didnt set'
  }
}

export const sliceFullYear = value => {
  return value.slice(0, 10).replaceAll('-', '/')
}

export const getAgeLimit = genre => {
  switch(genre){
   case 'Animation': return '5'
   case 'Action': return '13'
   case 'Romance': return '18'
   case 'Horror': return '17'
   default: return '13'
  }
}

export const splitCharacterName = name => {
  return name.split("/")[0]
}

export const getCurrentPath = path => {
  return path.split("/")[1]+'/'
}

export const setOrderArrayById = arr => {
  return arr.sort((a, b) => a.id - b.id)
}

export const queryString = query => {
	return(JSON.parse(`{"${query.slice(1).replaceAll('&', ', ').replaceAll('=', '": ').replaceAll(', ', '", "').replaceAll(': ', ': "')}"}`).query.replaceAll('%20', ' '))
}

export const yearsList = () => {
  const yearList = []
  for(let i = 2022; i >= 1950; i--) {
    yearList.push(i)
  }
  return yearList
}

export const sliceTitle = title => {
  return title.split("").length > 25 ? title.slice(0,25)+'...' : title
}