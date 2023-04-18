import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React, {useState, useCallback} from 'react'


const ImageCarousel = ({images} : {images: string[]}) => {
    const windowWidth = (Dimensions.get('window').width);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onFlatlistUpdate = useCallback(({viewableItems}) => {
        if (viewableItems.length > 0) {
          setActiveIndex(viewableItems[0].index || 0);
        }
    }, []);

    return (
        <View>
            <FlatList
                data = {images}
                renderItem = {({item, index}) => (
                    <Image key = {`${index}`} style = {[styles.image, {width: windowWidth - 30}]} source = {{uri: item}} />

                )}
                horizontal
                showsHorizontalScrollIndicator = {false}
                snapToInterval={windowWidth - 0}
                snapToAlignment={'end'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50
                }}
                onViewableItemsChanged = {onFlatlistUpdate}
            />
            <View style = {styles.dotContainer}>
                {images.map((image, index) => (
                    <View key = {`${index}`} style = {[styles.dot, {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'}]} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        height: 250,
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        backgroundColor: '#ededed',
        margin: 5,
    },
})

export default ImageCarousel