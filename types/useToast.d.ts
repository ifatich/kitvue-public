declare module 'kitvue/src/hooks/useToast' {
  interface ToastOptions {
    message: any
    interval?: number
    type?: 'default' | 'success' | 'info' | 'error' | 'warning'
    position?:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'
  }

  interface Toast {
    show(options: ToastOptions): void
  }

  const useToast: () => Toast

  export default useToast
}
