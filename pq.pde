/**
 * Visualisation of voltage harmonics
 *
 * Copyright (c) 2013 Steven Blair
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

final int MAX_WIDTH = 1000;
final int MAX_HEIGHT = 850;
final int X_START = 250;
final int PHASORS_START_Y = 85;
final int PHASORS_START_X = 310;
final int PHASOR_HEIGHT = 50;
final int PHASOR_LINE_WIDTH = 3;
final int ONE_PU_HEIGHT = 100;
final int WAVEFORMS_START_X = PHASORS_START_X + 50;
final int WAVEFORMS_END_X = 900;
final int WAVEFORMS_LABEL_X = WAVEFORMS_END_X + 35;

final int Y_INTERVAL = 280;
final int THREE_PHASE_START = 150;
final int I_START = THREE_PHASE_START + Y_INTERVAL;
final int P_START = I_START + Y_INTERVAL;

final float TWO_PI_OVER_THREE = 2.0943951023931954923084289221863;
final float NEG_TWO_PI_OVER_THREE = -2.0943951023931954923084289221863;

final int ZERO_SEQ = 0;
final int POS_SEQ = 1;
final int NEG_SEQ = 2;

final float zeroSeq[] = {0.0, 0.0, 0.0};
final float posSeq[] = {0.0, NEG_TWO_PI_OVER_THREE, TWO_PI_OVER_THREE};
final float negSeq[] = {0.0, TWO_PI_OVER_THREE, NEG_TWO_PI_OVER_THREE};

final color VaColor = color(180, 33, 38);     // red
final color VbColor = color(222, 215, 20);    // yellow
final color VcColor = color(36, 78, 198);     // blue

final color posColor = color(226, 99, 102);   // salmon
final color negColor = color(226, 99, 150);   // pink
final color zeroColor = color(226, 226, 226); // light grey

final color dColor = color(36, 78, 198);      // blue

final color voltageAxis = color(106, 47, 48);
final color currentAxis = color(24, 124, 54);      // green
final color powerAxis = color(200, 191, 231, 150);      // green
final color impedanceColour = color(255, 255, 255);     // white

final color oColor = color(200, 191, 231, 150);    // blueish
final color white = color(255, 255, 255);     // white

// initial values defined in JavaScript code
float R;
int highlighted;
float totalTime = 0.060;

final float f = 50.0;
final float w = 2 * PI * f;        // system angular speed
float theta = 0;
float Ts = 0.00010;
int ITERATIONS;
final int ALPHA_FADED_ITEMS = 140;
float voltageTHD = 0.0;
float currentTHD = 0.0;
int phases;
boolean showIn = false;
float rmsPowerPhaseA = 0.0;
float meanPowerPhaseA = 0.0;

void updateValues() {
    R = Processing.data.sourceImpedance;
    totalTime = Processing.data.simulationTime;
    highlighted = Processing.data.highlighted;
    phases = Processing.data.phases;
}

float[3] harmonic(float t, float freq, float mag, float phase, int sequence) {
    float r[] = new float[3];
    float seqAngle[] = new float[3];

    if (sequence == POS_SEQ) {
        seqAngle = posSeq;
    }
    else if (sequence == NEG_SEQ) {
        seqAngle = negSeq;
    }
    else {
        seqAngle = zeroSeq;
    }

    for (int p = 0; p < phases; p++) {
        r[p] = mag * sin(2 * PI * freq * t + (PI * phase / 180.0) + seqAngle[p]);
    }

    return r;
}

void drawPhasors(float m, float ang, int x, int y, color c, int sequence) {
    // draw axes
    stroke(50);
    strokeWeight(2);
    line(x - PHASOR_HEIGHT, y, x + PHASOR_HEIGHT, y);
    line(x, y - PHASOR_HEIGHT, x, y + PHASOR_HEIGHT);

    float mDraw = m * PHASOR_HEIGHT;

    for (int j = 0; j < 3; j++) {
        // shift phases B and C by 120deg (-/+ respectively)
        if (sequence == POS_SEQ) {
            if (j == 1) {
                ang -= radians(120);
            }
            else if (j == 2) {
                ang += radians(240);
            }
        }
        else if (sequence == NEG_SEQ) {
            if (j == 1) {
                ang += radians(120);
            }
            else if (j == 2) {
                ang -= radians(240);
            }
        }

        strokeWeight(PHASOR_LINE_WIDTH);
        stroke(c, 255 - j * 70);
        line(x, y, x + mDraw*cos(ang), y - mDraw*sin(ang));
    }
}


void drawPowerSystem() {
    final float sourceDiameter = 36;
    final float lineLength = 210;
    final float impedanceWidth = lineLength / 4;
    final float busHeight = 40;
    final float startX = sourceDiameter + 4;
    final float startY = 60;
    final float line1StartX = startX + sourceDiameter / 2;
    final float line1EndX = line1StartX + lineLength / 4;
    final float impedanceCentreX = line1EndX + impedanceWidth / 2;
    final float line2StartX = impedanceCentreX + impedanceWidth / 2;
    final float line2EndX = line2StartX + lineLength / 2;
    final float busX = line2StartX + (line2EndX - line2StartX) / 2;

    fill(0);
    stroke(190);
    strokeWeight(2);

    // source and main line
    ellipseMode(CENTER);
    ellipse(startX, startY, sourceDiameter, sourceDiameter);
    line(line1StartX, startY, line1EndX, startY);
    line(line2StartX, startY, line2EndX, startY);

    // impedance
    rectMode(CENTER);
    rect(impedanceCentreX, startY, impedanceWidth, 14);

    // load (need to add stroke width to x-coordinates)
    line(line2EndX + 2, startY, line2EndX + 2, startY + busHeight / 2);
    line(line2EndX - 3, startY + 2 + busHeight / 2, line2EndX + 6, startY + 2 + busHeight / 2);
    line(line2EndX - 3, startY + 2 + busHeight / 2, line2EndX + 2, startY + 9 + busHeight / 2);
    line(line2EndX + 7, startY + 2 + busHeight / 2, line2EndX + 2, startY + 9 + busHeight / 2);


    // busbar
    strokeWeight(4);
    stroke(voltageAxis);
    line(busX, startY - busHeight / 2, busX, startY + busHeight / 2);

    // text labels
    fill(currentAxis);
    // text("I", line2StartX + 0.75 * (line2EndX - line2StartX), startY - 12);
    var context = externals.context;
    context.font = "italic 12pt Helvetica";
    context.textAlign = "center";
    int currentLabelX = line2StartX + 0.75 * (line2EndX - line2StartX);
    int labelY = startY - 15;
    int voltageLabelY = startY + busHeight * 1.1;
    String currentCanvasColour = "rgba(" + red(currentAxis) + ", " + green(currentAxis) + ", " + blue(currentAxis) + ", 1.0)";
    String impedanceCanvasColour = "rgba(" + red(impedanceColour) + ", " + green(impedanceColour) + ", " + blue(impedanceColour) + ", " + ALPHA_FADED_ITEMS / 255.0 + ")";
    String voltageCanvasColour = "rgba(" + red(voltageAxis) + ", " + green(voltageAxis) + ", " + blue(voltageAxis) + ", 1.0)";
    
    context.fillStyle = impedanceCanvasColour;
    context.fillText("Z = " + nf(R, 1, 2) + " pu", impedanceCentreX, labelY);
    context.fillStyle = currentCanvasColour;
    context.fillText("I", currentLabelX, labelY);
    context.fillStyle = voltageCanvasColour;
    context.fillText("V", busX, voltageLabelY);

    context.textAlign = "left";

    // arrow for current
    strokeWeight(2);
    stroke(currentAxis);
    line(currentLabelX, startY - 6, currentLabelX + 6, startY);
    line(currentLabelX, startY + 6, currentLabelX + 6, startY);
}

String getTHDString(float thd) {
    String thdLabel = "";

    if (highlighted == -1) {
        if (isNaN(thd)) {
            thdLabel = "";
        }
        else if (thd > 1000.0) {
            thdLabel = "THD = >1000%";
        }
        else {
            thdLabel = "THD = " + nf(thd, 1, 2) + "%";
        }
    }

    return thdLabel;
}

String getMeanPString(float mean) {
    String meanLabel = "";

    if (isNaN(mean)) {
        meanLabel = "";
    }
    else if (mean > 1000.0) {
        meanLabel = "Phase A mean = >1000 pu";
    }
    else {
        meanLabel = "Phase A mean = " + nf(mean, 1, 3) + " pu";
    }

    return meanLabel;
}

void plot(float[] data, int startY, int colour, boolean drawAxis, int axisColour, String axisLabel, String value) {
    if (drawAxis) {
        stroke(50);
        strokeWeight(2);
        stroke(axisColour);
        fill(axisColour);
        line(WAVEFORMS_START_X - 10, startY, WAVEFORMS_END_X + 10, startY);                                   // x-axis
        line(WAVEFORMS_START_X, startY - ONE_PU_HEIGHT - 10, WAVEFORMS_START_X, startY + ONE_PU_HEIGHT + 10); // y-axis
        textAlign(RIGHT);
        text("0.0", WAVEFORMS_START_X - 20, startY + 4);
        text("1.0", WAVEFORMS_START_X - 20, startY - ONE_PU_HEIGHT + 4);
        text("-1.0", WAVEFORMS_START_X - 20, startY + ONE_PU_HEIGHT + 4);
        textAlign(LEFT);
        text(axisLabel, WAVEFORMS_START_X - 36, startY - ONE_PU_HEIGHT - 20);

        
        text(value, WAVEFORMS_START_X + 370, startY - ONE_PU_HEIGHT - 20);
        
    }

    // draw waveform
    strokeWeight(2);
    stroke(colour);
    noFill();
    beginShape(POLYGON);

    for (int t = 0; t < ITERATIONS; t++) {
        vertex(WAVEFORMS_START_X + (float(t) * float(WAVEFORMS_END_X - WAVEFORMS_START_X)) / ITERATIONS, startY - (data[t] * ONE_PU_HEIGHT));
    }

    endShape();
}

void setup() {
    size(MAX_WIDTH, MAX_HEIGHT);
    background(0);

    font = createFont("SansSerif.plain", 12, true);
    textFont(font);
    textSize(14);
    //textLeading(10);
    textAlign(CENTER);

    smooth();
    colorMode(HSB);
    frameRate(30);

    updateValues();

    reset();  // implemented in JavaScript
}

// calculate the THD from the sum of squares, v, and the fundamental, v1.
function THD(v, v1) {
    if (v == 0.0 && v1 == 0.0) {
        return 0.0;
    }
    else if (v1 == 0.0) {
        return 10000.0;
    }

    return 100 * Math.sqrt(v - v1 * v1) / v1;
}

void draw() {
    if (Processing.data.change == true) {
        Processing.data.change = false;

        updateValues();

        // TODO totalTime is sometimes not a valid step size
        ITERATIONS = int(totalTime / Ts);

        int iterationsPerCycle = parseInt(0.02 / Ts);
        // console.log(ITERATIONS, iterationsPerCycle);
        // console.log(totalTime, ITERATIONS);

        float Va[] = new float[ITERATIONS];
        float Vb[] = new float[ITERATIONS];
        float Vc[] = new float[ITERATIONS];

        float Vla[] = new float[ITERATIONS];
        float Vlb[] = new float[ITERATIONS];
        float Vlc[] = new float[ITERATIONS];

        float Vsa[] = new float[ITERATIONS];
        float Vsb[] = new float[ITERATIONS];
        float Vsc[] = new float[ITERATIONS];

        float Ia[] = new float[ITERATIONS];
        float Ib[] = new float[ITERATIONS];
        float Ic[] = new float[ITERATIONS];
        float In[] = new float[ITERATIONS];

        float Pa[] = new float[ITERATIONS];
        float Pb[] = new float[ITERATIONS];
        float Pc[] = new float[ITERATIONS];
        
        updateLabels(); // implemented in JavaScript

        background(0);
        textFont(font);

        drawPowerSystem();

        fill(white);

        showIn = false;
        rmsPowerPhaseA = 0.0;
        meanPowerPhaseA = 0.0;

        // compute input waveforms at each time-step
        for (int t = 0; t < ITERATIONS; t++) {
            var theta = w * (float(t) * Ts);

            Va[t] = sin(theta);
            Vb[t] = sin(NEG_TWO_PI_OVER_THREE + theta);
            Vc[t] = sin(TWO_PI_OVER_THREE + theta);

            // calculate current
            Ia[t] = 0.0;
            Ib[t] = 0.0;
            Ic[t] = 0.0;

            Vsa[t] = 0.0;
            Vsb[t] = 0.0;
            Vsc[t] = 0.0;

            int numberOfHarmonics = Object.keys(Processing.data.harmonics).length;
            for (Object h in Processing.data.harmonics) {
                if (highlighted > -1 && h != highlighted) {
                    // do nothing
                }
                else {
                    float zMag = R;
                    if (Processing.data.zType == 1) {
                        zMag = R * Processing.data.harmonics[h].freq / 50.0;
                    }

                    float tempI[] = harmonic(float(t) * Ts, Processing.data.harmonics[h].freq, Processing.data.harmonics[h].mag, Processing.data.harmonics[h].phase, Processing.data.harmonics[h].sequence);
                    Ia[t] += tempI[0];
                    Ib[t] += tempI[1];
                    Ic[t] += tempI[2];

                    // calculate voltage across source impedance
                    if (Processing.data.zType == 1) {
                        // apply 90 degree phase shift for purely inductive impedance
                        tempI = harmonic(float(t) * Ts, Processing.data.harmonics[h].freq, Processing.data.harmonics[h].mag, Processing.data.harmonics[h].phase + 90.0, Processing.data.harmonics[h].sequence);
                    }
                    Vsa[t] += zMag * tempI[0];
                    Vsb[t] += zMag * tempI[1];
                    Vsc[t] += zMag * tempI[2];
                }
            }

            // calculate neutral current
            In[t] = Ia[t] + Ib[t] + Ic[t];

            if (In[t] > 0.01) {
                showIn = true;
            }

            // calculate voltage at point of common coupling
            Vla[t] = Va[t] - Vsa[t];
            Vlb[t] = Vb[t] - Vsb[t];
            Vlc[t] = Vc[t] - Vsc[t];

            Pa[t] = Vla[t] * Ia[t];
            Pb[t] = Vlb[t] * Ib[t];
            Pc[t] = Vlc[t] * Ic[t];

            // calculate power over one cycle
            if (Processing.data.showPower == true) {
                if (t < iterationsPerCycle) {
                    rmsPowerPhaseA += Pa[t] * Pa[t];
                    meanPowerPhaseA += Pa[t];
                }
            }
        }

        if (Processing.data.showPower == true) {
            rmsPowerPhaseA = Math.sqrt(rmsPowerPhaseA / iterationsPerCycle);
            meanPowerPhaseA = meanPowerPhaseA / iterationsPerCycle;
        }
        
        // calculate current THD
        if (highlighted == -1) {
            // create data structure for storing the aggregate for each harmonic (except interharmonics)
            var currentHarmonics = {};
            for (Object h in Processing.data.harmonics) {
                if (Processing.data.harmonics[h].interharmonic == false) {
                    if (currentHarmonics[Processing.data.harmonics[h].freq] == undefined) {
                        currentHarmonics[Processing.data.harmonics[h].freq] = {re: 0.0, im: 0.0};
                    }

                    // must consider phase when adding vectors
                    var hRe = Processing.data.harmonics[h].mag * Math.cos(Math.PI * Processing.data.harmonics[h].phase / 180.0);
                    var hIm = Processing.data.harmonics[h].mag * Math.sin(Math.PI * Processing.data.harmonics[h].phase / 180.0);
                    currentHarmonics[Processing.data.harmonics[h].freq].re += hRe;
                    currentHarmonics[Processing.data.harmonics[h].freq].im += hIm;
                }
            }

            // calculate aggregate magnitudes for each harmonic
            var currentAllHarmonics = 0.0;
            for (Object h in currentHarmonics) {
                currentHarmonics[h].mag = Math.sqrt(currentHarmonics[h].re * currentHarmonics[h].re + currentHarmonics[h].im * currentHarmonics[h].im);
                currentAllHarmonics += (currentHarmonics[h].mag * currentHarmonics[h].mag);
            }

            // extract fundamental, if present
            float currentFundamental = 0.0;
            if (currentHarmonics[50] != undefined) {
                currentFundamental = currentHarmonics[50].mag;
            }

            currentTHD = THD(currentAllHarmonics, currentFundamental);
            // console.log(currentTHD, currentAllHarmonics, currentFundamental);
        }

        // calculate voltage THD
        if (highlighted == -1) {
            var bufferSize = iterationsPerCycle;
            var buffer = [];
            var N = bufferSize / 2 * bufferSize;
            var total = 0.0;
            var peakAbs = 0.0;
            
            for (var i = 0; i < bufferSize; i++) {
                buffer[i] = Vla[i];
                total += buffer[i] * buffer[i];
                if (Math.abs(buffer[i]) > peakAbs) {
                    peakAbs = Math.abs(buffer[i]);
                }
            }
            var rmsAllHarmonics = Math.sqrt(total / bufferSize);
            var peakAllHarmonics = Math.sqrt(2) * rmsAllHarmonics;

            var sinTable = new Float32Array(N);
            var cosTable = new Float32Array(N);

            for (var i = 0; i < N; i++) {
                sinTable[i] = Math.sin(i * TWO_PI / bufferSize);
                cosTable[i] = Math.cos(i * TWO_PI / bufferSize);
            }

            var real = [];
            var imag = [];
            var rval = 0.0;
            var ival = 0.0;

            for (var k = 0; k < bufferSize / 2; k++) {
                rval = 0.0;
                ival = 0.0;

                for (var n = 0; n < buffer.length; n++) {
                    rval += cosTable[k * n] * buffer[n];
                    ival += sinTable[k * n] * buffer[n];
                }

                real[k] = rval;
                imag[k] = ival;
            }

            var divisor = 2 / bufferSize;
            var spectrum = [];

            for (var i = 1, N = bufferSize / 2; i < N; i++) {
                rval = real[i];
                ival = imag[i];
                mag = divisor * Math.sqrt(rval * rval + ival * ival);
                spectrum[i] = mag;
            }

            voltageTHD = THD(peakAllHarmonics * peakAllHarmonics, spectrum[1]);
            voltageCrest = peakAbs / rmsAllHarmonics;
            // console.log("THD = ", voltageTHD, "%");
        }

        int alpha = 220;
        if (highlighted > -1) {
            alpha = ALPHA_FADED_ITEMS;
        }

        var context = externals.context;
        context.font = "12pt Helvetica";

        fill(VaColor, alpha);
        text("A", WAVEFORMS_LABEL_X, THREE_PHASE_START + 4);
        if (phases == 3) {
            fill(VbColor, alpha);
            text("B", WAVEFORMS_LABEL_X + 15, THREE_PHASE_START + 4);
            fill(VcColor, alpha);
            text("C", WAVEFORMS_LABEL_X + 30, THREE_PHASE_START + 4);
        }
        plot(Vla, THREE_PHASE_START, color(VaColor, alpha), true, voltageAxis, "Voltage at point of common coupling (pu)", getTHDString(voltageTHD));
        if (phases == 3) {
            plot(Vlb, THREE_PHASE_START, color(VbColor, alpha), false, 0);
            plot(Vlc, THREE_PHASE_START, color(VcColor, alpha), false, 0);
        }

        fill(VaColor, alpha);
        text("A", WAVEFORMS_LABEL_X, I_START + 4);
        if (phases == 3) {
            fill(VbColor, alpha);
            text("B", WAVEFORMS_LABEL_X + 15, I_START + 4);
            fill(VcColor, alpha);
            text("C", WAVEFORMS_LABEL_X + 30, I_START + 4);
            if (showIn == true) {
                fill(oColor, 120);
                text("N", WAVEFORMS_LABEL_X + 45, I_START + 4);
            }
        }

        plot(Ia, I_START, color(VaColor, alpha), true, currentAxis, "Load current (pu)", getTHDString(currentTHD));
        if (phases == 3) {
            plot(Ib, I_START, color(VbColor, alpha), false, 0);
            plot(Ic, I_START, color(VcColor, alpha), false, 0);
            if (showIn == true) {
                plot(In, I_START, color(oColor, 120), false, 0);
            }
        }

        if (Processing.data.showPower == true) {
            plot(Pa, P_START, color(VaColor, alpha), true, powerAxis, "Load power (pu)", getMeanPString(meanPowerPhaseA));
            if (phases == 3) {
                plot(Pb, P_START, color(VbColor, alpha), false, 0);
                plot(Pc, P_START, color(VcColor, alpha), false, 0);
            }
        }
    }
}