import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../contants";

const styles = StyleSheet.create({
  container: {
    margin: SIZES.medium,
  },
  headerContainer: {
    marginTop: SIZES.xLarge,
  },
header: {
        flexDirection: "row",
        justifyContent: "center", // Center-align the title
        alignItems: "center",
        padding: SIZES.small, // Add padding to the header
      },
      headerTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontWeight: 'bold', // Add a bold font weight for emphasis
        textAlign: 'center', // Center-align the text
        textTransform: 'uppercase', // Convert text to uppercase
      },  
      headerBtn: {
        fontSize: SIZES.medium,
        color: COLORS.gray,
      },
      cardsContainer: {
        marginTop: SIZES.medium,
        gap: SIZES.small,
      },
    


      
      proceedToCartBtn: {
        width: '80%', // Adjust the width to be responsive
        height: 50,
        backgroundColor: COLORS.primary, // Change the background color for better visibility
        borderRadius: 25, // Use half of the height to create a rounded button
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', // Align the button in the center horizontally
        marginTop: 20, // Add some spacing at the top for better layout
        shadowColor: '#000', // Add shadow for a raised effect
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
      },
      
      proceedToCartBtnTxt: {
      color: COLORS.white, 
      fontSize: 18, 
      fontWeight: 'bold', 
      },
    
      proceedToNextPageBtn: {
        width: "100%",
        height: 50,
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
      },
      proceedToNextPageBtnTxt: {
        fontSize: SIZES.large,
        color: COLORS.white,
      },
      orderSummary: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        elevation: 2,
        marginBottom:8
      },
      orderSummaryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      orderSummaryItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      orderSummaryTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        borderTopWidth: 1,
        paddingTop: 8,
      },




      thanksContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: COLORS.white,
      },
      thankYouText: {
        fontSize: SIZES.xLarge,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      orderDetailsText: {
        fontSize: SIZES.large,
        marginBottom: 32,
      },
      backToShopButton: {
        backgroundColor: COLORS.tertiary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
      },
      backToShopText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
      },

      verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
      },
      mt20: {
        marginTop: 20,
      },


      auth_profile_OuterContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: COLORS.lightWhite, 
      },
      auth_profile_InnerContainer: {
        marginTop: 40,
        paddingHorizontal: 20, // Increase horizontal padding
        paddingVertical: 16,  // Increase vertical padding
        backgroundColor: COLORS.white, 
        borderRadius: SIZES.medium, // Increase the border radius for a rounded look
        width: '80%', // Set the width to 80% of the screen width

      },



    });
    
    export default styles;