import { Button, Container, Loader, Paper, Text, Title } from "@mantine/core";
import { useCallback, useState } from "react";

import { useWallet } from "../../hooks/wallet";
import { get } from "../../utils/request";

export default function Reward() {
  const [claimRequestState, setClaimRequestState] = useState("initial");
  const { connectWallet } = useWallet();

  const handleConnectButtonClick = useCallback(async () => {
    const connectedAccount = await connectWallet();
    if (connectedAccount == null) {
      return;
    }
    async function claimNFT() {
      try {
        setClaimRequestState("pending");
        await get({
          endpoint: import.meta.env.VITE_SFF_BACKEND_ENDPOINT,
          path: "/gettoken",
          query: {
            to: connectedAccount,
            id: 2,
            quantity: 1,
          },
        });
        setClaimRequestState("success");
      } catch (err) {
        console.log(err);
        setClaimRequestState("failure");
      }
    }
    claimNFT();
  });

  return (
    <Container size="xs">
      <Paper radius="md" withBorder p="lg">
        <Title align="center" size={64}>
          🎉
        </Title>
        <Title align="center" order={1} mt="md">
          Congrats!
        </Title>
        <Text align="center" color="dimmed" mt="xs">
          You have successfully finished our finance checklist.
        </Text>
        <Text align="center" color="dimmed">
          Connect your wallet to receive your{" "}
          <Text color="yellow" inherit component="span">
            {`"RockSolid golden badge"`}
          </Text>
        </Text>
        {claimRequestState === "initial" && (
          <Button
            color="blue"
            fullWidth
            mt="xl"
            onClick={handleConnectButtonClick}
          >
            Connect to Coinbase Wallet
          </Button>
        )}
        {claimRequestState === "pending" && (
          <Button color="blue" fullWidth mt="xl">
            <Loader color="white" size="sm" variant="dots" />
          </Button>
        )}
        {claimRequestState === "success" && (
          <Button color="green" fullWidth mt="xl">
            Your NFT is on the way! 🥳
          </Button>
        )}
        {claimRequestState === "failure" && (
          <Button
            color="red"
            fullWidth
            mt="xl"
            onClick={handleConnectButtonClick}
          >
            Failed to claim NFT! 😞 Retry?
          </Button>
        )}
      </Paper>
    </Container>
  );
}
