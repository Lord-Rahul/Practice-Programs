# Solar Cleaner Arduino Sketch

This project controls an Arduino-based solar panel cleaning system. It uses a stepper motor for panel movement, a DC brush motor for cleaning, a relay-controlled pump, and a Bluetooth serial link for manual or automatic commands.

## Features

- Bluetooth command control through a SoftwareSerial link
- Smooth stepper movement with simple acceleration and deceleration
- Homing using a back limit switch
- Brush motor toggle control
- Pump relay toggle control
- Automatic cleaning cycle mode

## Hardware Pins

| Function | Arduino Pin | Notes |
| --- | --- | --- |
| Stepper STEP | 3 | Step pulse output |
| Stepper DIR | 4 | Direction control |
| Brush motor RPWM | 5 | PWM output |
| Brush motor LPWM | 6 | PWM output |
| Relay | 7 | Pump or auxiliary relay control |
| Back limit switch | 9 | Uses `INPUT_PULLUP` |
| Bluetooth RX | 10 | Connected to module TX |
| Bluetooth TX | 11 | Connected to module RX |

## Bluetooth Commands

Send a single letter followed by a newline:

- `S` - Start automatic cleaning cycle
- `X` - Stop cleaning, turn off brush, and switch relay off
- `N` - Move the system forward by the gap distance
- `R` - Stop brush and relay, then home the system
- `B` - Toggle brush motor on or off
- `P` - Toggle relay on or off

## How It Works

1. The sketch waits for Bluetooth input.
2. Commands update system state such as running, brush, and pump.
3. In automatic mode, the brush turns on, the relay turns on, and the stepper performs a cleaning pass.
4. The stepper uses a basic speed ramp to make movement smoother.
5. Homing continues until the back limit switch is triggered.

## Adjustable Settings

These values can be changed directly in the sketch:

- `stepsPerPanel` - travel distance for one panel cleaning pass
- `stepsGap` - distance between panel sections

## Notes

- The back limit switch is configured with `INPUT_PULLUP`, so the switch should pull the input to ground when activated.
- The relay state is written directly with `digitalWrite(RELAY, ...)`, so the active level depends on your relay module.
- The brush motor PWM values may need tuning depending on the motor driver and motor load.

## Usage

1. Upload `solarCleaner.ino` to an Arduino board.
2. Pair and connect a Bluetooth serial module.
3. Open a serial terminal or Bluetooth terminal app.
4. Send one of the commands above to control the cleaner.
