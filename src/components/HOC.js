conat HOC = Component => {
  const innerHOC = () => {
    return (
      <Component />
      )
  }
  return innerHOC
}

export default HOC;