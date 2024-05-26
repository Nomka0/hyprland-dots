#!/bin/bash
# Script to send current brightness notification to dunstify 
# need depencies pamixer, dunstify and canberra-gtk-play for sound
# add this script to you brightness control bind
msgID="2346"
brightness=$(brightnessctl -P | grep -o -E '[0-9]+%' | head -n 1 | sed 's/%//')
 

# check brightness
if [ "$brightness" -gt "65" ]; then
	dunstify "󰃠 $brightness% " -h  int:value:$brightness  -t 1000 -r $msgID
else
	dunstify "󰃠 $brightness%" -h  int:value:$brightness  -t 1000 -r $msgID

fi

# play sound
canberra-gtk-play -i audio-volumd-change -d "changebrightness"
