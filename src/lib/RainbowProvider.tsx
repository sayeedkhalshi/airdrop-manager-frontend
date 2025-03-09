"use client";

import * as React from "react";
import {
    RainbowKitProvider,
    // getDefaultWallets,
    getDefaultConfig,
    darkTheme,
    Chain,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";

// const { wallets } = getDefaultWallets();
const lineaSepolia = {
    id: 59_141,
    name: "Linea Sepolia",
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/27657.png",
    iconBackground: "#fff",
    nativeCurrency: { name: "Linea Ether", symbol: "LineaETH", decimals: 18 },
    rpcUrls: {
        default: {
            http: [
                "https://linea-sepolia.infura.io/v3/24NvPKnk43M4PcAuOPParAN3AFB",
            ],
        },
    },
    blockExplorers: {
        default: { name: "LineaScan", url: "https://sepolia.lineascan.build" },
    },
    // contracts: {
    //     multicall3: {
    //         address: "0xca11bde05977b3631167028862be2a173976ca11",
    //         blockCreated: 11_907_934,
    //     },
    // },
} as const satisfies Chain;

const config = getDefaultConfig({
    wallets: [
        {
            groupName: "Recommended",
            wallets: [metaMaskWallet],
        },
    ],
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains: [lineaSepolia],
});

const queryClient = new QueryClient();

export function RainbowProviders({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    modalSize="compact"
                    theme={darkTheme({
                        //...darkTheme.accentColors.green,
                        accentColor: "darkgreen",
                        accentColorForeground: "#e2e7e7",
                        borderRadius: "large",
                        overlayBlur: "small",
                    })}
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}