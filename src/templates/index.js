const getName = (name, method, params) => {
  method = method.toUpperCase()
  return (['PUT', 'PATCH'].includes(method) && `Update${name}`)
    || (method === 'POST' && params && `Save${name}s`)
    || (method === 'POST' && `Save${name}`)
    || (method === 'DELETE' && `Delete${name}`)
    || (method === 'GET' && params && `Get${name}`)
    || (method === 'GET' && `Get${name}s`)
}

const getMethod = (endpoint, method, params) => {
  method = method.toUpperCase()
  if (params) {
    endpoint = `${endpoint}$${params}`
  }
  return (
    ['POST', 'PUT', 'PATCH']
      .includes(method) &&
      `${method.toLowerCase()}(\`${endpoint}\`, {data: data})`
  ) || `${method.toLowerCase()}(\`${endpoint}\`)`
}

const getParams = (params, method) => {
  params = params.match(/\w+/i) || []
  method = method.toUpperCase()
  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    params.push('data')
  }

  return params.join(', ')
}

export const template = ({
  name,
  endpoint,
  method,
  params,
}) => {
  const _name = getName(name, method, !!params)
  const _method = getMethod(endpoint, method, params)
  const _params = getParams(params ? params : '', method)
  return `
export const ${_name} = (${_params}) => {
    return axios
        .${_method}
        .then(({data}) => data)
        .catch( e => {
            throw e; 
        })
        
}
`
}
