#!/bin/bash
# Script to send current volume notification to dunstify 
# need depencies pamixer, dunstify and canberra-gtk-play for sound
# add this script to you volume control bind
msgID="2345"
volume="$(pamixer --get-volume)"
 

# check volume
if [ $(pamixer --get-mute) == true ]; then
	dunstify  "  Muted " -t 800 -r $msgID
elif [ "$volume" -gt "65" ]; then
	dunstify " $volume% " -h  int:value:$volume  -t 1000 -r $msgID
else
	dunstify " $volume%" -h  int:value:$volume  -t 800 -r $msgID

fi

# play sound
# canberra-gtk-play -i audio-volume-change -d "changeVolume"
