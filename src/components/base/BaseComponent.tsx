import React from 'react'
import { ToastParams, showToast } from '../../utils/GlobalConstants'

export default abstract class BaseComponent<P = {}, S = {}> extends React.Component<P, S> {

  $toast(params: ToastParams) {
    showToast(params)
  }

  $message(message: string) {
    this.$toast({ message })
  }
}
