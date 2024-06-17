export interface RootState {
  theme: {
    isDarkMode: boolean;
  };
  local: {
    isLocale: string;
  };
  loading: {
    isLoading: boolean;
  };
}
