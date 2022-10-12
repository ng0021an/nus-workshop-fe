import {
  Badge,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
  Title,
  createStyles,
} from "@mantine/core";

const mockdata = [
  {
    imageUrl:
      "https://ipfs.io/ipfs/bafybeidjphmskutj2zhl342n6l63n6dr2dac6ccps72yt6lao7q2ut7hv4",
  },
  {
    imageUrl:
      "https://ipfs.io/ipfs/bafybeidjphmskutj2zhl342n6l63n6dr2dac6ccps72yt6lao7q2ut7hv4",
  },
  {
    imageUrl:
      "https://ipfs.io/ipfs/bafybeidjphmskutj2zhl342n6l63n6dr2dac6ccps72yt6lao7q2ut7hv4",
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },
  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const features = mockdata.map((feature, index) => (
    <Image height={400} src={feature.imageUrl} key={index} radius="md" />
  ));

  return (
    <Container size="md" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Company B
        </Badge>
      </Group>
      <Title order={2} className={classes.title} align="center" mt="sm">
        {`Welcome to the "Annual XXX Conference"`}
      </Title>
      <Text color="dimmed" align="center" mt="md">
        Connect your wallet to see if you are eligible to attend the conference.
      </Text>
      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="xs"
      >
        The following NFTs are accepted as entrance ticket:
      </Text>
      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "xs", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
