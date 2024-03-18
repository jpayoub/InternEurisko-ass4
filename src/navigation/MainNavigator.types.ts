import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MainNavigatorStackParamList = {
    Login: undefined;
    
    Home: {
        message: string;
    };
    Details: {
        message: string;
    };
};

export type MainNavigatorNavigationProp = NativeStackNavigationProp<MainNavigatorStackParamList>;

export type MainNavigatorRouteProp = RouteProp<MainNavigatorStackParamList>;