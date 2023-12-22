import {
    Button,
    ChakraProvider,
    Flex,
    Heading,
    Spinner,
} from "@chakra-ui/react";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../theme";

const ErrorFallback = () => {
    return (
        <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            h="100vh"
        >
            <Heading>Ooops, aconteceu um erro :( </Heading>
            <Button
                mt={4}
                onClick={() => window.location.assign(window.location.origin)}
            >
                Atualizar
            </Button>
        </Flex>
    );
};

type AppProps = {
    children: React.ReactNode;
};
export default function AppProvider(props: AppProps) {
    const { children } = props;
    return (
        <React.Suspense
            fallback={
                <Flex
                    flexDir="column"
                    alignItems="center"
                    justifyContent="center"
                    h="100vh"
                >
                    <Spinner size="xl" />
                </Flex>
            }
        >
            <ChakraProvider theme={theme}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <HelmetProvider>
                        <Router>
                            <>{children}</>
                        </Router>
                    </HelmetProvider>
                </ErrorBoundary>
            </ChakraProvider>
        </React.Suspense>
    );
}