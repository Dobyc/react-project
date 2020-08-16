export const changeText = (text) => {
    return {
        type: 'CHANGE_TEXT',    // 名字自取，reducer判断依据
        text,
    }
}