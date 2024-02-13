import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@mui/material';

export const ConnectBtn = () => {
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
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button sx={{
                    padding: '8px 22px',
                    fontFamily: 'Space Grotesk',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    background: 'none',
                    color: 'white',
                    fontWeight: 600,
                    bgcolor: '#16182D',
                    border: '2px solid #D334FF',
                    borderRadius: 0,
                    '&:hover': {
                      bgcolor: '#c800ff'
                    }
                  }} onClick={openConnectModal} >Connect Wallet</Button>

                );
              }
              if (chain.unsupported) {
                return (
                  <Button sx={{
                    padding: '8px 22px',
                    fontFamily: 'Space Grotesk',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    background: 'red',
                    color: 'white',
                    fontWeight: 500,
                    border: '1px solid white',
                    borderRadius: 0,
                    '&:hover': {
                      bgcolor: '#C7C8CC80'
                    }
                  }} onClick={openChainModal} >Wrong Network</Button>

                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <Button sx={{
                    padding: '8px 22px',
                    fontFamily: 'Space Grotesk',
                    fontSize: '14px',
                    boxSizing: 'border-box',
                    background: 'none',
                    color: 'white',
                    bgcolor: "#16182D",
                    fontWeight: 500,
                    border: '2px solid #16D0FF',
                    borderRadius: 0,
                    '&:hover': {
                      bgcolor: '#00bbea'
                    }
                  }} onClick={openAccountModal} >{account.displayName}</Button>

                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};