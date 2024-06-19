import { View, Text, YStack } from "tamagui";
import { MainCard } from "./MainCard";

export const SubCard = ({ data }) => {
  const history = data.transactions || [];

  const renamePeriod = () => {
    if (data.date == new Date().toDateString()) {
      return "Today";
    } else {
      return "Yesterday";
    }
  };

  return (
    <View key={data.index}>
      <Text marginBottom={10}>{renamePeriod()}</Text>
      <YStack gap={10}>
        {history.map((transaction) => (
          <MainCard data={transaction} key={transaction.index} />
        ))}
      </YStack>
    </View>
  );
};
