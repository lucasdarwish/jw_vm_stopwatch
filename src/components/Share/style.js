const styles = {
    Main: {

    },
    ButtonShare: {
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "15%",
        height: "91px",
        background: "#25d366",
        padding: "15px 15px 50px",
        boxSizing: "border-box",
        borderTopLeftRadius: 5,
    },
    ButtonShareImage: {
        width: "100%",
        filter: "invert(1)",
    },
    QrcodeWrapper: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        background: "#ffffff00",
        backdropFilter: "blur(21px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    QrcodeWrapperImage: {
        width: "80%"
    },
    CloseShare:{
        background: "#000",
        color: "#fff",
        padding: "20px",
        marginTop: "40px",
        borderRadius: "5px",
        textTransform: "uppercase",
        letterSpacing: "1px",
    }
}
export default styles;