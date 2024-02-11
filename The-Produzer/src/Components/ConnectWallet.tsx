import * as React from "react";
import { Button } from "@/Components/ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {

                const ready = mounted && authenticationStatus !== "loading";

                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus || authenticationStatus === "authenticated");

                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                    >
                        {(() => {

                            if (!connected) {
                                return (
                                    <Button
                                        className="p-3 mt-3 md:mt-0 rounded-none hover:bg-orange-600 dark:hover:bg-orange-600 tracking-wider font-bold bg-[#121212] dark:bg-white"
                                        onClick={openConnectModal}
                                    >
                                        CONNECT WALLET
                                    </Button>
                                );
                            }

                            return (
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8 pb-2 md:pb-0 mt-3 md:mt-0">
                                    <Button
                                        className="p-4 rounded-none flex md:hidden lg:flex gap-1 items-center bg-[#121212] dark:bg-white hover:bg-orange-600 dark:hover:bg-orange-600"
                                        onClick={openChainModal}
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 22,
                                                    height: 22,
                                                    borderRadius: 999,
                                                    overflow: "hidden",
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? "Chain icon"}
                                                        src={chain.iconUrl}
                                                        style={{ width: 20, height: 20 }}
                                                    />
                                                )}
                                            </div>
                                        )}

                                        <p className="text-md">{chain.name}</p>
                                    </Button>

                                    <Button
                                        className="bg-[#121212] dark:bg-white hover:bg-orange-600 dark:hover:bg-orange-600 p-4 rounded-none"
                                        onClick={openAccountModal}
                                    >
                                        {account.displayName}
                                    </Button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export default ConnectWallet;