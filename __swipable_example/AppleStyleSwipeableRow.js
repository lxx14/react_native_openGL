import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class AppleStyleSwipeableRow extends Component {   // HOC, в который заворачивается строка, которую нужно анимировать

    // передача пропсов: 
    // text - что будет в блоке, появившемся при свайпе
    // color - цвет блока
    // х - значение для анимации, выставляется при 
    // progress - вспомогательный параметр для написания анимации

    renderRightAction = (text, color, x, progress) => {

        const animation = progress.interpolate({   // описание какая будет анимация (в данном случае сдвиг в сторону) 
            inputRange: [0, 1],                // значение по дефолту (не менять:))
            outputRange: [x, 0],               // значение по дефолту (не менять:))
        });

        const pressHandler = () => {           // можно повесить обработчик - что делать при клике на блок, появившийся при свайпе элемента
            this.close();
            alert(text);
        };

        return (
            // возвращаем обвертку, для блока и сам блок с его содержимым, появляющегося при свайпе элемента, в который передаем описанные выше анимации и обработчики для него
            <Animated.View style={{ flex: 1, transform: [{ translateX: animation }] } /*указываем обязательно в обертке нашу анимацию, в стили переносить НЕЛЬЗЯ*/}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: color }] /*стили блока*/}
                    onPress={pressHandler} /*если нужен - обработчик, описанный выше*/
                >
                    <Text style={styles.actionText} /*контент блока*/>{text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    renderRightActions = progress => (  // инициализируем блок/блоки, которые выедут при свайпе (в данном примере - 3 блока)
        <View style={styles.wrapperBlocks}
        /*общий контейнер для всех инициализированных блоков, 
        width - как далеко отъедет элемент, который свайпнули (в стилях ниже)
        слева направо параметры: текст в блоке, цвет блока, 
        ------------------------
        цифры - это х, переданный как параметр в самом верху если блок один, то х = width, на которое отъедет элемент,
        если блоков несколько, то для равномерной анимации блоков при выезде мы равномерно разделяем width по всем этим блокам, а именно в данном примере (3 блока):
        первый блок: x=width;
        второй блок: x=width/2;
        третий блок: x=width/3;
        ------------------------
        progress - передаем в таком виде, не меняя, по дефолту
        */
        >
            {this.renderRightAction('More', '#C8C7CD', 192, progress)}
            {this.renderRightAction('Flag', '#ffab00', 128, progress)}
            {this.renderRightAction('More', '#dd2c00', 64, progress)}
        </View>
    );

    updateRef = ref => {            // ОБЯЗАТЕЛЬНО устанавливаем реф на этот элемент
        this._swipeableRow = ref;
    };
    close = () => {                 // обработчик, который закрывает отъехавший при свайпе элемент. в данном примере мы применяем его выше, при описании анимации
        this._swipeableRow.close();
    };

    render() {
        const { children } = this.props;  // children - тот элемент, который мы обернем в этот HOC
        return (
            // в конечно итоге мы возвращаем Swipeable компонент, в который как пропсы передаем: 
            <Swipeable
                ref={this.updateRef}  // реф, описанный выше
                friction={1}  // число, указывающее, насколько визуальное взаимодействие будет задержано по сравнению с расстоянием жеста. Например, 1 будет означать, что смахиваемая панель должна точно следовать за жестом, 2 означает, что она будет в два раза «медленнее».
                rightThreshold={40} // пиксели от правого края, если пройти в свайпе их и отпустить, то блок дальше раскроется автоматически и наоборот
                renderRightActions={this.renderRightActions} // передаем наши инициализированные блоки
            >
                {children}
            </Swipeable>
        );
    }
}

const styles = StyleSheet.create({
    wrapperBlocks: {                           // стили для общего контейнера для всех блоков, выехавших при свайпе элемента
        width: 192,
        flexDirection: 'row'
    },
    actionText: {                             // стили для текста на блоках, появляющихся при свайпе линии
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {                           // стили для блоков, появляющихся при свайпе линии
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});