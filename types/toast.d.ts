// toast.d.ts
declare module 'kitvue/src/plugin' {
  interface ToastPluginOptions {
    autoClose?: number
    theme?: 'auto' | 'light' | 'dark' | 'colored'
    position?:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'
  }

  interface ToastPlugin {
    install(app: any, options?: ToastPluginOptions): void
    options: ToastPluginOptions
  }

  const toast: (options?: ToastPluginOptions) => ToastPlugin

  export default toast
}
