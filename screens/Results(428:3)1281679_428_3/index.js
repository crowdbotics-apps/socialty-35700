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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/932c3882-1dba-447f-8623-d469e720b5ef"
        }}
        style={styles.ImageBackground_428_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25c963bd-da2c-470c-bc15-88c96976690a"
        }}
        style={styles.ImageBackground_428_5}
      />
      <View style={styles.View_428_6} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a28e99a-11d4-4655-b9df-0fa26eb32481"
        }}
        style={styles.ImageBackground_428_7}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2949012a-7d3f-478d-8219-d358fb62b0ff"
        }}
        style={styles.ImageBackground_428_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/189bf505-faab-4e01-af1e-ab5af47d28fe"
        }}
        style={styles.ImageBackground_428_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8853626-6a4a-4ba2-8d98-e5aad88fa6d7"
        }}
        style={styles.ImageBackground_428_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d77988e-559f-4f0a-ac32-494bc40a2fe6"
        }}
        style={styles.ImageBackground_428_14}
      />
      <View style={styles.View_428_15} />
      <View style={styles.View_428_16} />
      <View style={styles.View_428_17} />
      <View style={styles.View_428_18} />
      <View style={styles.View_428_19} />
      <View style={styles.View_428_20} />
      <View style={styles.View_428_21} />
      <View style={styles.View_428_22} />
      <View style={styles.View_428_23} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea85b5ad-551b-494a-a8e6-ba83f9652439"
        }}
        style={styles.ImageBackground_428_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c327401-11fe-4c14-b5ce-c909fd2e9cae"
        }}
        style={styles.ImageBackground_428_25}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5258fa1f-c3a7-4764-84a4-4135da9c8464"
        }}
        style={styles.ImageBackground_428_26}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f46b8da-de61-4850-8d06-9ae693c47062"
        }}
        style={styles.ImageBackground_428_27}
      />
      <View style={styles.View_428_28} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85858f69-7a74-485c-886b-cfa38a6f4dba"
        }}
        style={styles.ImageBackground_428_29}
      />
      <View style={styles.View_428_30}>
        <Text style={styles.Text_428_30}>Results</Text>
      </View>
      <View style={styles.View_428_35} />
      <View style={styles.View_428_36} />
      <View style={styles.View_428_65} />
      <View style={styles.View_430_66} />
      <View style={styles.View_428_37}>
        <Text style={styles.Text_428_37}>
          @username date/time Title(200 char max) Yes No N/A
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c7505ea-3e53-48d0-a0c2-019b5dc92edf"
        }}
        style={styles.ImageBackground_428_38}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f92f06f8-2f55-425f-8377-08036a39c7e6"
        }}
        style={styles.ImageBackground_428_39}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb04fafd-a397-4277-8273-9c903636531f"
        }}
        style={styles.ImageBackground_428_40}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8a9afd2-fa29-4271-a0d7-75de26408d83"
        }}
        style={styles.ImageBackground_428_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7653597e-8bfa-422c-ae60-59092a05105c"
        }}
        style={styles.ImageBackground_428_62}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/483888e7-9168-4cb4-8923-c62ca472bb32"
        }}
        style={styles.ImageBackground_428_63}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b7b9e2e-8908-4415-9e62-ef0500db9c52"
        }}
        style={styles.ImageBackground_428_64}
      />
      <View style={styles.View_430_67}>
        <Text style={styles.Text_430_67}>
          Survey Results (%) Yes 10% No 25% N/A 65%
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c157a159-f3fb-4bfa-aa7b-3d3d54158666"
        }}
        style={styles.ImageBackground_431_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/31b0e806-c42a-4f49-84f9-f2045646810c"
        }}
        style={styles.ImageBackground_430_69}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42cf7945-e6ce-4776-8392-80b32b6f830f"
        }}
        style={styles.ImageBackground_430_70}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbaf1116-fd0a-4e23-aaba-ac17b48f1584"
        }}
        style={styles.ImageBackground_430_71}
      />
      <View style={styles.View_430_73} />
      <View style={styles.View_430_74} />
      <View style={styles.View_430_75} />
      <View style={styles.View_430_76}>
        <Text style={styles.Text_430_76}>Yes</Text>
      </View>
      <View style={styles.View_430_77}>
        <Text style={styles.Text_430_77}>No</Text>
      </View>
      <View style={styles.View_430_78}>
        <Text style={styles.Text_430_78}>N/A</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e754a3fd-bca6-4e3e-83fa-8c938f1cef1e"
        }}
        style={styles.ImageBackground_432_4}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(118, 156, 255, 1)" },
  View_2: { height: hp("262%") },
  ImageBackground_428_4: {
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
  ImageBackground_428_5: {
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
  View_428_6: {
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
  ImageBackground_428_7: {
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
  ImageBackground_428_8: {
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
  ImageBackground_428_9: {
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
  ImageBackground_428_13: {
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
  ImageBackground_428_14: {
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
  View_428_15: {
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
  View_428_16: {
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
  View_428_17: {
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
  View_428_18: {
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
  View_428_19: {
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
  View_428_20: {
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
  View_428_21: {
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
  View_428_22: {
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
  View_428_23: {
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
  ImageBackground_428_24: {
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
  ImageBackground_428_25: {
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
  ImageBackground_428_26: {
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
  ImageBackground_428_27: {
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
  View_428_28: {
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
  ImageBackground_428_29: {
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
  View_428_30: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_428_30: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.088000030517578,
    textTransform: "none"
  },
  View_428_35: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("33%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_428_36: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("33%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  View_428_65: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("90%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  View_430_66: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("147%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  View_428_37: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_428_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_428_38: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("57%")
  },
  ImageBackground_428_39: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("67%")
  },
  ImageBackground_428_40: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("62%")
  },
  ImageBackground_428_61: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("69%")
  },
  ImageBackground_428_62: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("69%")
  },
  ImageBackground_428_63: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("73%")
  },
  ImageBackground_428_64: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("69%")
  },
  View_430_67: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_430_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_431_9: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("187%")
  },
  ImageBackground_430_69: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("187%")
  },
  ImageBackground_430_70: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("170%")
  },
  ImageBackground_430_71: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("187%")
  },
  View_430_73: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("169%"),
    backgroundColor: "rgba(0, 178, 7, 1)"
  },
  View_430_74: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("180%"),
    backgroundColor: "rgba(239, 39, 39, 1)"
  },
  View_430_75: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("192%"),
    backgroundColor: "rgba(232, 222, 0, 1)"
  },
  View_430_76: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("170%"),
    justifyContent: "flex-start"
  },
  Text_430_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_430_77: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("180%"),
    justifyContent: "flex-start"
  },
  Text_430_77: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_430_78: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("193%"),
    justifyContent: "flex-start"
  },
  Text_430_78: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_432_4: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("155%"),
    resizeMode: "cover"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
