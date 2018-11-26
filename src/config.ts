import merge from 'lodash/merge'


const config: any = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    apiUrl: 'https://jsonplaceholder.typicode.com'
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com'
  }
}

export default merge(config.all, config[config.all.env])
