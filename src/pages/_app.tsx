import '../../styles/global.css';

import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@ui/styles/theme';

import AppLayout from 'src/ui/components/Layout/AppLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Coloque aqui qualquer lógica que precisa ser executada ao iniciar o aplicativo
  }, []); // Certifique-se de passar um array de dependências vazio se não precisar de dependências

  return (
    <ChakraProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
};

export default MyApp;
