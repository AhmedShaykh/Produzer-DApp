"use client";
import {
    RainbowKitProvider,
    connectorsForWallets,
    darkTheme
} from "@rainbow-me/rainbowkit";
import { phantomWallet } from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
    polygonMumbai,
    sepolia,
    lineaTestnet
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai, sepolia, lineaTestnet],
    [publicProvider()]
);

const demoAppInfo = {
    appName: "RainbowKit Integrate Next.JS",
};

const connectors = connectorsForWallets([
    {
        groupName: "Phantom",
        wallets: [phantomWallet({ chains })],
    }
]);

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider
                chains={chains}
                appInfo={demoAppInfo}
                modalSize="compact"
                theme={darkTheme()}
            >
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
};

export default Provider;