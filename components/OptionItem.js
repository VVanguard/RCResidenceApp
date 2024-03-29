import { TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Image, Text } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants"

const OptionItem = ({ size, icon, bgColor, label, onPress}) => {

    return (
        <TouchableOpacity
            style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPress}
        >
            <View style={{
                width: size,
                height: size,
            }}>
                <LinearGradient
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                    colors={bgColor}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Image
                        source={icon}
                        resizeMode="cover"
                        style={{
                            tintColor: COLORS.brokenwhite,
                            width: size / 2,
                            height: size / 2,
                        }}
                    />
                </LinearGradient>
            </View>

            <Text
                style={{
                    marginTop: SIZES.base,
                    color: COLORS.black,
                    ...FONTS.body3,
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default OptionItem;