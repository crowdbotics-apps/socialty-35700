import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4986fa2-c245-418b-9f71-b98a61c4c5e0"
        }}
        style={styles.ImageBackground_419_516}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3a247fd-038f-4c46-adea-07b59d105ae9"
        }}
        style={styles.ImageBackground_419_576}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc31fef7-8641-4c34-82f9-a442999fe26c"
        }}
        style={styles.ImageBackground_419_577}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51f4a75a-8d07-43e9-ac56-f16cf07a269e"
        }}
        style={styles.ImageBackground_419_578}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85a15210-6baf-4775-bcd6-c6b9a94dc82b"
        }}
        style={styles.ImageBackground_419_579}
      />
      <View style={styles.View_419_517} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eef8b908-20d0-49ef-bfb9-b0dfb1c82024"
        }}
        style={styles.ImageBackground_419_518}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/167b3fce-9307-4635-85fa-5ce013da3573"
        }}
        style={styles.ImageBackground_419_519}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1d73969-9f8b-4644-9c3f-a7694d87ed24"
        }}
        style={styles.ImageBackground_419_520}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48e6d6c1-5aff-4720-9074-1fb57497416f"
        }}
        style={styles.ImageBackground_419_524}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65d72528-744e-4242-b8fa-55a4a451e823"
        }}
        style={styles.ImageBackground_419_525}
      />
      <View style={styles.View_419_526} />
      <View style={styles.View_419_527} />
      <View style={styles.View_419_528} />
      <View style={styles.View_419_529} />
      <View style={styles.View_419_530} />
      <View style={styles.View_419_531} />
      <View style={styles.View_419_532} />
      <View style={styles.View_419_533} />
      <View style={styles.View_419_534} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b74c8224-c618-4e67-a4dc-4fb8fb0a1e04"
        }}
        style={styles.ImageBackground_419_535}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67b5c3bd-2cca-4997-ac4b-602ce7318068"
        }}
        style={styles.ImageBackground_419_536}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ca17ddc-7a0d-4b3d-b7be-f2af1553def3"
        }}
        style={styles.ImageBackground_419_537}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d824d9a-c0b8-4a4d-977a-69f01694ecd2"
        }}
        style={styles.ImageBackground_419_538}
      />
      <View style={styles.View_419_539} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5b10754-04b5-4dbd-8bdb-08374cbff81b"
        }}
        style={styles.ImageBackground_419_540}
      />
      <View style={styles.View_419_541}>
        <Text style={styles.Text_419_541}>Notifications</Text>
      </View>
      <View style={styles.View_419_582}>
        <Text style={styles.Text_419_582}>@username favorited survey</Text>
      </View>
      <View style={styles.View_419_583}>
        <Text style={styles.Text_419_583}>@username favorited survey</Text>
      </View>
      <View style={styles.View_419_585}>
        <Text style={styles.Text_419_585}>Recent survey from @username</Text>
      </View>
      <View style={styles.View_419_587}>
        <Text style={styles.Text_419_587}>Recent survey from @username</Text>
      </View>
      <View style={styles.View_419_620}>
        <Text style={styles.Text_419_620}>Survey recieved --- votes</Text>
      </View>
      <View style={styles.View_419_622}>
        <Text style={styles.Text_419_622}>Survey recieved --- votes</Text>
      </View>
      <View style={styles.View_419_588} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/734d7be7-52b6-487a-95b2-8108fc7191ef"
        }}
        style={styles.ImageBackground_419_589}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/432cefeb-ce03-4078-975e-8b1657fe5a4c"
        }}
        style={styles.ImageBackground_419_590}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86df3eaf-ab24-48f2-b0a5-2416cb3159c4"
        }}
        style={styles.ImageBackground_419_591}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a70d0f02-a392-4fa2-b0a6-d70572b3e94d"
        }}
        style={styles.ImageBackground_419_592}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c35b89c2-239a-41c3-8354-d6f4af44f6cc"
        }}
        style={styles.ImageBackground_419_593}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d521d14-051b-4593-8f0f-d3f770586ad9"
        }}
        style={styles.ImageBackground_419_594}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4899ac2-2d66-46f4-b732-8f414e664e2d"
        }}
        style={styles.ImageBackground_419_595}
      />
      <View style={styles.View_419_612} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/020a238e-bf4e-4bc8-b64d-e20d9e0c49b6"
        }}
        style={styles.ImageBackground_419_613}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94c43b0f-6ac4-4c50-924e-5bf48a92356d"
        }}
        style={styles.ImageBackground_419_614}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69e0de22-06fa-4977-8774-d69dbe794176"
        }}
        style={styles.ImageBackground_419_615}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c8f0def-53bd-4d69-be52-9412af47744e"
        }}
        style={styles.ImageBackground_419_616}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e066fe1-e293-41d5-aa3b-6bfca88ecdd2"
        }}
        style={styles.ImageBackground_419_617}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4121d096-9bef-4992-9e82-f943b1c8a92d"
        }}
        style={styles.ImageBackground_419_618}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad9f6698-3ae4-4c45-b7ec-ae9534406d56"
        }}
        style={styles.ImageBackground_419_619}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(118, 156, 255, 1)" },
  View_2: { height: hp("262%") },
  ImageBackground_419_516: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_419_576: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("44%")
  },
  ImageBackground_419_577: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("75%")
  },
  ImageBackground_419_578: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("106%")
  },
  ImageBackground_419_579: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("137%")
  },
  View_419_517: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("249%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_419_518: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("242%")
  },
  ImageBackground_419_519: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("242%")
  },
  ImageBackground_419_520: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("250%")
  },
  ImageBackground_419_524: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("244%")
  },
  ImageBackground_419_525: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("248%")
  },
  View_419_526: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("243%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_527: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("254%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_528: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("249%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_529: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("249%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_530: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("244%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_531: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("252%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_532: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("244%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_533: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("252%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_534: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("248%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_419_535: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("241%")
  },
  ImageBackground_419_536: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("240%")
  },
  ImageBackground_419_537: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("252%")
  },
  ImageBackground_419_538: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("252%")
  },
  View_419_539: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("255%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_419_540: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("251%")
  },
  View_419_541: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_419_541: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.8160000228881836,
    textTransform: "none"
  },
  View_419_582: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_419_582: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6800000190734863,
    textTransform: "none"
  },
  View_419_583: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_419_583: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6800000190734863,
    textTransform: "none"
  },
  View_419_585: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_419_585: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6800000190734863,
    textTransform: "none"
  },
  View_419_587: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("138%"),
    justifyContent: "flex-start"
  },
  Text_419_587: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6800000190734863,
    textTransform: "none"
  },
  View_419_620: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("169%"),
    justifyContent: "flex-start"
  },
  Text_419_620: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6800000190734863,
    textTransform: "none"
  },
  View_419_622: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("198%"),
    justifyContent: "flex-start"
  },
  Text_419_622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6800000190734863,
    textTransform: "none"
  },
  View_419_588: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("168%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_419_589: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("168%")
  },
  ImageBackground_419_590: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("168%")
  },
  ImageBackground_419_591: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("173%")
  },
  ImageBackground_419_592: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("176%")
  },
  ImageBackground_419_593: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("178%")
  },
  ImageBackground_419_594: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("181%")
  },
  ImageBackground_419_595: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("184%")
  },
  View_419_612: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("198%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_419_613: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("198%")
  },
  ImageBackground_419_614: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("198%")
  },
  ImageBackground_419_615: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("204%")
  },
  ImageBackground_419_616: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("206%")
  },
  ImageBackground_419_617: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("210%")
  },
  ImageBackground_419_618: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("213%")
  },
  ImageBackground_419_619: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("216%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
