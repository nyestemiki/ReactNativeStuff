import * as React from 'react'
import { View, Text, Animated, TextInput, StyleSheet } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'

type Donut = {
    percentage?: number
    radius?: number
    strokeWidth?: number 
    duration?: number
    color?: string 
    delay?: number
    textColor?: string
    max?: number
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedInput = Animated.createAnimatedComponent(TextInput)

export default function Donut({
    percentage = 75, 
    radius = 100,
    strokeWidth = 10, 
    duration = 500, 
    color = 'tomato', 
    delay = 500, 
    textColor, 
    max = 100
}: Donut) {
    const animatedValue = React.useRef(new Animated.Value(0)).current
    const circleRef = React.useRef()
    const inputRef = React.useRef()
    const halfCircle = radius + strokeWidth
    const circleCircumference = 2 * Math.PI * radius

    const animation = (toValue: number) => {
        return Animated.timing(animatedValue, {
            toValue, duration, delay, useNativeDriver: true
        }).start(() => {
            animation(toValue === 0 ? percentage : 0)
        })
    }

    React.useEffect(() => {
        animation(percentage)

        animatedValue.addListener(v => {
            if (circleRef?.current) {
                const maxPercentage = ( 100 * v.value ) / max
                const strokeDashoffset = circleCircumference - (circleCircumference * maxPercentage) / 100

                circleRef.current.setNativeProps({strokeDashoffset})
            }

            if (inputRef?.current) {
                inputRef.current.setNativeProps({
                    text: `${Math.round(v.value)}`
                })
            }
        })

        return () => {
            animatedValue.removeAllListeners()
        }
    }, [max, percentage])

    return <View>
        <Svg width={radius*2} height={radius*2} viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}`}>
            <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
                <Circle 
                    cx='50%' 
                    cy='50%' 
                    stroke={color} 
                    strokeWidth={strokeWidth} 
                    r={radius} 
                    fill="transparent" 
                    strokeOpacity={.2}
                />
                <AnimatedCircle 
                    ref={circleRef}
                    cx='50%' 
                    cy='50%' 
                    stroke={color} 
                    strokeWidth={strokeWidth} 
                    r={radius} 
                    fill="transparent" 
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={circleCircumference}
                    strokeLinecap='round'
                />
            </G>
        </Svg>

        <AnimatedInput
            ref={inputRef}
            underlineColorAndroid="transparent"
            editable={false}
            defaultValue="0"
            style={[StyleSheet.absoluteFillObject, {
                fontSize: radius / 2, 
                color: textColor ?? color,
                fontWeight: '900', 
                textAlign: 'center'
            }]}
        />
    </View>
}