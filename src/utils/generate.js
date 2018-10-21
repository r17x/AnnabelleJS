import {template} from '../templates'

const validateEndpoint = (url) => {
  if (url.match(/\{.*\}/gm)) {
    const pattern = /(GET|POST|DELETE|PUT|PATCH)\s*(.+)(\{.*\})/gm
    const [, method, endpoint, params] = pattern.exec(url)
    return {
      method,
      endpoint,
      params,
    }
  }
  const pattern = /(GET|POST|DELETE|PUT|PATCH)\s*(.+)/gm
  const [, method, endpoint] = pattern.exec(url)
  return {
    method,
    endpoint,
  }
}

class Generate {
  constructor(props) {
    this.name = props.name
    this.endpoints = props.endpoints.map((endpoint) =>
      validateEndpoint(
        endpoint
      )
    )
  }

  generate() {
    const result = this.endpoints.map( (endpoint) => {
      endpoint.name = this.name
      return template(endpoint)
    }).join('\n')

    return `import axios from 'axios'

${result}
    `
  }
}

export {
  Generate,
}
