import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    //onPress?: () => void
}

export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
            //onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

// ou 

// export function Button({title}: Props){
//     return(
//         <TouchableOpacity 
//             style={styles.container}
//             activeOpacity={0.8}
//         >
//             <Text style={styles.title}>{title}</Text>
//         </TouchableOpacity>
//     )
// }