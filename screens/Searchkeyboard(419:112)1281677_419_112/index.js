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
      <View style={styles.View_419_123} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d37b23aa-3487-4beb-8f3b-ee390742e7ba"
        }}
        style={styles.ImageBackground_419_124}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57fbbb7f-6742-4577-a9d8-e7558e1b2b8c"
        }}
        style={styles.ImageBackground_419_125}
      />
      <View style={styles.View_419_126}>
        <Text style={styles.Text_419_126}>+ New Survey</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3eb23e6-50d0-43a0-90a9-cdb1eb0ff5fb"
        }}
        style={styles.ImageBackground_419_127}
      />
      <View style={styles.View_422_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88362ef2-9033-4051-9cd1-471f3fd41096"
        }}
        style={styles.ImageBackground_422_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d44b2f00-d0d1-41ed-a0dc-f0f816f4c990"
        }}
        style={styles.ImageBackground_422_4}
      />
      <View style={styles.View_422_5}>
        <Text style={styles.Text_422_5}>Search for Surveys</Text>
      </View>
      <View style={styles.View_422_6}>
        <Text style={styles.Text_422_6}>Recent Searches</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e38d7b25-d804-4b7b-8f80-f286e473a745"
        }}
        style={styles.ImageBackground_422_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82645795-10f2-4ff6-ab05-58dde93dda51"
        }}
        style={styles.ImageBackground_422_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/533fef4b-7d02-43ad-a6a8-d6cc11341911"
        }}
        style={styles.ImageBackground_422_11}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28cbc3b0-ff5d-4824-a82d-b8daabefd5a2"
        }}
        style={styles.ImageBackground_422_10}
      />
      <View style={styles.View_422_13} />
      <View style={styles.View_422_14}>
        <Text style={styles.Text_422_14}>name</Text>
      </View>
      <View style={styles.View_422_21}>
        <Text style={styles.Text_422_21}>name</Text>
      </View>
      <View style={styles.View_422_20}>
        <Text style={styles.Text_422_20}>name</Text>
      </View>
      <View style={styles.View_422_19}>
        <Text style={styles.Text_422_19}>name</Text>
      </View>
      <View style={styles.View_422_15}>
        <Text style={styles.Text_422_15}>recent</Text>
      </View>
      <View style={styles.View_422_16}>
        <Text style={styles.Text_422_16}>recent</Text>
      </View>
      <View style={styles.View_422_17}>
        <Text style={styles.Text_422_17}>recent</Text>
      </View>
      <View style={styles.View_422_18}>
        <Text style={styles.Text_422_18}>recent</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(118, 156, 255, 1)" },
  View_2: { height: hp("264%") },
  View_419_123: {
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
  ImageBackground_419_124: {
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
  ImageBackground_419_125: {
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
  View_419_126: {
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
  Text_419_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.6800000190734863,
    textTransform: "none"
  },
  ImageBackground_419_127: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("193%"),
    resizeMode: "cover"
  },
  View_422_2: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("6%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_422_3: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%")
  },
  ImageBackground_422_4: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("6%")
  },
  View_422_5: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_422_5: {
    color: "rgba(121, 115, 115, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_422_6: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_422_6: {
    color: "rgba(1, 1, 1, 1)",
    fontSize: 37,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.7820000219345092,
    textTransform: "none"
  },
  ImageBackground_422_9: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("35%")
  },
  ImageBackground_422_8: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("35%")
  },
  ImageBackground_422_11: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("35%")
  },
  ImageBackground_422_10: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("35%")
  },
  View_422_13: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_422_14: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_422_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_422_21: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_422_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_422_20: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_422_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_422_19: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_422_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_422_15: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_422_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_422_16: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_422_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_422_17: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("97%"),
    justifyContent: "flex-start"
  },
  Text_422_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  },
  View_422_18: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_422_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.544000015258789,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
