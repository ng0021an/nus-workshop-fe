import { Button, Center, Container } from "@mantine/core";
import { IconBrandCoinbase } from "@tabler/icons";
import { useCallback, useEffect, useMemo } from "react";

import { useWallet } from "../../hooks/wallet";

export default function Checkin() {
  const { account, connectWallet } = useWallet();

  const accountShortForm = useMemo(() => {
    if (account == null) {
      return "";
    }
    return `${account.substring(0, 6)}...${account.substring(
      account.length - 4,
    )}`;
  }, [account]);

  useEffect(() => {
    if (account == null) {
      return;
    }
    // TODO: Fetch currently owned NFTs for user's wallet
  }, [account]);

  const handleConnectButtonClick = useCallback(async () => {
    await connectWallet();
  });

  return (
    <Container size="xs">
      <Center>
        {account != null && (
          <Button
            variant="white"
            leftIcon={<IconBrandCoinbase />}
            mt="md"
            size="md"
            radius="xl"
          >
            ${accountShortForm}
          </Button>
        )}
        {account === null && (
          <Button
            color="blue"
            fullWidth
            mt="md"
            size="md"
            radius="xl"
            onClick={handleConnectButtonClick}
          >
            Check-in with Coinbase Wallet
          </Button>
        )}
      </Center>
    </Container>
  );
}
