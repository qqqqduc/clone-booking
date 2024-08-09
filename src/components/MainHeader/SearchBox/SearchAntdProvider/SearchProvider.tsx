import { ConfigProvider } from 'antd'
import { Locale } from 'antd/es/locale';
import React from 'react'

interface SearchAntdProvider{
    children: React.ReactNode;
    locale?: Locale;
}
const SearchAntdProvider: React.FC<SearchAntdProvider> = ({
    children,
    locale
}) => {
  return (
    <ConfigProvider
        theme={{
            token: {
                boxShadowSecondary: ' 0 2px 16px 0 rgba(26,26,26,0.24)', 
            },
        }}
        locale={locale}
    >
    {
        children
    }
  </ConfigProvider>
  )
}

export default SearchAntdProvider;