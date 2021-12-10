const useGetClassName = (componentName) => {
  return (elementName) => elementName ? `${componentName}-${elementName}` : componentName;
}

export default useGetClassName;