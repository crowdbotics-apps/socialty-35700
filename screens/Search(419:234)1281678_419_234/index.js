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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/593d5f2a-a128-4792-969e-9213c76cdb26"
        }}
        style={styles.ImageBackground_419_235}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d3c9a53-c2fd-45fb-88be-45a18bc75c63"
        }}
        style={styles.ImageBackground_422_7}
      />
      <View style={styles.View_419_236} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6248ef4a-df0f-47ce-86cf-a6c8215dec93"
        }}
        style={styles.ImageBackground_419_237}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cb8826f-8968-46c2-934c-0bd338c1d81c"
        }}
        style={styles.ImageBackground_419_238}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f004ded-b79d-4f5a-b7ed-f5ee77dd9d0c"
        }}
        style={styles.ImageBackground_419_239}
      />
      <View style={styles.View_419_266} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f498c8b4-ba57-4af5-be18-d6348085bf7b"
        }}
        style={styles.ImageBackground_419_267}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bcc1c46-9ee6-4558-bdf0-20522b08cc99"
        }}
        style={styles.ImageBackground_419_268}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20611d2b-49e5-4c7e-8d66-d0ea2099f030"
        }}
        style={styles.ImageBackground_419_270}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c4a5984-77fd-4aa2-aa99-8571b2f1bf8a"
        }}
        style={styles.ImageBackground_419_271}
      />
      <View style={styles.View_419_272} />
      <View style={styles.View_419_273} />
      <View style={styles.View_419_274} />
      <View style={styles.View_419_275} />
      <View style={styles.View_419_276} />
      <View style={styles.View_419_277} />
      <View style={styles.View_419_278} />
      <View style={styles.View_419_279} />
      <View style={styles.View_419_280} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/450a4fdf-5468-40a5-b35d-54f53067a0cc"
        }}
        style={styles.ImageBackground_419_281}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a01b66a2-f447-4b60-bc2b-e9d39eee4d7c"
        }}
        style={styles.ImageBackground_419_282}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d4101f0-e9ca-4a66-8c9d-902763a3249c"
        }}
        style={styles.ImageBackground_419_283}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be20d2d4-4b3c-49e2-896d-0881e0be7ca6"
        }}
        style={styles.ImageBackground_419_284}
      />
      <View style={styles.View_419_285} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e31bd4d-bbef-42ac-b51f-46de7052b506"
        }}
        style={styles.ImageBackground_419_286}
      />
      <View style={styles.View_420_125}>
        <Text style={styles.Text_420_125}>Search for Surveys</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/877d423f-7988-48fa-ab4f-88d45e3718a3"
        }}
        style={styles.ImageBackground_421_82}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/309de33d-ed08-4d7a-84cb-51f7db516ee7"
        }}
        style={styles.ImageBackground_421_83}
      />
      <View style={styles.View_421_84}>
        <Text style={styles.Text_421_84}>Recommended</Text>
      </View>
      <View style={styles.View_421_85}>
        <Text style={styles.Text_421_85}>Trending</Text>
      </View>
      <View style={styles.View_421_58} />
      <View style={styles.View_421_59} />
      <View style={styles.View_421_60}>
        <Text style={styles.Text_421_60}>
          @username date/time Title(200 char max) Yes No N/A
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f19fa1b7-3d57-4cb9-985a-cd0aed732f3e"
        }}
        style={styles.ImageBackground_421_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6544ba4d-6f13-43be-8afe-9d8ab679cd93"
        }}
        style={styles.ImageBackground_421_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f51ce17-687f-4387-ba81-97af9cf88278"
        }}
        style={styles.ImageBackground_421_63}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29cb5e19-461a-4ec9-b499-d4d038a0c043"
        }}
        style={styles.ImageBackground_421_66}
      />
      <View style={styles.View_421_68}>
        <Text style={styles.Text_421_68}>
          @username date/time Title(200 char max) Word 1 Word 2 Word 3
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbeaf4f4-a434-4186-8da6-4e632c2cb687"
        }}
        style={styles.ImageBackground_421_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe6f6a94-669a-45f2-b7a0-54b183eb9af2"
        }}
        style={styles.ImageBackground_421_70}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45ef2788-667b-48f5-9548-adbd21e6ec3a"
        }}
        style={styles.ImageBackground_421_86}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c9595e5-7b4f-4e71-983e-36ae6ae607c2"
        }}
        style={styles.ImageBackground_421_71}
      />
      <View style={styles.View_421_72}>
        <Text style={styles.Text_421_72}>
          @username date/time Title(200 char max) Strongly Disagree Neutral
          Strongly Agree
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa0cc3f7-1fcb-44d3-a54b-232cd9878b0b"
        }}
        style={styles.ImageBackground_421_73}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8603ac41-60a0-4cca-8925-390042f38143"
        }}
        style={styles.ImageBackground_421_74}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6b30024-9163-4f6b-a3fb-6509d0263301"
        }}
        style={styles.ImageBackground_421_75}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7523c33f-1eec-4afd-8a8e-126659511d22"
        }}
        style={styles.ImageBackground_421_76}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f0fe6d9-bc6e-4434-9075-e58f1f964c88"
        }}
        style={styles.ImageBackground_421_77}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19a59dc5-01d5-4d00-85f3-8b45838ccd70"
        }}
        style={styles.ImageBackground_421_91}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45c41b83-b18f-4f8d-882c-5a4d8b340672"
        }}
        style={styles.ImageBackground_421_92}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/896602bf-5182-423d-b6c2-257991eb49b1"
        }}
        style={styles.ImageBackground_421_93}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cf4a749-8e0e-4e20-b05c-cfc81ed6f643"
        }}
        style={styles.ImageBackground_421_94}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c46d7079-a819-4ace-a2aa-738755698f27"
        }}
        style={styles.ImageBackground_421_104}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd709831-7f38-4805-bd32-92562fd80eff"
        }}
        style={styles.ImageBackground_421_105}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8dd48f5-10a3-490c-b595-837e677c021f"
        }}
        style={styles.ImageBackground_421_106}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e5c06e2-9634-4696-a0d7-59b4cf23532b"
        }}
        style={styles.ImageBackground_421_107}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c785f835-1119-4553-a7c7-ba3eb5daeeac"
        }}
        style={styles.ImageBackground_421_108}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b44e0af3-c282-4d48-aef3-476d0ef3d890"
        }}
        style={styles.ImageBackground_421_109}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b62f646-9197-4f40-92c7-ccf210b46339"
        }}
        style={styles.ImageBackground_421_110}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77b8ee76-0412-41f3-91a2-7fac2918273f"
        }}
        style={styles.ImageBackground_421_111}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(118, 156, 255, 1)" },
  View_2: { height: hp("262%") },
  ImageBackground_419_235: {
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
  ImageBackground_422_7: {
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
  View_419_236: {
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
  ImageBackground_419_237: {
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
  ImageBackground_419_238: {
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
  ImageBackground_419_239: {
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
  View_419_266: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("5%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_419_267: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("5%")
  },
  ImageBackground_419_268: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("5%")
  },
  ImageBackground_419_270: {
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
  ImageBackground_419_271: {
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
  View_419_272: {
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
  View_419_273: {
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
  View_419_274: {
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
  View_419_275: {
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
  View_419_276: {
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
  View_419_277: {
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
  View_419_278: {
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
  View_419_279: {
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
  View_419_280: {
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
  ImageBackground_419_281: {
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
  ImageBackground_419_282: {
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
  ImageBackground_419_283: {
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
  ImageBackground_419_284: {
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
  View_419_285: {
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
  ImageBackground_419_286: {
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
  View_420_125: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_420_125: {
    color: "rgba(121, 115, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_421_82: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("36%")
  },
  ImageBackground_421_83: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("36%")
  },
  View_421_84: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_421_84: {
    color: "rgba(121, 115, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_421_85: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_421_85: {
    color: "rgba(121, 115, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_421_58: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("53%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_421_59: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("53%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  View_421_60: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_421_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_421_61: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("77%")
  },
  ImageBackground_421_62: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("87%")
  },
  ImageBackground_421_63: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("81%")
  },
  ImageBackground_421_66: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("162%")
  },
  View_421_68: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("164%"),
    justifyContent: "flex-start"
  },
  Text_421_68: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_421_69: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("181%")
  },
  ImageBackground_421_70: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("186%")
  },
  ImageBackground_421_86: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("191%")
  },
  ImageBackground_421_71: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("108%")
  },
  View_421_72: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("112%"),
    justifyContent: "flex-start"
  },
  Text_421_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_421_73: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("127%")
  },
  ImageBackground_421_74: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("127%")
  },
  ImageBackground_421_75: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("127%")
  },
  ImageBackground_421_76: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("127%")
  },
  ImageBackground_421_77: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("127%")
  },
  ImageBackground_421_91: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("196%")
  },
  ImageBackground_421_92: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("196%")
  },
  ImageBackground_421_93: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("199%")
  },
  ImageBackground_421_94: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("195%")
  },
  ImageBackground_421_104: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("142%")
  },
  ImageBackground_421_105: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("142%")
  },
  ImageBackground_421_106: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("145%")
  },
  ImageBackground_421_107: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("142%")
  },
  ImageBackground_421_108: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("89%")
  },
  ImageBackground_421_109: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("89%")
  },
  ImageBackground_421_110: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("92%")
  },
  ImageBackground_421_111: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("89%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
