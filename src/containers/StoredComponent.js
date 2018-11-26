import React from 'react'
import { connect } from 'react-redux'

import { modalHide } from 'store/actions'
import { Text } from 'components'


const StoredComponent = props => <Text {...props} />

const mapDispatchToProps = (dispatch, { name }) => ({
  onClick: () => dispatch(modalHide(name))
})

export default connect(null, mapDispatchToProps)(StoredComponent)
