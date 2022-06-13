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
      <View style={styles.View_419_4} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a2c0bf8-cdf9-4af9-8885-34115ffed71d"
        }}
        style={styles.ImageBackground_419_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b410b97-bcf2-4d33-ae45-b89487a8384c"
        }}
        style={styles.ImageBackground_419_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/819f603a-8b31-49a4-b04d-ae2a0a41d896"
        }}
        style={styles.ImageBackground_419_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b724b83-8c99-4e32-af50-48eae99667c5"
        }}
        style={styles.ImageBackground_419_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29e19cd9-eb5d-4bdc-ba14-c0980ba939af"
        }}
        style={styles.ImageBackground_419_39}
      />
      <View style={styles.View_419_40} />
      <View style={styles.View_419_41} />
      <View style={styles.View_419_42} />
      <View style={styles.View_419_43} />
      <View style={styles.View_419_44} />
      <View style={styles.View_419_45} />
      <View style={styles.View_419_46} />
      <View style={styles.View_419_47} />
      <View style={styles.View_419_48} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f7d5509-c1b7-427e-82ef-3a4df1647512"
        }}
        style={styles.ImageBackground_419_49}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a783be0b-88ee-42a0-898c-b78396ceaa3a"
        }}
        style={styles.ImageBackground_419_50}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f40f06a-f321-4fdc-97cb-da0d9273611b"
        }}
        style={styles.ImageBackground_419_51}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd3e438a-8b45-4f99-b19f-cdc47ebeeba3"
        }}
        style={styles.ImageBackground_419_52}
      />
      <View style={styles.View_419_53} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/923e0e54-5928-4e4c-8f7d-56b31f40070e"
        }}
        style={styles.ImageBackground_419_54}
      />
      <View style={styles.View_419_58} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8607b6b2-41e2-4f6b-9769-6aa8ff158635"
        }}
        style={styles.ImageBackground_419_3}
      />
      <View style={styles.View_419_59}>
        <Text style={styles.Text_419_59}>@username</Text>
      </View>
      <View style={styles.View_419_60} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d75699de-7636-4003-a5f8-24c12ab27aa3"
        }}
        style={styles.ImageBackground_419_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/668b1f72-aa8e-4c7c-a12b-508a330587ee"
        }}
        style={styles.ImageBackground_419_63}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da299dbd-6d69-40f4-b381-9f3f7a24dd23"
        }}
        style={styles.ImageBackground_419_64}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4a75d7d-d1af-4a36-acbc-8163d14faca2"
        }}
        style={styles.ImageBackground_419_65}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/395ab4c3-b4e7-4327-9789-a194dbf5c8b5"
        }}
        style={styles.ImageBackground_419_66}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54bdb5c9-a8e9-4496-a24b-60cba302325c"
        }}
        style={styles.ImageBackground_419_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/549489d8-0c0c-41a7-b4af-07874fe9a19c"
        }}
        style={styles.ImageBackground_419_68}
      />
      <View style={styles.View_419_69}>
        <Text style={styles.Text_419_69}>My surveys</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecf9f2f5-0f36-404e-a05a-6578d7d1c679"
        }}
        style={styles.ImageBackground_419_70}
      />
      <View style={styles.View_419_71}>
        <Text style={styles.Text_419_71}>Favorites</Text>
      </View>
      <View style={styles.View_419_72}>
        <Text style={styles.Text_419_72}>
          Bio(250 word max?) -- -- Location, Birthdate Account created
          01/01/2022
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/219a7a1d-08b7-485e-9c38-aee37014fbb0"
        }}
        style={styles.ImageBackground_419_74}
      />
      <View style={styles.View_419_75}>
        <Text style={styles.Text_419_75}>Upvotes</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/682d05cf-0e8d-465e-aad2-06e389240490"
        }}
        style={styles.ImageBackground_419_76}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de4eb204-31c7-4bbe-8d64-01b16c1eb0e2"
        }}
        style={styles.ImageBackground_419_78}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6e9b567-d798-447c-8626-cb19e871ce62"
        }}
        style={styles.ImageBackground_419_77}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a12c5a01-a748-4497-9d6e-5811ed074bd5"
        }}
        style={styles.ImageBackground_419_79}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/017551bd-3fc0-4805-b4dd-dd31aea227a0"
        }}
        style={styles.ImageBackground_419_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97a5844a-e4e4-4820-aff1-df6416c26c05"
        }}
        style={styles.ImageBackground_419_84}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6461373d-fd7a-4a37-b207-fc9ec1317cb0"
        }}
        style={styles.ImageBackground_419_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16943b3d-8677-4d5c-a273-b6a4718a4746"
        }}
        style={styles.ImageBackground_419_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c6f4a2d-ed7b-41cc-a0e3-57f86379528e"
        }}
        style={styles.ImageBackground_419_85}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c1095cc-566a-41f3-b6a5-3652e4fe804a"
        }}
        style={styles.ImageBackground_419_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/505ad6c2-5406-4e67-9e6e-f88aac99f448"
        }}
        style={styles.ImageBackground_419_88}
      />
      <View style={styles.View_419_136}>
        <Text style={styles.Text_419_136}>Edit Profile</Text>
      </View>
      <View style={styles.View_419_488} />
      <View style={styles.View_419_489} />
      <View style={styles.View_419_490}>
        <Text style={styles.Text_419_490}>
          @username date/time Title(200 char max) Yes No N/A
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45ede91f-85ca-4afe-8f20-ae9c50c6c4c7"
        }}
        style={styles.ImageBackground_419_491}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4cd7395-eb51-4eb4-9f0e-bbd073d8c4f0"
        }}
        style={styles.ImageBackground_419_492}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86d497b0-55d8-48a9-adbb-da0c05b80bfa"
        }}
        style={styles.ImageBackground_419_493}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5569308-4838-4aa2-9b79-1c941e70cd18"
        }}
        style={styles.ImageBackground_419_494}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a83ed71-a98e-4c04-91a8-5220ea2c4aef"
        }}
        style={styles.ImageBackground_419_495}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eb62ec00-8a63-4acb-9b07-b76cddb4aed5"
        }}
        style={styles.ImageBackground_419_496}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(118, 156, 255, 1)" },
  View_2: { height: hp("262%") },
  View_419_4: {
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
  ImageBackground_419_5: {
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
  ImageBackground_419_6: {
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
  ImageBackground_419_7: {
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
  ImageBackground_419_38: {
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
  ImageBackground_419_39: {
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
  View_419_40: {
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
  View_419_41: {
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
  View_419_42: {
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
  View_419_43: {
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
  View_419_44: {
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
  View_419_45: {
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
  View_419_46: {
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
  View_419_47: {
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
  View_419_48: {
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
  ImageBackground_419_49: {
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
  ImageBackground_419_50: {
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
  ImageBackground_419_51: {
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
  ImageBackground_419_52: {
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
  View_419_53: {
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
  ImageBackground_419_54: {
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
  View_419_58: {
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
  ImageBackground_419_3: {
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
  View_419_59: {
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
  Text_419_59: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.088000030517578,
    textTransform: "none"
  },
  View_419_60: {
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
  ImageBackground_419_62: {
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
  ImageBackground_419_63: {
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
  ImageBackground_419_64: {
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
  ImageBackground_419_65: {
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
  ImageBackground_419_66: {
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
  ImageBackground_419_67: {
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
  ImageBackground_419_68: {
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
  View_419_69: {
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
  Text_419_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34000000953674314,
    textTransform: "none"
  },
  ImageBackground_419_70: {
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
  View_419_71: {
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
  Text_419_71: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34000000953674314,
    textTransform: "none"
  },
  View_419_72: {
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
  Text_419_72: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6120000171661377,
    textTransform: "none"
  },
  ImageBackground_419_74: {
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
  View_419_75: {
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
  Text_419_75: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34000000953674314,
    textTransform: "none"
  },
  ImageBackground_419_76: {
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
  ImageBackground_419_78: {
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
  ImageBackground_419_77: {
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
  ImageBackground_419_79: {
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
  ImageBackground_419_80: {
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
  ImageBackground_419_84: {
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
  ImageBackground_419_81: {
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
  ImageBackground_419_82: {
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
  ImageBackground_419_85: {
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
  ImageBackground_419_86: {
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
  ImageBackground_419_88: {
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
  View_419_136: {
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
  Text_419_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.34000000953674314,
    textTransform: "none"
  },
  View_419_488: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("155%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_489: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("155%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  View_419_490: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("162%"),
    justifyContent: "flex-start"
  },
  Text_419_490: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_419_491: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("179%")
  },
  ImageBackground_419_492: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("189%")
  },
  ImageBackground_419_493: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("184%")
  },
  ImageBackground_419_494: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("193%")
  },
  ImageBackground_419_495: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("193%")
  },
  ImageBackground_419_496: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
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
