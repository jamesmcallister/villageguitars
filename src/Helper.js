export const safeUrl = DataIn =>
  DataIn.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')

const findUniqueTag = propsIn => {
  const displayOnWebSite = propsIn =>
    Object.keys(propsIn)
      .map(x => propsIn[x])
      .map(id => id.fields)
      .filter(fields => fields.DisplayOnWebSite === true)

  const TagList = displayOnWebSite(propsIn).map(x => x.Tags)

  const unique = function(xs) {
    return xs.filter(function(x, i) {
      return xs.indexOf(x) === i
    })
  }

  let newone = []
  newone = newone.concat(...TagList)
  return unique(newone)
}

export const TagsList = props => findUniqueTag(props)
