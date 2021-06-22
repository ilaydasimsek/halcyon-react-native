import {Animated, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Svg, {Circle, G} from 'react-native-svg';
import {useAnimation} from '../hooks/';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const formatTime = totalSeconds => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return `${minutesString}:${secondsString}`;
};

const CountdownTimer = ({
  durationMilliseconds,
  percentage = 100,
  radius = 100,
  strokeWidth = 10,
  color = 'tomato',
}) => {
  const circleRef = React.useRef();
  const [timeRemaining, setTimeRemaining] = useState(
    durationMilliseconds / 1000,
  );
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const onAnimationProgress = passedPercentage => {
    if (!circleRef?.current) {
      return;
    }
    const passedMilliseconds = Math.ceil(
      durationMilliseconds * (passedPercentage / 100),
    );
    const strokeDashoffset = (circleCircumference * passedPercentage) / 100;
    const remainingTime = Math.ceil(
      (durationMilliseconds - passedMilliseconds) / 1000,
    );
    circleRef.current.setNativeProps({
      strokeDashoffset,
    });
    setTimeRemaining(remainingTime);
  };

  useAnimation({
    durationMilliseconds,
    percentage,
    onAnimationProgress,
  });

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cy="50%"
            cx="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cy="50%"
            cx="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={0}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <Text style={[styles.timer, {fontSize: radius * 0.3}]}>
        {formatTime(timeRemaining)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    position: 'absolute',
    color: 'tomato',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CountdownTimer;
