export const BootSplash = {
  hide: (_options?: {fade?: boolean; duration?: number}) => {
    return Promise.resolve(true);
  },
  getVisibilityStatus: () => {
    return 'hidden';
  },
}
