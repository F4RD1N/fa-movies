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
    case 'fi': return 'Finnish'
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