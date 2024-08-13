const theme = {
    shadow: 'rgba(0, 0, 0, 0.9)',
};

const styles = {
    Main: {

    },
    ButtonShare: {
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "15%",
        height: "75px",
        background: "#25d366",
        padding: "15px 15px 25px",
        boxSizing: "border-box",
        borderTopLeftRadius: 5,
    },
    ButtonShareImage: {
        width: "100%",
        filter: "invert(1)",
    },
    QrcodeWrapper: {
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        background: theme.shadow,
        backropFilter: "blur(50px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        zIndex: 100
    },
    QrcodeWrapperImage: {
        width: "80%"
    },
    CloseShare:{
        background: "#3b3b3b",
        color: "#fff",
        padding: "20px",
        marginTop: "40px",
        borderRadius: "5px",
        textTransform: "uppercase",
        letterSpacing: "1px",
    }
}
export default styles;