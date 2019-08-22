import { createStackNavigator } from 'react-navigation';

import InfoPage from '../../InfoPage';

const infoPageNavigator = createStackNavigator(
    {
        InfoPage: {
            screen: InfoPage,
            params: {
                item: 'test'
            },
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const newTitle = navigation.state.params.item;
            return {
                headerTitleStyle: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                },
                title: newTitle ? newTitle : 'Info Title'
            }
        },
    }
);

export default infoPageNavigator;