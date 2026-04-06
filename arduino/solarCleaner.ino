#include <SoftwareSerial.h>

SoftwareSerial BT(10, 11); // RX, TX

// ===== PINS =====
#define STEP 3
#define DIR  4

#define RPWM 5
#define LPWM 6

#define RELAY 7

#define BACK_LIMIT 9

// ===== VARIABLES =====
String command = "";

bool running = false;
bool brushState = false;
bool pumpState = false;

long stepsPerPanel = 5000;
long stepsGap = 1000;

// ===== SETUP =====
void setup() {
  pinMode(STEP, OUTPUT);
  pinMode(DIR, OUTPUT);

  pinMode(RPWM, OUTPUT);
  pinMode(LPWM, OUTPUT);

  pinMode(RELAY, OUTPUT);

  pinMode(BACK_LIMIT, INPUT_PULLUP);

  BT.begin(9600);
  Serial.begin(9600);
}

// ===== SMOOTH STEPPER =====
void stepMotorSmooth(long steps, bool dir) {
  digitalWrite(DIR, dir);

  int minDelay = 300;
  int maxDelay = 1200;

  for (long i = 0; i < steps; i++) {

    float progress = (float)i / steps;
    int delayVal;

    if (progress < 0.2)
      delayVal = maxDelay - (progress * (maxDelay - minDelay) * 5);
    else if (progress > 0.8)
      delayVal = minDelay + ((progress - 0.8) * (maxDelay - minDelay) * 5);
    else
      delayVal = minDelay;

    digitalWrite(STEP, HIGH);
    delayMicroseconds(delayVal);
    digitalWrite(STEP, LOW);
    delayMicroseconds(delayVal);
  }
}

// ===== HOMING =====
void homeSystem() {
  digitalWrite(DIR, LOW);

  while (digitalRead(BACK_LIMIT) == HIGH) {
    digitalWrite(STEP, HIGH);
    delayMicroseconds(1000);
    digitalWrite(STEP, LOW);
    delayMicroseconds(1000);
  }
}

// ===== BRUSH =====
void brushON() {
  analogWrite(RPWM, 200);
  analogWrite(LPWM, 0);
  brushState = true;
}

void brushOFF() {
  analogWrite(RPWM, 0);
  analogWrite(LPWM, 0);
  brushState = false;
}

// ===== LOOP =====
void loop() {

  // READ BLUETOOTH
  if (BT.available()) {
    command = BT.readStringUntil('\n');
    command.trim();

    Serial.println(command);
  }

  // ===== COMMAND HANDLING =====

  if (command == "S") {
    running = true;
    command = "";
  }

  if (command == "X") {
    running = false;
    brushOFF();
    digitalWrite(RELAY, LOW);
    command = "";
  }

  if (command == "N") {
    stepMotorSmooth(stepsGap, HIGH);
    command = "";
  }

  if (command == "R") {
    brushOFF();
    digitalWrite(RELAY, LOW);
    homeSystem();
    command = "";
  }

  if (command == "B") {
    if (brushState) brushOFF();
    else brushON();
    command = "";
  }

  if (command == "P") {
    pumpState = !pumpState;
    digitalWrite(RELAY, pumpState);
    command = "";
  }

  // ===== AUTO CLEAN =====
  if (running) {
    brushON();
    digitalWrite(RELAY, HIGH);

    stepMotorSmooth(stepsPerPanel, HIGH);
    delay(500);
    stepMotorSmooth(stepsPerPanel, LOW);

    stepMotorSmooth(stepsGap, HIGH);
  }
}