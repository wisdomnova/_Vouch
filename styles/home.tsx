import React from "react";
import { StyleSheet } from "react-native";
const HomeStyle = StyleSheet.create({
  HomeSafeView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fbfbfb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  HomeTopLeftView: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 20,
  },
  HomeView: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fbfbfb",
    // backgroundColor: '#163832',
  },

  HomeViewTopFlex: {
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fbfbfb",
  },
  HomeViewTopFlexCap: {
    color: "#363636",
    fontSize: 16,
    fontWeight: 600,
  },
  HomeViewTopFlexImg: {
    backgroundColor: "lightgrey",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  HomeViewTopFlex_Div: {
    width: "70%",
    height: 0.8,
    backgroundColor: "lightgrey",
    marginVertical: 5,
  },

  HomeViewSubFlex: {
    width: "100%",
    // backgroundColor: 'red',
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 30,
    columnGap: 5,
  },
  HomeViewSubFlexCol: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 5,
  },

  HomeViewSubFlexCap: {
    color: "#000",
    fontSize: 13,
    fontWeight: 700,
  },
  HomeViewSubFlexSCap: {
    color: "#000",
    fontSize: 26,
    fontWeight: 800,
  },

  HomeViewTopFlexL: {
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 10,
  },
  HomeViewTopFlexR: {
    width: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HomeViewTopFlexRIco: {
    color: "#fff",
    fontSize: 18,
  },
  HomeViewFlex: {
    width: "100%",
    height: "auto",
    flex: 1,
    flexGrow: 1,
    // backgroundColor: '#f4f4f4',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
  },

  HomeViewDebitCard: {
    width: "95%",
    height: "auto",
    borderRadius: 20,
    // borderColor: '#f4f4f4',
    borderColor: "lightgrey",
    borderWidth: 3,
    backgroundColor: "#163832",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    rowGap: 14,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  button: {
    alignSelf: "flex-end",
    paddingVertical: 6,
    paddingHorizontal: 12,
    // backgroundColor: "#4A90E2",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  HomeViewDebitCardRow: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  HomeViewDebitCardRow_Div: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#FFF",
  },
  HomeViewDebitCardCol: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingVertical: 10,
    rowGap: 7,
  },
  HomeViewDebitCardColCap: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: 400,
  },
  HomeViewDebitCardColSCap: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 800,
  },
  HomeViewDebitCardRowCol: {
    width: "50%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    rowGap: 5,
  },
  HomeViewDebitCardRowCol_: {
    width: "50%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    rowGap: 5,
  },
  HomeViewDebitCardRowSCap: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: 800,
  },
  HomeViewDebitCardRowCap: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: 400,
  },

  HomeViewEligBox: {
    width: "95%",
    // backgroundColor: '#f6f6f6',
    height: "auto",
    paddingVertical: 0,
    // marginVertical: 0,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 5,
    borderColor: "lightgrey",
    borderWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    columnGap: 5,
  },
  HomeViewEligBoxCol: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    rowGap: 10,
    // backgroundColor: 'pink'
  },
  HomeViewEligBoxColCap: {
    fontSize: 12,
    fontWeight: 700,
    color: "#353535",
  },
  HomeViewEligBoxColCap_G: {
    fontSize: 15,
    fontWeight: 700,
    color: "green",
  },
  HomeViewEligBoxColCap_R: {
    fontSize: 15,
    fontWeight: 700,
    color: "red",
  },

  HomeViewEligBoxColSCap: {
    fontSize: 17,
    fontWeight: 800,
    color: "#353535",
  },
  HomeViewEligBoxColSCap_G: {
    fontSize: 17,
    fontWeight: 800,
    color: "green",
  },
  HomeViewEligBoxColSCap_R: {
    fontSize: 17,
    fontWeight: 800,
    color: "red",
  },

  HomeViewToPay: {
    width: "95%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#163832",
    textAlign: "center",
    paddingVertical: 23,
    borderRadius: 15,
    marginTop: 10,
  },
  HomeViewToPayText: {
    color: "#FFF",
    // color: '#163832',
    fontSize: 16,
    fontWeight: 600,
  },

  HomeViewCard: {
    width: "85%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 10,
  },
  HomeViewCardData: {
    width: "100%",
    height: 100,
    // flex: 1,
    // flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  HomeViewCardData_: {
    width: "100%",
    height: "auto",
    flex: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 10,
    paddingLeft: "10%",
  },
  HomeViewCardData__: {
    width: "45%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    rowGap: 10,
    paddingLeft: "5%",
  },
  HomeViewCardData_SCap: {
    fontSize: 17,
    fontWeight: 500,
    color: "#000",
  },
  HomeViewCardData_Cap: {
    fontSize: 25,
    fontWeight: 800,
    color: "#353535",
  },
  HomeViewCardAction: {
    width: "50%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 5,
    borderTopColor: "#e4e4e4",
    borderTopWidth: 1,
  },
  HomeViewCardActionLink: {
    width: "auto",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  HomeViewCardActionCap: {
    fontSize: 14,
    fontWeight: 500,
    color: "#000",
  },
  //   HomeSafeView: {
  //     flex: 1,
  //     backgroundColor: "#f9f9f9",
  //   },
  //   HomeView: {
  //     paddingHorizontal: 20,
  //   },
  HeaderText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  ProfileSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  ProfileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  ProfileInfo: {
    flex: 1,
  },
  ProfileName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  EditProfileText: {
    fontSize: 14,
    color: "#007BFF",
    marginTop: 5,
  },
  Item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  ItemText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#555",
  },
  SectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
    marginVertical: 10,
  },
  SignOutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  SignOutText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#e63946",
  },
  Footer: {
    alignItems: "center",
    marginVertical: 20,
  },
  FooterText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#888",
  },
  VersionText: {
    fontSize: 14,
    color: "#bbb",
  },
  TermsText: {
    fontSize: 14,
    color: "#007BFF",
    marginTop: 5,
  },
});
export default HomeStyle;
