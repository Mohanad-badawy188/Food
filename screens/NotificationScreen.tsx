import React, { Fragment } from "react";
import styled from "styled-components/native";
import { AreaView } from "../components/GLobalStyles";
import { NotificationData } from "../FakeData";
import NotificationFollow from "../components/Notifications/NotificationFollow";
import NotificationLike from "../components/Notifications/NotificationLike";
import { ScrollView } from "react-native";
const Container = styled.View`
  margin: 15px 30px;
  padding-bottom: 30px;
`;
const Header = styled.Text`
  font-size: 17px;
  font-weight: 700;
  line-height: 27px;
  text-align: left;
  color: rgba(62, 84, 129, 1);
`;

export default function NotificationScreen() {
  return (
    <AreaView>
      <ScrollView>
        <Container>
          <Header>New</Header>
          {NotificationData.map((item) =>
            item.type === "follower" && item.new ? (
              <Fragment key={item.id}>
                <NotificationFollow
                  img={item.img}
                  name={item.name}
                  description={item.description}
                  date={item.date}
                />
              </Fragment>
            ) : (
              item.type === "like" &&
              item.new && (
                <Fragment key={item.id}>
                  <NotificationLike
                    img={item.img}
                    name={item.name}
                    description={item.description}
                    date={item.date}
                  />
                </Fragment>
              )
            )
          )}
          <Header>Today</Header>
          {NotificationData.map((item) =>
            item.type === "follower" && item.dayTime === "today" ? (
              <Fragment key={item.id}>
                <NotificationFollow
                  img={item.img}
                  name={item.name}
                  description={item.description}
                  date={item.date}
                />
              </Fragment>
            ) : (
              item.type === "like" &&
              item.dayTime === "today" && (
                <Fragment key={item.id}>
                  <NotificationLike
                    img={item.img}
                    name={item.name}
                    description={item.description}
                    date={item.date}
                    recipeImg={item.recipeImg}
                  />
                </Fragment>
              )
            )
          )}
          <Header>Yesterday</Header>
          {NotificationData.map((item) =>
            item.type === "follower" && item.dayTime === "yesterday" ? (
              <Fragment key={item.id}>
                <NotificationFollow
                  img={item.img}
                  name={item.name}
                  description={item.description}
                  date={item.date}
                />
              </Fragment>
            ) : (
              item.type === "like" &&
              item.dayTime === "yesterday" && (
                <Fragment key={item.id}>
                  <NotificationLike
                    img={item.img}
                    name={item.name}
                    description={item.description}
                    date={item.date}
                    recipeImg={item.recipeImg}
                  />
                </Fragment>
              )
            )
          )}
          {/*  */}
        </Container>
      </ScrollView>
    </AreaView>
  );
}
