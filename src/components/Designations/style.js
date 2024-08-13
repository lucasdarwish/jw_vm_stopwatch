const styles = {
    Main: {
        backgroundColor: "#e5e5e5",
        display: "flex",
        flexWrap: "wrap",
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        maxWidth: "100%",
    },
    DesignationTitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 5,
        marginBottom: 20,
        flexWrap: "wrap",
        display: "flex",
    },
    TimeInput: {
        fontSize: 20,
        fontWeight: 800,
        // backgroundColor: "#fff",
        fontSize: 20,
        color: "#000",
        // padding: 10,
        // borderRadius: 5,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        // marginTop: 20
        fontWeight: 800
    },
    DesignationTitleText: {
        fontSize: 20,
        // width: "20%"
    },
    DesignationTitleNumber: {
        fontWeight: 800,
    },
    DesignationTimeSelect:{
        fontSize: 20,
        margin: "0px 15px",
        border: "none",
        borderRadius: 5,
        padding: "5px 10px",
        outline: "none",
    },
    DesignationInput: {
        backgroundColor: "#fff",
        fontSize: 20,
        color: "#000",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        border: "none",
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: "#000",
        marginTop: 20,
        outline: "none",
    },
    TimeWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between"
    },
    TimeValue: {
        fontSize: 25,
        // whiteSpace: "unset",
        // display: "block"
    },
    TimeValueLabel: {
        fontSize: 18,
    },
    PressableWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    TimeAction: {
        backgroundColor: '#4a6da7',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        border: "none",
    },
    TimeActionLabel: {
        color: "#fff",
        fontSize: 22,
    },
    TimeActionClear: {
        width: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        border: "none",
        backgroundColor: "transparent",

    },
    TimeActionIcon: {
        width: 20,
        height: 20,
    },
    TimeActionStop: {
        width: 30,
        height: 30
    }

}

export default styles;