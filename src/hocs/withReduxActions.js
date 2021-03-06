/**
 * HOC which wraps component with redux connect and allows to pass only actions
 * If you want to use redux connect only for actions and wnat to omit passing empty state object
 */
import { connect } from "react-redux"

export const withReduxActions = (actions = {}) => (Component) => {
  const noPropsFromReduxState = () => ({})
  return connect(noPropsFromReduxState, actions)(Component)
}
