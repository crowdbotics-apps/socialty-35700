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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fcb3a17-ccc3-4f74-aeae-29c965c9fa9f"
        }}
        style={styles.ImageBackground_419_699}
      />
      <View style={styles.View_419_700} />
      <View style={styles.View_419_701} />
      <View style={styles.View_419_702} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32ad8fba-8f01-40a1-8dd4-72fba73adf9a"
        }}
        style={styles.ImageBackground_419_703}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e70d7abb-0f79-450c-a247-061fc1e795de"
        }}
        style={styles.ImageBackground_419_704}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e82c689-5ecb-4296-9069-ee56b54cb88e"
        }}
        style={styles.ImageBackground_419_705}
      />
      <View style={styles.View_419_706} />
      <View style={styles.View_419_707}>
        <Text style={styles.Text_419_707}>
          Chose Survey Type Yes/No/Na Scale (1-5) Words
        </Text>
      </View>
      <View style={styles.View_419_708}>
        <Text style={styles.Text_419_708}>Sociality (Logo)</Text>
      </View>
      <View style={styles.View_419_709} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65096edb-5be5-4f00-9147-3fc7e73ac2ce"
        }}
        style={styles.ImageBackground_419_710}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a5c0fd7-f166-49c0-a530-50e52ccbfaf9"
        }}
        style={styles.ImageBackground_419_711}
      />
      <View style={styles.View_419_712}>
        <Text style={styles.Text_419_712}>Create Survey</Text>
      </View>
      <View style={styles.View_419_714} />
      <View style={styles.View_419_715}>
        <Text style={styles.Text_419_715}>
          What isthe scope of the survey? Entertainment Politics Economy Family
          Work Society
        </Text>
      </View>
      <View style={styles.View_419_716}>
        <Text style={styles.Text_419_716}>
          Enter the Title of the survey...
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f955f8a1-94f0-4a1c-9a1a-00039ae3fecf"
        }}
        style={styles.ImageBackground_419_717}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4816137-d6a9-42f8-9ead-cdafd4621d8a"
        }}
        style={styles.ImageBackground_426_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07d61d92-c758-456e-834b-9074d44571e3"
        }}
        style={styles.ImageBackground_419_718}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ebed318-bd2d-434e-a2c8-6525cdff8202"
        }}
        style={styles.ImageBackground_419_719}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/835c8112-24da-452a-9f8c-2083d112d310"
        }}
        style={styles.ImageBackground_419_720}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f9968c9-c886-4092-a5de-a13e351d7ad5"
        }}
        style={styles.ImageBackground_419_721}
      />
      <View style={styles.View_422_64} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9ab5103-ac75-4b7e-9d26-8dcb613e478c"
        }}
        style={styles.ImageBackground_422_65}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2917d99a-808b-47aa-841e-f96ac4e87c6c"
        }}
        style={styles.ImageBackground_422_66}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/599bf830-11a2-425f-8f39-6be325596041"
        }}
        style={styles.ImageBackground_422_67}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2023c3c3-b58f-4f7c-900d-51ed2eacb767"
        }}
        style={styles.ImageBackground_422_68}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3c2f415-a89b-4e4e-bbff-d039bbb2b943"
        }}
        style={styles.ImageBackground_422_69}
      />
      <View style={styles.View_422_70} />
      <View style={styles.View_422_71} />
      <View style={styles.View_422_72} />
      <View style={styles.View_422_73} />
      <View style={styles.View_422_74} />
      <View style={styles.View_422_75} />
      <View style={styles.View_422_76} />
      <View style={styles.View_422_77} />
      <View style={styles.View_422_78} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4802e095-f63c-47ab-9a74-0d7a74ab5554"
        }}
        style={styles.ImageBackground_422_79}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b751143-71dc-4023-8a4e-2973d14bc5c1"
        }}
        style={styles.ImageBackground_422_80}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6e3d059-7a9c-4934-ac34-25ac4aa9c05f"
        }}
        style={styles.ImageBackground_422_81}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b2484cb-620e-43fa-a82d-dab7a2a9fe0d"
        }}
        style={styles.ImageBackground_422_82}
      />
      <View style={styles.View_422_83} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58a4e1e2-f9b3-48c8-84b0-b80094b652a6"
        }}
        style={styles.ImageBackground_422_84}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(118, 156, 255, 1)" },
  View_2: { height: hp("264%") },
  ImageBackground_419_699: {
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
  View_419_700: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("37%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_701: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("37%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  View_419_702: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("141%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  ImageBackground_419_703: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("153%")
  },
  ImageBackground_419_704: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("170%")
  },
  ImageBackground_419_705: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("162%")
  },
  View_419_706: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("89%"),
    backgroundColor: "rgba(151, 229, 246, 1)"
  },
  View_419_707: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("146%"),
    justifyContent: "flex-start"
  },
  Text_419_707: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6120000171661377,
    textTransform: "none"
  },
  View_419_708: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_419_708: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.088000030517578,
    textTransform: "none"
  },
  View_419_709: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("213%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_419_710: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("213%")
  },
  ImageBackground_419_711: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("213%")
  },
  View_419_712: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("216%"),
    justifyContent: "flex-start"
  },
  Text_419_712: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6800000190734863,
    textTransform: "none"
  },
  View_419_714: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("44%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_419_715: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("94%"),
    justifyContent: "flex-start"
  },
  Text_419_715: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_419_716: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_419_716: {
    color: "rgba(121, 115, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  ImageBackground_419_717: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("105%")
  },
  ImageBackground_426_2: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("100%")
  },
  ImageBackground_419_718: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("111%")
  },
  ImageBackground_419_719: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("116%")
  },
  ImageBackground_419_720: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("121%")
  },
  ImageBackground_419_721: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("127%")
  },
  View_422_64: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("247%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_422_65: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("240%")
  },
  ImageBackground_422_66: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("240%")
  },
  ImageBackground_422_67: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("248%")
  },
  ImageBackground_422_68: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("243%")
  },
  ImageBackground_422_69: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("247%")
  },
  View_422_70: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("241%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_71: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("253%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_72: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("248%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_73: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("248%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_74: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("242%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_75: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("250%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_76: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("242%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_77: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("250%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_78: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("246%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_422_79: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("240%")
  },
  ImageBackground_422_80: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("238%")
  },
  ImageBackground_422_81: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("251%")
  },
  ImageBackground_422_82: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("251%")
  },
  View_422_83: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("253%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_422_84: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("249%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
