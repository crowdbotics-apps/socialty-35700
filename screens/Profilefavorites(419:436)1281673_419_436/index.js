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
      <View style={styles.View_419_437} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aaf9cb33-8237-4060-b80b-e643fc349a53"
        }}
        style={styles.ImageBackground_419_438}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06186824-e0e0-4a92-8476-b5fb8b3ce901"
        }}
        style={styles.ImageBackground_419_439}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50ec7d0e-093a-47d7-8727-3f1878427a02"
        }}
        style={styles.ImageBackground_419_440}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72b8705e-74c0-4aef-86c4-4fe05b3a4c19"
        }}
        style={styles.ImageBackground_419_441}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a49721f2-d1c6-4327-8154-d86eab6f63e9"
        }}
        style={styles.ImageBackground_419_442}
      />
      <View style={styles.View_419_443} />
      <View style={styles.View_419_444} />
      <View style={styles.View_419_445} />
      <View style={styles.View_419_446} />
      <View style={styles.View_419_447} />
      <View style={styles.View_419_448} />
      <View style={styles.View_419_449} />
      <View style={styles.View_419_450} />
      <View style={styles.View_419_451} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d7938ba-fb4a-42ff-b6fa-3446f42a22de"
        }}
        style={styles.ImageBackground_419_452}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebd25bb3-5f58-4ecc-a03d-9cc162373364"
        }}
        style={styles.ImageBackground_419_453}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cde68446-149e-4339-b27c-b04836d11155"
        }}
        style={styles.ImageBackground_419_454}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00ed92a1-33fc-4478-9ca7-0fecabc0503b"
        }}
        style={styles.ImageBackground_419_455}
      />
      <View style={styles.View_419_456} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cad38883-98b6-48fe-b225-7293b8a88ef5"
        }}
        style={styles.ImageBackground_419_457}
      />
      <View style={styles.View_419_458} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2cfc7ae-0dc5-4114-a263-f6256e701604"
        }}
        style={styles.ImageBackground_419_459}
      />
      <View style={styles.View_419_460}>
        <Text style={styles.Text_419_460}>@username</Text>
      </View>
      <View style={styles.View_419_461} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe382590-4922-4c9f-894a-8523fe3123a7"
        }}
        style={styles.ImageBackground_419_462}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12fd345b-48f8-40cd-afa2-f12c2eb53617"
        }}
        style={styles.ImageBackground_419_463}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72eb883e-f621-4f6d-97fb-4efe1d84900f"
        }}
        style={styles.ImageBackground_419_464}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/051cdc44-46ba-4a59-95af-6f34f37c9e4b"
        }}
        style={styles.ImageBackground_419_465}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efb7706a-2b2d-4107-a309-87e8a79aef55"
        }}
        style={styles.ImageBackground_419_466}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/114d6e68-c278-48ac-9333-0e37535d730f"
        }}
        style={styles.ImageBackground_419_467}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9675186-6bac-4a5d-a440-2787e1c96cef"
        }}
        style={styles.ImageBackground_419_468}
      />
      <View style={styles.View_419_469}>
        <Text style={styles.Text_419_469}>My surveys</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e82fa931-0d0e-455d-ac64-f0b091d613f8"
        }}
        style={styles.ImageBackground_419_470}
      />
      <View style={styles.View_419_471}>
        <Text style={styles.Text_419_471}>Favorites</Text>
      </View>
      <View style={styles.View_419_472}>
        <Text style={styles.Text_419_472}>
          Bio(250 word max?) -- -- Location, Birthda Account created 01/01/2022
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc1905f8-53b2-42ab-9892-718a63c8a21f"
        }}
        style={styles.ImageBackground_419_474}
      />
      <View style={styles.View_419_475}>
        <Text style={styles.Text_419_475}>Upvotes</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3d2225f-0a74-4546-86c8-34359b5bd4a8"
        }}
        style={styles.ImageBackground_419_476}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ad5b024-54ea-4988-964e-0a98ccb0a397"
        }}
        style={styles.ImageBackground_419_477}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29501624-cb25-4cb2-a9bf-c02e2b6144ca"
        }}
        style={styles.ImageBackground_419_478}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/774e3769-6daa-4567-b6a6-dd9a8aeedf02"
        }}
        style={styles.ImageBackground_419_479}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f77c919-c064-43a3-8725-069da654d8e2"
        }}
        style={styles.ImageBackground_419_480}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6de4331-1d34-4f09-a1ae-654406e2eb5c"
        }}
        style={styles.ImageBackground_419_481}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/788ee77e-41cc-4205-aa36-d452e163fa9a"
        }}
        style={styles.ImageBackground_419_482}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05f99b26-9f20-4b2b-8556-d69734631a96"
        }}
        style={styles.ImageBackground_419_483}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/070f1743-fb18-419f-a59f-ac7784e605d6"
        }}
        style={styles.ImageBackground_419_484}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9afaf7e1-687c-48b7-ab08-8c51466942c1"
        }}
        style={styles.ImageBackground_419_485}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7167bbd-fc04-4eb3-91f0-d4055902fbce"
        }}
        style={styles.ImageBackground_419_486}
      />
      <View style={styles.View_419_487}>
        <Text style={styles.Text_419_487}>Edit Profile</Text>
      </View>
      <View style={styles.View_419_497} />
      <View style={styles.View_419_498} />
      <View style={styles.View_419_499}>
        <Text style={styles.Text_419_499}>
          @username date/time Title(200 char max) Yes No N/A
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8a40a5b-a0f1-4c0a-b7e6-94d05fc72911"
        }}
        style={styles.ImageBackground_419_500}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54b51f17-5e9f-4e9e-ad81-aa7846d49407"
        }}
        style={styles.ImageBackground_419_501}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/627f6e9f-0753-4cc1-b3b9-34007aa6f246"
        }}
        style={styles.ImageBackground_419_502}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e7b930c-0bbd-46de-9a3f-44df6b7fb52f"
        }}
        style={styles.ImageBackground_419_503}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3da792c-c032-4b4c-99ae-0fcaa4ea4291"
        }}
        style={styles.ImageBackground_419_504}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/768e645a-7b5e-4556-98ac-cf0542c38a8c"
        }}
        style={styles.ImageBackground_419_505}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(118, 156, 255, 1)" },
  View_2: { height: hp("262%") },
  View_419_437: {
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
  ImageBackground_419_438: {
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
  ImageBackground_419_439: {
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
  ImageBackground_419_440: {
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
  ImageBackground_419_441: {
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
  ImageBackground_419_442: {
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
  View_419_443: {
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
  View_419_444: {
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
  View_419_445: {
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
  View_419_446: {
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
  View_419_447: {
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
  View_419_448: {
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
  View_419_449: {
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
  View_419_450: {
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
  View_419_451: {
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
  ImageBackground_419_452: {
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
  ImageBackground_419_453: {
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
  ImageBackground_419_454: {
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
  ImageBackground_419_455: {
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
  View_419_456: {
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
  ImageBackground_419_457: {
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
  View_419_458: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(202, 201, 201, 1)"
  },
  ImageBackground_419_459: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("29%")
  },
  View_419_460: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_419_460: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.088000030517578,
    textTransform: "none"
  },
  View_419_461: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("120%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_419_462: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("120%")
  },
  ImageBackground_419_463: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("120%")
  },
  ImageBackground_419_464: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("125%")
  },
  ImageBackground_419_465: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("128%")
  },
  ImageBackground_419_466: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("131%")
  },
  ImageBackground_419_467: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("134%")
  },
  ImageBackground_419_468: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("137%")
  },
  View_419_469: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("142%"),
    justifyContent: "flex-start"
  },
  Text_419_469: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34000000953674314,
    textTransform: "none"
  },
  ImageBackground_419_470: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("120%")
  },
  View_419_471: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("142%"),
    justifyContent: "flex-start"
  },
  Text_419_471: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34000000953674314,
    textTransform: "none"
  },
  View_419_472: {
    width: wp("94%"),
    minWidth: wp("94%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_419_472: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6120000171661377,
    textTransform: "none"
  },
  ImageBackground_419_474: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("123%")
  },
  View_419_475: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("143%"),
    justifyContent: "flex-start"
  },
  Text_419_475: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34000000953674314,
    textTransform: "none"
  },
  ImageBackground_419_476: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("123%")
  },
  ImageBackground_419_477: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("126%")
  },
  ImageBackground_419_478: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("123%")
  },
  ImageBackground_419_479: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("141%")
  },
  ImageBackground_419_480: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("120%")
  },
  ImageBackground_419_481: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("122%")
  },
  ImageBackground_419_482: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("130%")
  },
  ImageBackground_419_483: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("132%")
  },
  ImageBackground_419_484: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("130%")
  },
  ImageBackground_419_485: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("120%")
  },
  ImageBackground_419_486: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("122%")
  },
  View_419_487: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("143%"),
    justifyContent: "flex-start"
  },
  Text_419_487: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34000000953674314,
    textTransform: "none"
  },
  View_419_497: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("155%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_498: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("155%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  View_419_499: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("162%"),
    justifyContent: "flex-start"
  },
  Text_419_499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_419_500: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("179%")
  },
  ImageBackground_419_501: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("189%")
  },
  ImageBackground_419_502: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("184%")
  },
  ImageBackground_419_503: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("193%")
  },
  ImageBackground_419_504: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("193%")
  },
  ImageBackground_419_505: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("196%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
