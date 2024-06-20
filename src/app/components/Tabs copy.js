import { useState } from "react";
import MostPopular from "./crypto/MostPopular";
import BiggestMovers from "./crypto/BiggestMovers";
import Recommendations from "./crypto/Recommendations";
import { AnimatePresence, View, Text, Tabs, YStack, styled } from "tamagui";

const tabContent = {
  tab1: <MostPopular />,
  tab2: <BiggestMovers />,
  tab3: <Recommendations />,
};

const Tabber = ({ menu }) => {
  const [tabState, setTabState] = useState({
    activeAt: null,
    currentTab: "tab1",
    intentAt: null,
    prevActiveAt: null,
  });
  const setCurrentTab = (currentTab) =>
    setTabState({ ...tabState, currentTab });

  const setIntentIndicator = (intentAt) =>
    setTabState({ ...tabState, intentAt });

  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });

  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;

  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }

    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();
  const enterVariant =
    direction === 1 ? "isLeft" : direction === -1 ? "isRight" : "defaultFade";

  const exitVariant =
    direction === 1 ? "isRight" : direction === -1 ? "isLeft" : "defaultFade";
  const handleOnInteraction = (type, layout) => {
    if (type === "select") {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };
  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      flexDirection="column"
      activationMode="manual"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt.width}
              height="$0.5"
              x={intentAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              theme="active"
              active
              width={activeAt.width}
              height="$0.5"
              x={activeAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          borderColor="$color8"
          borderBottomWidth={1}
          gap={15}
        >
          {menu.map((item) => (
            <Tabs.Tab
              key={item.index}
              unstyled
              value={item.value}
              onInteraction={handleOnInteraction}
            >
              <Text paddingHorizontal="$1" paddingVertical="$3">
                {item.name}
              </Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </YStack>
      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack
          key={currentTab}
          animation="100ms"
          x={0}
          opacity={1}
          flex={1}
        >
          <Tabs.Content value={currentTab} forceMount>
            <View marginVertical={10}>{tabContent[currentTab]}</View>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  );
};

const TabsRovingIndicator = ({ active, ...props }) => {
  return (
    <YStack
      position="absolute"
      backgroundColor="$color5"
      opacity={0.7}
      animation="100ms"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: "$color8",
        opacity: 0.6,
      })}
      {...props}
    />
  );
};

const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },
    isRight: { true: { x: 25, opacity: 0 } },
    defaultFade: { true: { opacity: 0 } },
  },
});
export default Tabber;
