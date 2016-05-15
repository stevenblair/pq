// converter data approximated from:
// http://www05.abb.com/global/scot/scot201.nsf/veritydisplay/cedba3af94239d90c1257b0f004712c4/$file/ABB_Technical_guide_No_6_REVD.pdf
// and
// http://www.mathworks.co.uk/help/physmod/sps/powersys/ref/synchronized6pulsegenerator.html
HarmonicsSixPulse = {
    1 : {
        freq: 50.0,
        mag : 1.0,
        phase: -37.0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    5 : {
        freq: 250.0,
        mag : 0.2164,
        phase: 171.5,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    7 : {
        freq: 350.0,
        mag : 0.1242,
        phase: 100.4,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    11 : {
        freq: 550.0,
        mag : 0.0892,
        phase: -52.4,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    13 : {
        freq: 650.0,
        mag : 0.0693,
        phase: -128.3,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    17 : {
        freq: 850.0,
        mag : 0.0541,
        phase: 80.0,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    19 : {
        freq: 950.0,
        mag : 0.0458,
        phase: 2.9,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    23 : {
        freq: 1150.0,
        mag : 0.0370,
        phase: -146.8,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    25 : {
        freq: 1250.0,
        mag : 0.0332,
        phase: 133.9,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    29 : {
        freq: 1450.0,
        mag : 0.0269,
        phase: -18.0,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    31 : {
        freq: 1550.0,
        mag : 0.0235,
        phase: -96.4,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    35 : {
        freq: 1750.0,
        mag : 0.0185,
        phase: 108.4,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    41 : {
        freq: 2050.0,
        mag : 0.0116,
        phase: -125.9,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    43 : {
        freq: 2150.0,
        mag : 0.0102,
        phase: 165.1,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    }
}

// data approximated from: http://www.mathworks.co.uk/help/physmod/sps/examples_v2/three-phase-harmonic-filters.html
HarmonicsTwelvePulse = {
    1 : {
        freq: 50.0,
        mag : 1.0,
        phase: 0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    3 : {
        freq: 150.0,
        mag : 0.0616,
        phase: 70.1,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    5 : {
        freq: 250.0,
        mag : 0.040,
        phase: 66.7,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    7 : {
        freq: 350.0,
        mag : 0.0635,
        phase: 111.8,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    9 : {
        freq: 450.0,
        mag : 0.0523,
        phase: 108.1,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    11 : {
        freq: 550.0,
        mag : 0.0425,
        phase: -31.2,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    13 : {
        freq: 650.0,
        mag : 0.0246,
        phase: -42.7,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    15 : {
        freq: 750.0,
        mag : 0.0076,
        phase: 29.9,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    17 : {
        freq: 850.0,
        mag : 0.0044,
        phase: 12.1,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    19 : {
        freq: 950.0,
        mag : 0.0054,
        phase: 37.6,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    21 : {
        freq: 1050.0,
        mag : 0.0031,
        phase: 16.3,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    23 : {
        freq: 1150.0,
        mag : 0.0005,
        phase: -133.5,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    25 : {
        freq: 1250.0,
        mag : 0.01,
        phase: 0.0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    25 : {
        freq: 1350.0,
        mag : 0.0034,
        phase: -11.1,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    }
};

HarmonicsTwentyFourPulse = {
    1 : {
        freq: 50.0,
        mag : 1.0,
        phase: 0.0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    5 : {
        freq: 250.0,
        mag : 0.02,
        phase: 0.0,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    7 : {
        freq: 350.0,
        mag : 0.005,
        phase: 0.0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    11 : {
        freq: 550.0,
        mag : 0.001,
        phase: 0.0,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    17 : {
        freq: 850.0,
        mag : 0.0,
        phase: 0.0,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    23 : {
        freq: 1150.0,
        mag : 0.02,
        phase: 0.0,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    25 : {
        freq: 1250.0,
        mag : 0.015,
        phase: 0.0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    }
};

// data from: http://panda.et.tu-dresden.de/cgi-bin/PANDA.cgi
HarmonicsCFL = {
    1 : {
        freq: 50.0,
        mag : 0.283694803715,
        phase: 29.9656391143799,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    3 : {
        freq: 150.0,
        mag : 0.212857604027,
        phase: -87.599609375,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    5 : {
        freq: 250.0,
        mag : 0.115495443344,
        phase: 166.692993164062,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    7 : {
        freq: 350.0,
        mag : 0.0602563209832,
        phase: 95.9881362915039,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    9 : {
        freq: 450.0,
        mag : 0.0577425584197,
        phase: 23.9183807373047,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    11 : {
        freq: 550.0,
        mag : 0.0453840009868,
        phase: -62.9775085449,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    13 : {
        freq: 650.0,
        mag : 0.0342803746462,
        phase: -133.788406372,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    15 : {
        freq: 750.0,
        mag : 0.0334529131651,
        phase: 149.839004516602,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    17 : {
        freq: 850.0,
        mag : 0.0277218967676,
        phase: 67.8650817871094,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    19 : {
        freq: 950.0,
        mag : 0.0237107276917,
        phase: -3.60229492188,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    21 : {
        freq: 1050.0,
        mag : 0.023070095107,
        phase: -81.6465148926,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    23 : {
        freq: 1150.0,
        mag : 0.0196792315692,
        phase: -160.848403931,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    25 : {
        freq: 1250.0,
        mag : 0.0179369524121,
        phase: 126.533599853516,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    27 : {
        freq: 1350.0,
        mag : 0.0172131285071,
        phase: 47.8644599914551,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    29 : {
        freq: 1450.0,
        mag : 0.0150440558791,
        phase: -29.2486877441,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    31 : {
        freq: 1550.0,
        mag : 0.0142744155601,
        phase: -103.111602783,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    33 : {
        freq: 1650.0,
        mag : 0.0135129522532,
        phase: 177.943206787109,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    35 : {
        freq: 1750.0,
        mag : 0.0120393121615,
        phase: 102.103996276855,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    37 : {
        freq: 1850.0,
        mag : 0.0116273043677,
        phase: 27.3156204223633,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    39 : {
        freq: 1950.0,
        mag : 0.0109303919598,
        phase: -51.1809997559,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    41 : {
        freq: 2050.0,
        mag : 0.00998393632472,
        phase: -126.524200439,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    43 : {
        freq: 2150.0,
        mag : 0.00965414382517,
        phase: 157.552993774414,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    45 : {
        freq: 2250.0,
        mag : 0.00897604040802,
        phase: 80.0433578491211,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    47 : {
        freq: 2350.0,
        mag : 0.00844247173518,
        phase: 5.37231397628784,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    49 : {
        freq: 2450.0,
        mag : 0.00823791977018,
        phase: -71.8067932129,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },

}

HarmonicsLED = {
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 0.20088840276002878,
        phase: 32.7669792175293,
        sequence: Processing.data.SEQ.POS
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.03570200409740208,
        phase: 105.861198425293,
        sequence: Processing.data.SEQ.POS
    },
    9: {
        freq: 450.0,
        interharmonic: false,
        mag: 0.036551616154611125,
        phase: 33.093921661377,
        sequence: Processing.data.SEQ.ZERO
    },
    11: {
        freq: 550.0,
        interharmonic: false,
        mag: 0.023699412122368802,
        phase: -27.61111450195301,
        sequence: Processing.data.SEQ.NEG
    },
    13: {
        freq: 650.0,
        interharmonic: false,
        mag: 0.01807299535721538,
        phase: -81.76119995117199,
        sequence: Processing.data.SEQ.POS
    },
    15: {
        freq: 750.0,
        interharmonic: false,
        mag: 0.00892423186451196,
        phase: -162.371200561523,
        sequence: Processing.data.SEQ.ZERO
    },
    17: {
        freq: 850.0,
        interharmonic: false,
        mag: 0.005601616809144618,
        phase: 107.679000854492,
        sequence: Processing.data.SEQ.NEG
    },
    19: {
        freq: 950.0,
        interharmonic: false,
        mag: 0.00924136815592644,
        phase: 20.523099899292,
        sequence: Processing.data.SEQ.POS
    },
    21: {
        freq: 1050.0,
        interharmonic: false,
        mag: 0.00985360820777712,
        phase: -39.85980224609398,
        sequence: Processing.data.SEQ.ZERO
    },
    23: {
        freq: 1150.0,
        interharmonic: false,
        mag: 0.01042081229388714,
        phase: -86.37548828125,
        sequence: Processing.data.SEQ.NEG
    },
    25: {
        freq: 1250.0,
        interharmonic: false,
        mag: 0.00821505580097436,
        phase: -139.246200561523,
        sequence: Processing.data.SEQ.POS
    },
    27: {
        freq: 1350.0,
        interharmonic: false,
        mag: 0.005819454090669749,
        phase: 175.761596679688,
        sequence: Processing.data.SEQ.ZERO
    },
    29: {
        freq: 1450.0,
        interharmonic: false,
        mag: 0.003042669617570934,
        phase: 107.615196228027,
        sequence: Processing.data.SEQ.NEG
    },
    3: {
        freq: 150.0,
        interharmonic: false,
        mag: 0.1243214383721352,
        phase: -87.13070678710898,
        sequence: Processing.data.SEQ.ZERO
    },
    31: {
        freq: 1550.0,
        interharmonic: false,
        mag: 0.0011903615668416002,
        phase: 5.52760601043701,
        sequence: Processing.data.SEQ.POS
    },
    33: {
        freq: 1650.0,
        interharmonic: false,
        mag: 0.002589195559266954,
        phase: -91.18618774414102,
        sequence: Processing.data.SEQ.ZERO
    },
    35: {
        freq: 1750.0,
        interharmonic: false,
        mag: 0.003525067353621126,
        phase: -158.16340637207,
        sequence: Processing.data.SEQ.NEG
    },
    37: {
        freq: 1850.0,
        interharmonic: false,
        mag: 0.00394767348188907,
        phase: 153.894393920898,
        sequence: Processing.data.SEQ.POS
    },
    39: {
        freq: 1950.0,
        interharmonic: false,
        mag: 0.004016500781290236,
        phase: 97.8055191040039,
        sequence: Processing.data.SEQ.ZERO
    },
    41: {
        freq: 2050.0,
        interharmonic: false,
        mag: 0.003473729942925276,
        phase: 50.2065010070801,
        sequence: Processing.data.SEQ.NEG
    },
    43: {
        freq: 2150.0,
        interharmonic: false,
        mag: 0.0029912557220086442,
        phase: -2.7344970703119884,
        sequence: Processing.data.SEQ.POS
    },
    45: {
        freq: 2250.0,
        interharmonic: false,
        mag: 0.0017727587255649238,
        phase: -50.14138793945301,
        sequence: Processing.data.SEQ.ZERO
    },
    47: {
        freq: 2350.0,
        interharmonic: false,
        mag: 0.0008139179844874859,
        phase: -105.152893066406,
        sequence: Processing.data.SEQ.NEG
    },
    49: {
        freq: 2450.0,
        interharmonic: false,
        mag: 0.000648828587145546,
        phase: 65.7159194946289,
        sequence: Processing.data.SEQ.POS
    },
    5: {
        freq: 250.0,
        interharmonic: false,
        mag: 0.05588444508612156,
        phase: 166.524597167969,
        sequence: Processing.data.SEQ.NEG
    },
    51: {
        freq: 2550.0,
        interharmonic: false,
        mag: 0.001513706403784452,
        phase: 12.3795795440674,
        sequence: Processing.data.SEQ.ZERO
    },
    53: {
        freq: 2650.0,
        interharmonic: false,
        mag: 0.002382551960181444,
        phase: -32.61340332031199,
        sequence: Processing.data.SEQ.NEG
    },
    55: {
        freq: 2750.0,
        interharmonic: false,
        mag: 0.002496556844562294,
        phase: -76.230712890625,
        sequence: Processing.data.SEQ.POS
    },
    57: {
        freq: 2850.0,
        interharmonic: false,
        mag: 0.002482675190549346,
        phase: -117.197998046875,
        sequence: Processing.data.SEQ.ZERO
    },
    59: {
        freq: 2950.0,
        interharmonic: false,
        mag: 0.0019001952605322,
        phase: -160.672393798828,
        sequence: Processing.data.SEQ.NEG
    },
    61: {
        freq: 3050.0,
        interharmonic: false,
        mag: 0.001300842035561802,
        phase: 160.883407592773,
        sequence: Processing.data.SEQ.POS
    },
    63: {
        freq: 3150.0,
        interharmonic: false,
        mag: 0.00043848481436725684,
        phase: -58.08358764648398,
        sequence: Processing.data.SEQ.ZERO
    },
    65: {
        freq: 3250.0,
        interharmonic: false,
        mag: 0.0003125140865449794,
        phase: -172.154602050781,
        sequence: Processing.data.SEQ.NEG
    },
    67: {
        freq: 3350.0,
        interharmonic: false,
        mag: 0.000918353965971618,
        phase: -160.203598022461,
        sequence: Processing.data.SEQ.POS
    },
    69: {
        freq: 3450.0,
        interharmonic: false,
        mag: 0.001308059989241886,
        phase: 155.045394897461,
        sequence: Processing.data.SEQ.ZERO
    },
    71: {
        freq: 3550.0,
        interharmonic: false,
        mag: 0.0015408084145747142,
        phase: 114.920196533203,
        sequence: Processing.data.SEQ.NEG
    },
    73: {
        freq: 3650.0,
        interharmonic: false,
        mag: 0.001551081659272314,
        phase: 67.9731597900391,
        sequence: Processing.data.SEQ.POS
    },
    75: {
        freq: 3750.0,
        interharmonic: false,
        mag: 0.00137564039323479,
        phase: 27.097240447998,
        sequence: Processing.data.SEQ.ZERO
    },
    77: {
        freq: 3850.0,
        interharmonic: false,
        mag: 0.00108342000748962,
        phase: -15.887298583983977,
        sequence: Processing.data.SEQ.NEG
    },
    79: {
        freq: 3950.0,
        interharmonic: false,
        mag: 0.0006753882189514139,
        phase: -45.30160522460898,
        sequence: Processing.data.SEQ.POS
    },
    81: {
        freq: 4050.0,
        interharmonic: false,
        mag: 0.0002894927965826352,
        phase: 0.0,
        sequence: Processing.data.SEQ.ZERO
    },
    83: {
        freq: 4150.0,
        interharmonic: false,
        mag: 0.0005181228043511508,
        phase: -74.76480102539102,
        sequence: Processing.data.SEQ.NEG
    },
    85: {
        freq: 4250.0,
        interharmonic: false,
        mag: 0.000888560403836892,
        phase: -29.769714355468977,
        sequence: Processing.data.SEQ.POS
    },
    87: {
        freq: 4350.0,
        interharmonic: false,
        mag: 0.001200871163746344,
        phase: -65.67169189453102,
        sequence: Processing.data.SEQ.ZERO
    },
    89: {
        freq: 4450.0,
        interharmonic: false,
        mag: 0.001235520030604674,
        phase: -101.81491088867199,
        sequence: Processing.data.SEQ.NEG
    },
    91: {
        freq: 4550.0,
        interharmonic: false,
        mag: 0.001170346804428846,
        phase: -139.844604492188,
        sequence: Processing.data.SEQ.POS
    },
    93: {
        freq: 4650.0,
        interharmonic: false,
        mag: 0.000901731604244562,
        phase: -175.621994018555,
        sequence: Processing.data.SEQ.ZERO
    },
    95: {
        freq: 4750.0,
        interharmonic: false,
        mag: 0.0006217266200110321,
        phase: 149.673599243164,
        sequence: Processing.data.SEQ.NEG
    },
    97: {
        freq: 4850.0,
        interharmonic: false,
        mag: 0.0002956101670861242,
        phase: 0.0,
        sequence: Processing.data.SEQ.POS
    },
    99: {
        freq: 4950.0,
        interharmonic: false,
        mag: 0.0002897124068113044,
        phase: 0.0,
        sequence: Processing.data.SEQ.ZERO
    }
}

HarmonicsDCSupply = {
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 0.406596601009369,
        phase: -9.554412841796989,
        sequence: Processing.data.SEQ.POS
    },
    3: {
        freq: 150.0,
        interharmonic: false,
        mag: 0.2680347859859465,
        phase: 137.914596557617,
        sequence: Processing.data.SEQ.ZERO
    },
    5: {
        freq: 250.0,
        interharmonic: false,
        mag: 0.1069485023617745,
        phase: -88.968994140625,
        sequence: Processing.data.SEQ.NEG
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.04808124899864195,
        phase: -0.9843139648439774,
        sequence: Processing.data.SEQ.POS
    },
    9: {
        freq: 450.0,
        interharmonic: false,
        mag: 0.0275866203010082,
        phase: 108.673202514648,
        sequence: Processing.data.SEQ.ZERO
    },
    11: {
        freq: 550.0,
        interharmonic: false,
        mag: 0.0105746304616332,
        phase: 157.222595214844,
        sequence: Processing.data.SEQ.NEG
    },
    13: {
        freq: 650.0,
        interharmonic: false,
        mag: 0.0127734299749136,
        phase: -101.13479614257801,
        sequence: Processing.data.SEQ.POS
    },
    15: {
        freq: 750.0,
        interharmonic: false,
        mag: 0.0055475700646639,
        phase: -40.66598510742199,
        sequence: Processing.data.SEQ.ZERO
    },
    17: {
        freq: 850.0,
        interharmonic: false,
        mag: 0.0079509597271681,
        phase: 59.9136199951172,
        sequence: Processing.data.SEQ.NEG
    },
    19: {
        freq: 950.0,
        interharmonic: false,
        mag: 0.00364945502951741,
        phase: 124.944396972656,
        sequence: Processing.data.SEQ.POS
    },
    21: {
        freq: 1050.0,
        interharmonic: false,
        mag: 0.00570352002978325,
        phase: -129.784805297852,
        sequence: Processing.data.SEQ.ZERO
    },
    23: {
        freq: 1150.0,
        interharmonic: false,
        mag: 0.00193426595069468,
        phase: -78.54379272460898,
        sequence: Processing.data.SEQ.NEG
    },
    25: {
        freq: 1250.0,
        interharmonic: false,
        mag: 0.004123662132769825,
        phase: 25.3089408874512,
        sequence: Processing.data.SEQ.POS
    },
    27: {
        freq: 1350.0,
        interharmonic: false,
        mag: 0.00178341194987297,
        phase: 94.3125228881836,
        sequence: Processing.data.SEQ.ZERO
    },
    29: {
        freq: 1450.0,
        interharmonic: false,
        mag: 0.002252544974908235,
        phase: -172.610595703125,
        sequence: Processing.data.SEQ.NEG
    },
    31: {
        freq: 1550.0,
        interharmonic: false,
        mag: 0.0021511260420084,
        phase: -114.371002197266,
        sequence: Processing.data.SEQ.POS
    },
    33: {
        freq: 1650.0,
        interharmonic: false,
        mag: 0.001793520990759135,
        phase: 18.5670204162598,
        sequence: Processing.data.SEQ.ZERO
    },
    35: {
        freq: 1750.0,
        interharmonic: false,
        mag: 0.001714951009489595,
        phase: 36.7052993774414,
        sequence: Processing.data.SEQ.NEG
    },
    37: {
        freq: 1850.0,
        interharmonic: false,
        mag: 0.001812823000364005,
        phase: 175.660003662109,
        sequence: Processing.data.SEQ.POS
    },
    39: {
        freq: 1950.0,
        interharmonic: false,
        mag: 0.00108552200254053,
        phase: -140.186798095703,
        sequence: Processing.data.SEQ.ZERO
    },
    41: {
        freq: 2050.0,
        interharmonic: false,
        mag: 0.00117269402835518,
        phase: -54.16061401367199,
        sequence: Processing.data.SEQ.NEG
    },
    43: {
        freq: 2150.0,
        interharmonic: false,
        mag: 0.001476641977205875,
        phase: 44.2846603393555,
        sequence: Processing.data.SEQ.POS
    },
    47: {
        freq: 2350.0,
        interharmonic: false,
        mag: 0.00151671504136175,
        phase: -159.789398193359,
        sequence: Processing.data.SEQ.NEG
    }
}

// Variable- or Adjustable-speed drive data (at 100% load) from: G. Chang, et al., "MODELING OF HARMONIC SOURCES"
// https://www.calvin.edu/~pribeiro/IEEE/ieee_cd/chapters/pdffiles/c3pdf.pdf
HarmonicsVSD = {
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 1.0,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    3: {
        freq: 150.0,
        interharmonic: false,
        mag: 0.0035,
        phase: -159,
        sequence: Processing.data.SEQ.ZERO
    },
    5: {
        freq: 250.0,
        interharmonic: false,
        mag: 0.6082,
        phase: -175,
        sequence: Processing.data.SEQ.NEG
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.3342,
        phase: -172,
        sequence: Processing.data.SEQ.POS
    },
    9: {
        freq: 450.0,
        interharmonic: false,
        mag: 0.005,
        phase: 158,
        sequence: Processing.data.SEQ.ZERO
    },
    11: {
        freq: 550.0,
        interharmonic: false,
        mag: 0.0384,
        phase: 166,
        sequence: Processing.data.SEQ.NEG
    },
    13: {
        freq: 650.0,
        interharmonic: false,
        mag: 0.0774,
        phase: -177,
        sequence: Processing.data.SEQ.POS
    },
    15: {
        freq: 750.0,
        interharmonic: false,
        mag: 0.0041,
        phase: 135,
        sequence: Processing.data.SEQ.ZERO
    },
    17: {
        freq: 850.0,
        interharmonic: false,
        mag: 0.0127,
        phase: 32,
        sequence: Processing.data.SEQ.NEG
    },
    19: {
        freq: 950.0,
        interharmonic: false,
        mag: 0.0154,
        phase: 179,
        sequence: Processing.data.SEQ.POS
    },
    21: {
        freq: 1050.0,
        interharmonic: false,
        mag: 0.0032,
        phase: 110,
        sequence: Processing.data.SEQ.ZERO
    },
    23: {
        freq: 1150.0,
        interharmonic: false,
        mag: 0.0108,
        phase: 38,
        sequence: Processing.data.SEQ.NEG
    },
    25: {
        freq: 1250.0,
        interharmonic: false,
        mag: 0.0016,
        phase: 49,
        sequence: Processing.data.SEQ.POS
    }
}

// from: https://www.calvin.edu/~pribeiro/IEEE/ieee_cd/chapters/pdffiles/c10pdf.pdf
HarmonicsTCR = {
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 1.0,
        phase: 46.92,
        sequence: Processing.data.SEQ.POS
    },
    5: {
        freq: 250.0,
        interharmonic: false,
        mag: 0.0702,
        phase: -124.40,
        sequence: Processing.data.SEQ.NEG
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.025,
        phase: -29.87,
        sequence: Processing.data.SEQ.POS
    },
    11: {
        freq: 550.0,
        interharmonic: false,
        mag: 0.0136,
        phase: -23.75,
        sequence: Processing.data.SEQ.NEG
    },
    13: {
        freq: 650.0,
        interharmonic: false,
        mag: 0.0075,
        phase: 71.50,
        sequence: Processing.data.SEQ.POS
    },
    17: {
        freq: 850.0,
        interharmonic: false,
        mag: 0.0062,
        phase: 77.12,
        sequence: Processing.data.SEQ.NEG
    },
    19: {
        freq: 950.0,
        interharmonic: false,
        mag: 0.0032,
        phase: 173.43,
        sequence: Processing.data.SEQ.POS
    },
    23: {
        freq: 1150.0,
        interharmonic: false,
        mag: 0.0043,
        phase: 178.02,
        sequence: Processing.data.SEQ.NEG
    },
    25: {
        freq: 1250.0,
        interharmonic: false,
        mag: 0.0013,
        phase: -83.45,
        sequence: Processing.data.SEQ.POS
    },
    29: {
        freq: 1450.0,
        interharmonic: false,
        mag: 0.004,
        phase: -80.45,
        sequence: Processing.data.SEQ.NEG
    }
}

HarmonicsArcFurnace = {
    50 : { freq: 50, mag: 1, phase: 0, sequence: Processing.data.SEQ.POS, interharmonic: false},
    100 : { freq: 100, mag: 0.043903, phase: -65.3069, sequence: Processing.data.SEQ.NEG, interharmonic: false},
    150 : { freq: 150, mag: 0.040597, phase: -26.2098, sequence: Processing.data.SEQ.ZERO, interharmonic: false},
    200 : { freq: 200, mag: 0.019285, phase: -13.3898, sequence: Processing.data.SEQ.POS, interharmonic: false},
    250 : { freq: 250, mag: 0.012447, phase: -20.8452, sequence: Processing.data.SEQ.NEG, interharmonic: false},
    300 : { freq: 300, mag: 0.012121, phase: 10.6512, sequence: Processing.data.SEQ.ZERO, interharmonic: false},
    350 : { freq: 350, mag: 0.0019537, phase: 43.7998, sequence: Processing.data.SEQ.POS, interharmonic: false},
    400 : { freq: 400, mag: 0.0017368, phase: 96.1327, sequence: Processing.data.SEQ.NEG, interharmonic: false},
    450 : { freq: 450, mag: 0.0031208, phase: 74.5851, sequence: Processing.data.SEQ.ZERO, interharmonic: false},
    700 : { freq: 700, mag: 0.0010201, phase: -85.2962, sequence: Processing.data.SEQ.NEG, interharmonic: false},
    1 : { freq: 1, mag: 0.0077582, phase: -65.726, sequence: Processing.data.SEQ.POS, interharmonic: true},
    2 : { freq: 2, mag: 0.0077632, phase: 113.2343, sequence: Processing.data.SEQ.POS, interharmonic: true},
    3 : { freq: 3, mag: 0.011137, phase: 104.0665, sequence: Processing.data.SEQ.POS, interharmonic: true},
    4 : { freq: 4, mag: 0.015946, phase: 126.815, sequence: Processing.data.SEQ.POS, interharmonic: true},
    5 : { freq: 5, mag: 0.010222, phase: 2.0292, sequence: Processing.data.SEQ.POS, interharmonic: true},
    6 : { freq: 6, mag: 0.019247, phase: 48.8381, sequence: Processing.data.SEQ.POS, interharmonic: true},
    7 : { freq: 7, mag: 0.026364, phase: 162.322, sequence: Processing.data.SEQ.POS, interharmonic: true},
    8 : { freq: 8, mag: 0.015596, phase: -20.1729, sequence: Processing.data.SEQ.POS, interharmonic: true},
    9 : { freq: 9, mag: 0.030227, phase: -158.3932, sequence: Processing.data.SEQ.POS, interharmonic: true},
    10 : { freq: 10, mag: 0.034145, phase: 132.03, sequence: Processing.data.SEQ.POS, interharmonic: true},
    11 : { freq: 11, mag: 0.021061, phase: 47.2279, sequence: Processing.data.SEQ.POS, interharmonic: true},
    12 : { freq: 12, mag: 0.023891, phase: -52.1735, sequence: Processing.data.SEQ.POS, interharmonic: true},
    13 : { freq: 13, mag: 0.026842, phase: 178.9212, sequence: Processing.data.SEQ.POS, interharmonic: true},
    14 : { freq: 14, mag: 0.035607, phase: -99.2983, sequence: Processing.data.SEQ.POS, interharmonic: true},
    15 : { freq: 15, mag: 0.030549, phase: 54.8824, sequence: Processing.data.SEQ.POS, interharmonic: true},
    16 : { freq: 16, mag: 0.013499, phase: 37.7966, sequence: Processing.data.SEQ.POS, interharmonic: true},
    17 : { freq: 17, mag: 0.0063686, phase: -40.5916, sequence: Processing.data.SEQ.POS, interharmonic: true},
    18 : { freq: 18, mag: 0.018527, phase: -128.8126, sequence: Processing.data.SEQ.POS, interharmonic: true},
    19 : { freq: 19, mag: 0.036764, phase: -170.9514, sequence: Processing.data.SEQ.POS, interharmonic: true},
    20 : { freq: 20, mag: 0.029446, phase: -28.3996, sequence: Processing.data.SEQ.POS, interharmonic: true},
    21 : { freq: 21, mag: 0.0061212, phase: -113.7239, sequence: Processing.data.SEQ.POS, interharmonic: true},
    22 : { freq: 22, mag: 0.021977, phase: 81.2791, sequence: Processing.data.SEQ.POS, interharmonic: true},
    23 : { freq: 23, mag: 0.0021786, phase: -46.6694, sequence: Processing.data.SEQ.POS, interharmonic: true},
    25 : { freq: 25, mag: 0.013981, phase: 122.9616, sequence: Processing.data.SEQ.POS, interharmonic: true},
    26 : { freq: 26, mag: 0.0036337, phase: 84.3227, sequence: Processing.data.SEQ.POS, interharmonic: true},
    29 : { freq: 29, mag: 0.010701, phase: 25.5693, sequence: Processing.data.SEQ.POS, interharmonic: true},
    30 : { freq: 30, mag: 0.015676, phase: -116.3322, sequence: Processing.data.SEQ.POS, interharmonic: true},
    31 : { freq: 31, mag: 0.033888, phase: 164.6582, sequence: Processing.data.SEQ.POS, interharmonic: true},
    32 : { freq: 32, mag: 0.022385, phase: -84.4841, sequence: Processing.data.SEQ.POS, interharmonic: true},
    33 : { freq: 33, mag: 0.011122, phase: 152.8491, sequence: Processing.data.SEQ.POS, interharmonic: true},
    34 : { freq: 34, mag: 0.015545, phase: -99.4427, sequence: Processing.data.SEQ.POS, interharmonic: true},
    35 : { freq: 35, mag: 0.015555, phase: -45.517, sequence: Processing.data.SEQ.POS, interharmonic: true},
    36 : { freq: 36, mag: 0.033168, phase: -148.4999, sequence: Processing.data.SEQ.POS, interharmonic: true},
    37 : { freq: 37, mag: 0.025344, phase: 50.442, sequence: Processing.data.SEQ.POS, interharmonic: true},
    38 : { freq: 38, mag: 0.019112, phase: -114.9779, sequence: Processing.data.SEQ.POS, interharmonic: true},
    39 : { freq: 39, mag: 0.018902, phase: -163.7816, sequence: Processing.data.SEQ.POS, interharmonic: true},
    40 : { freq: 40, mag: 0.05437, phase: 80.3425, sequence: Processing.data.SEQ.POS, interharmonic: true},
    41 : { freq: 41, mag: 0.058059, phase: -54.9224, sequence: Processing.data.SEQ.POS, interharmonic: true},
    42 : { freq: 42, mag: 0.01952, phase: 57.8221, sequence: Processing.data.SEQ.POS, interharmonic: true},
    43 : { freq: 43, mag: 0.054577, phase: -41.8073, sequence: Processing.data.SEQ.POS, interharmonic: true},
    44 : { freq: 44, mag: 0.073091, phase: 45.8447, sequence: Processing.data.SEQ.POS, interharmonic: true},
    45 : { freq: 45, mag: 0.057998, phase: -172.2061, sequence: Processing.data.SEQ.POS, interharmonic: true},
    46 : { freq: 46, mag: 0.037113, phase: 147.8052, sequence: Processing.data.SEQ.POS, interharmonic: true},
    47 : { freq: 47, mag: 0.049127, phase: 108.2011, sequence: Processing.data.SEQ.POS, interharmonic: true},
    48 : { freq: 48, mag: 0.046677, phase: 88.5051, sequence: Processing.data.SEQ.POS, interharmonic: true},
    49 : { freq: 49, mag: 0.48789, phase: 112.7206, sequence: Processing.data.SEQ.POS, interharmonic: true},
    51 : { freq: 51, mag: 0.57059, phase: -42.0097, sequence: Processing.data.SEQ.POS, interharmonic: true},
    52 : { freq: 52, mag: 0.040695, phase: 42.2205, sequence: Processing.data.SEQ.POS, interharmonic: true},
    53 : { freq: 53, mag: 0.044506, phase: 27.1781, sequence: Processing.data.SEQ.POS, interharmonic: true},
    54 : { freq: 54, mag: 0.047118, phase: 10.8186, sequence: Processing.data.SEQ.POS, interharmonic: true},
    55 : { freq: 55, mag: 0.034022, phase: -80.9749, sequence: Processing.data.SEQ.POS, interharmonic: true},
    56 : { freq: 56, mag: 0.06345, phase: -90.4936, sequence: Processing.data.SEQ.POS, interharmonic: true},
    57 : { freq: 57, mag: 0.12316, phase: -17.41, sequence: Processing.data.SEQ.POS, interharmonic: true},
    58 : { freq: 58, mag: 0.082121, phase: -98.0234, sequence: Processing.data.SEQ.POS, interharmonic: true},
    59 : { freq: 59, mag: 0.032176, phase: 109.6019, sequence: Processing.data.SEQ.POS, interharmonic: true},
    60 : { freq: 60, mag: 0.020629, phase: 174.9975, sequence: Processing.data.SEQ.POS, interharmonic: true},
    61 : { freq: 61, mag: 0.02493, phase: -169.2029, sequence: Processing.data.SEQ.POS, interharmonic: true},
    62 : { freq: 62, mag: 0.033883, phase: 12.8391, sequence: Processing.data.SEQ.POS, interharmonic: true},
    63 : { freq: 63, mag: 0.021714, phase: -148.6522, sequence: Processing.data.SEQ.POS, interharmonic: true},
    64 : { freq: 64, mag: 0.011624, phase: 108.7529, sequence: Processing.data.SEQ.POS, interharmonic: true},
    65 : { freq: 65, mag: 0.016707, phase: 176.0922, sequence: Processing.data.SEQ.POS, interharmonic: true},
    66 : { freq: 66, mag: 0.014014, phase: -155.8993, sequence: Processing.data.SEQ.POS, interharmonic: true},
    67 : { freq: 67, mag: 0.0065508, phase: 158.1834, sequence: Processing.data.SEQ.POS, interharmonic: true},
    68 : { freq: 68, mag: 0.021814, phase: -173.4561, sequence: Processing.data.SEQ.POS, interharmonic: true},
    69 : { freq: 69, mag: 0.014618, phase: 66.1819, sequence: Processing.data.SEQ.POS, interharmonic: true},
    71 : { freq: 71, mag: 0.018623, phase: 102.1451, sequence: Processing.data.SEQ.POS, interharmonic: true},
    72 : { freq: 72, mag: 0.021434, phase: 12.2895, sequence: Processing.data.SEQ.POS, interharmonic: true},
    74 : { freq: 74, mag: 0.0070444, phase: 138.7294, sequence: Processing.data.SEQ.POS, interharmonic: true},
    76 : { freq: 76, mag: 0.0153, phase: 143.6418, sequence: Processing.data.SEQ.POS, interharmonic: true},
    77 : { freq: 77, mag: 0.012568, phase: 45.3375, sequence: Processing.data.SEQ.POS, interharmonic: true},
    79 : { freq: 79, mag: 0.011515, phase: -130.3672, sequence: Processing.data.SEQ.POS, interharmonic: true},
    80 : { freq: 80, mag: 0.012979, phase: -101.5914, sequence: Processing.data.SEQ.POS, interharmonic: true},
    81 : { freq: 81, mag: 0.012972, phase: -114.4292, sequence: Processing.data.SEQ.POS, interharmonic: true},
    82 : { freq: 82, mag: 0.01527, phase: -164.9448, sequence: Processing.data.SEQ.POS, interharmonic: true},
    84 : { freq: 84, mag: 0.01359, phase: -141.501, sequence: Processing.data.SEQ.POS, interharmonic: true},
    85 : { freq: 85, mag: 0.0095554, phase: 41.9197, sequence: Processing.data.SEQ.POS, interharmonic: true},
    86 : { freq: 86, mag: 0.0065764, phase: 158.278, sequence: Processing.data.SEQ.POS, interharmonic: true},
    91 : { freq: 91, mag: 0.011111, phase: -52.3959, sequence: Processing.data.SEQ.POS, interharmonic: true},
    92 : { freq: 92, mag: 0.017723, phase: -32.1735, sequence: Processing.data.SEQ.POS, interharmonic: true},
    93 : { freq: 93, mag: 0.0085045, phase: 174.3658, sequence: Processing.data.SEQ.POS, interharmonic: true},
    95 : { freq: 95, mag: 0.0098205, phase: 160.4085, sequence: Processing.data.SEQ.POS, interharmonic: true},
    96 : { freq: 96, mag: 0.0076595, phase: 63.5921, sequence: Processing.data.SEQ.POS, interharmonic: true},
    98 : { freq: 98, mag: 0.0097552, phase: 175.7888, sequence: Processing.data.SEQ.POS, interharmonic: true},
    99 : { freq: 99, mag: 0.019218, phase: 96.0593, sequence: Processing.data.SEQ.POS, interharmonic: true},
    101 : { freq: 101, mag: 0.032825, phase: -58.7883, sequence: Processing.data.SEQ.POS, interharmonic: true},
    102 : { freq: 102, mag: 0.012363, phase: 58.4575, sequence: Processing.data.SEQ.POS, interharmonic: true},
    103 : { freq: 103, mag: 0.0061099, phase: -92.1005, sequence: Processing.data.SEQ.POS, interharmonic: true},
    107 : { freq: 107, mag: 0.01298, phase: -73.6174, sequence: Processing.data.SEQ.POS, interharmonic: true},
    108 : { freq: 108, mag: 0.0062049, phase: 64.8642, sequence: Processing.data.SEQ.POS, interharmonic: true},
    109 : { freq: 109, mag: 0.017213, phase: 10.0249, sequence: Processing.data.SEQ.POS, interharmonic: true},
    110 : { freq: 110, mag: 0.015574, phase: -31.8263, sequence: Processing.data.SEQ.POS, interharmonic: true},
    111 : { freq: 111, mag: 0.011927, phase: 36.9498, sequence: Processing.data.SEQ.POS, interharmonic: true},
    112 : { freq: 112, mag: 0.011748, phase: 90.1872, sequence: Processing.data.SEQ.POS, interharmonic: true},
    113 : { freq: 113, mag: 0.014487, phase: 30.0719, sequence: Processing.data.SEQ.POS, interharmonic: true},
    114 : { freq: 114, mag: 0.015889, phase: 18.6453, sequence: Processing.data.SEQ.POS, interharmonic: true},
    115 : { freq: 115, mag: 0.0068974, phase: 30.0854, sequence: Processing.data.SEQ.POS, interharmonic: true},
    116 : { freq: 116, mag: 0.0071158, phase: 4.2552, sequence: Processing.data.SEQ.POS, interharmonic: true},
    117 : { freq: 117, mag: 0.012427, phase: -150.2666, sequence: Processing.data.SEQ.POS, interharmonic: true},
    118 : { freq: 118, mag: 0.014571, phase: 79.0452, sequence: Processing.data.SEQ.POS, interharmonic: true},
    119 : { freq: 119, mag: 0.011424, phase: 178.6162, sequence: Processing.data.SEQ.POS, interharmonic: true},
    120 : { freq: 120, mag: 0.0060527, phase: -52.3677, sequence: Processing.data.SEQ.POS, interharmonic: true},
    121 : { freq: 121, mag: 0.0060621, phase: 169.6532, sequence: Processing.data.SEQ.POS, interharmonic: true},
    122 : { freq: 122, mag: 0.0059387, phase: -55.2784, sequence: Processing.data.SEQ.POS, interharmonic: true},
    124 : { freq: 124, mag: 0.012557, phase: 139.1558, sequence: Processing.data.SEQ.POS, interharmonic: true},
    125 : { freq: 125, mag: 0.012287, phase: -16.3098, sequence: Processing.data.SEQ.POS, interharmonic: true},
    128 : { freq: 128, mag: 0.0085037, phase: -31.1662, sequence: Processing.data.SEQ.POS, interharmonic: true},
    129 : { freq: 129, mag: 0.0078048, phase: -101.6165, sequence: Processing.data.SEQ.POS, interharmonic: true},
    131 : { freq: 131, mag: 0.0054118, phase: -134.7643, sequence: Processing.data.SEQ.POS, interharmonic: true},
    132 : { freq: 132, mag: 0.0081124, phase: -68.7907, sequence: Processing.data.SEQ.POS, interharmonic: true},
    135 : { freq: 135, mag: 0.00799, phase: 81.3976, sequence: Processing.data.SEQ.POS, interharmonic: true},
    136 : { freq: 136, mag: 0.011406, phase: 101.8339, sequence: Processing.data.SEQ.POS, interharmonic: true},
    137 : { freq: 137, mag: 0.005572, phase: 69.7635, sequence: Processing.data.SEQ.POS, interharmonic: true},
    138 : { freq: 138, mag: 0.0051451, phase: -176.4712, sequence: Processing.data.SEQ.POS, interharmonic: true},
    139 : { freq: 139, mag: 0.0090066, phase: 123.5568, sequence: Processing.data.SEQ.POS, interharmonic: true},
    141 : { freq: 141, mag: 0.0060836, phase: 152.0395, sequence: Processing.data.SEQ.POS, interharmonic: true},
    142 : { freq: 142, mag: 0.014038, phase: 97.5435, sequence: Processing.data.SEQ.POS, interharmonic: true},
    143 : { freq: 143, mag: 0.019454, phase: -164.6425, sequence: Processing.data.SEQ.POS, interharmonic: true},
    144 : { freq: 144, mag: 0.016448, phase: -43.853, sequence: Processing.data.SEQ.POS, interharmonic: true},
    145 : { freq: 145, mag: 0.0056856, phase: 73.5623, sequence: Processing.data.SEQ.POS, interharmonic: true},
    146 : { freq: 146, mag: 0.009614, phase: 82.6247, sequence: Processing.data.SEQ.POS, interharmonic: true},
    147 : { freq: 147, mag: 0.01514, phase: -99.2603, sequence: Processing.data.SEQ.POS, interharmonic: true},
    148 : { freq: 148, mag: 0.0099706, phase: -83.1403, sequence: Processing.data.SEQ.POS, interharmonic: true},
    149 : { freq: 149, mag: 0.026364, phase: 62.2912, sequence: Processing.data.SEQ.POS, interharmonic: true},
    151 : { freq: 151, mag: 0.022705, phase: -8.1028, sequence: Processing.data.SEQ.POS, interharmonic: true},
    152 : { freq: 152, mag: 0.0057865, phase: 44.5379, sequence: Processing.data.SEQ.POS, interharmonic: true},
    156 : { freq: 156, mag: 0.0087911, phase: -94.8798, sequence: Processing.data.SEQ.POS, interharmonic: true},
    157 : { freq: 157, mag: 0.011865, phase: -116.2354, sequence: Processing.data.SEQ.POS, interharmonic: true},
    159 : { freq: 159, mag: 0.0052414, phase: 118.6716, sequence: Processing.data.SEQ.POS, interharmonic: true},
    160 : { freq: 160, mag: 0.0073564, phase: 96.0918, sequence: Processing.data.SEQ.POS, interharmonic: true},
    161 : { freq: 161, mag: 0.0097409, phase: 156.4122, sequence: Processing.data.SEQ.POS, interharmonic: true},
    164 : { freq: 164, mag: 0.0060764, phase: -141.16, sequence: Processing.data.SEQ.POS, interharmonic: true},
    165 : { freq: 165, mag: 0.0075848, phase: -114.3981, sequence: Processing.data.SEQ.POS, interharmonic: true},
    167 : { freq: 167, mag: 0.0052568, phase: -144.3257, sequence: Processing.data.SEQ.POS, interharmonic: true},
    170 : { freq: 170, mag: 0.0073668, phase: -3.685, sequence: Processing.data.SEQ.POS, interharmonic: true},
    171 : { freq: 171, mag: 0.0069721, phase: -110.4317, sequence: Processing.data.SEQ.POS, interharmonic: true},
    172 : { freq: 172, mag: 0.0068026, phase: 142.521, sequence: Processing.data.SEQ.POS, interharmonic: true},
    179 : { freq: 179, mag: 0.0073313, phase: -144.3277, sequence: Processing.data.SEQ.POS, interharmonic: true},
    180 : { freq: 180, mag: 0.006199, phase: -164.1004, sequence: Processing.data.SEQ.POS, interharmonic: true},
    182 : { freq: 182, mag: 0.0081326, phase: 20.6263, sequence: Processing.data.SEQ.POS, interharmonic: true},
    183 : { freq: 183, mag: 0.0080673, phase: 98.0982, sequence: Processing.data.SEQ.POS, interharmonic: true},
    186 : { freq: 186, mag: 0.0078883, phase: -67.7016, sequence: Processing.data.SEQ.POS, interharmonic: true},
    187 : { freq: 187, mag: 0.0062284, phase: -115.5663, sequence: Processing.data.SEQ.POS, interharmonic: true},
    189 : { freq: 189, mag: 0.005617, phase: -57.976, sequence: Processing.data.SEQ.POS, interharmonic: true},
    192 : { freq: 192, mag: 0.0050396, phase: -104.3476, sequence: Processing.data.SEQ.POS, interharmonic: true},
    193 : { freq: 193, mag: 0.0079752, phase: 3.6549, sequence: Processing.data.SEQ.POS, interharmonic: true},
    199 : { freq: 199, mag: 0.011147, phase: 146.2912, sequence: Processing.data.SEQ.POS, interharmonic: true},
    201 : { freq: 201, mag: 0.0073778, phase: 46.4126, sequence: Processing.data.SEQ.POS, interharmonic: true},
    207 : { freq: 207, mag: 0.0081435, phase: -143.4478, sequence: Processing.data.SEQ.POS, interharmonic: true},
    208 : { freq: 208, mag: 0.0056233, phase: -39.2923, sequence: Processing.data.SEQ.POS, interharmonic: true},
    231 : { freq: 231, mag: 0.0050406, phase: -160.338, sequence: Processing.data.SEQ.POS, interharmonic: true},
    235 : { freq: 235, mag: 0.0072356, phase: 0.46185, sequence: Processing.data.SEQ.POS, interharmonic: true},
    236 : { freq: 236, mag: 0.0075864, phase: -24.5804, sequence: Processing.data.SEQ.POS, interharmonic: true},
    237 : { freq: 237, mag: 0.0054364, phase: 179.1217, sequence: Processing.data.SEQ.POS, interharmonic: true},
    238 : { freq: 238, mag: 0.0067367, phase: 112.1769, sequence: Processing.data.SEQ.POS, interharmonic: true},
    242 : { freq: 242, mag: 0.0091519, phase: -5.1654, sequence: Processing.data.SEQ.POS, interharmonic: true},
    243 : { freq: 243, mag: 0.012957, phase: 142.0012, sequence: Processing.data.SEQ.POS, interharmonic: true},
    244 : { freq: 244, mag: 0.0088083, phase: -130.4832, sequence: Processing.data.SEQ.POS, interharmonic: true},
    248 : { freq: 248, mag: 0.0058111, phase: -39.5982, sequence: Processing.data.SEQ.POS, interharmonic: true},
    249 : { freq: 249, mag: 0.010919, phase: 153.8482, sequence: Processing.data.SEQ.POS, interharmonic: true},
    251 : { freq: 251, mag: 0.0064386, phase: 150.2978, sequence: Processing.data.SEQ.POS, interharmonic: true},
    294 : { freq: 294, mag: 0.006656, phase: 76.8866, sequence: Processing.data.SEQ.POS, interharmonic: true},
    295 : { freq: 295, mag: 0.005473, phase: 42.6015, sequence: Processing.data.SEQ.POS, interharmonic: true},
    299 : { freq: 299, mag: 0.0053939, phase: -56.4164, sequence: Processing.data.SEQ.POS, interharmonic: true},
    301 : { freq: 301, mag: 0.0083401, phase: 156.9698, sequence: Processing.data.SEQ.POS, interharmonic: true},
    312 : { freq: 312, mag: 0.005207, phase: -135.0813, sequence: Processing.data.SEQ.POS, interharmonic: true},
    315 : { freq: 315, mag: 0.0051376, phase: 83.0107, sequence: Processing.data.SEQ.POS, interharmonic: true},
    320 : { freq: 320, mag: 0.0060538, phase: 52.7319, sequence: Processing.data.SEQ.POS, interharmonic: true},
    321 : { freq: 321, mag: 0.0054195, phase: 119.9347, sequence: Processing.data.SEQ.POS, interharmonic: true}
}

// the following harmonic profiles are from http://resource.npl.co.uk/waveform/
HarmonicsApartment = {
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 1.0,
        phase: -10.0,
        sequence: Processing.data.SEQ.POS
    },
    2: {
        freq: 100.0,
        interharmonic: false,
        mag: 0.0127,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    3: {
        freq: 150.0,
        interharmonic: false,
        mag: 0.042,
        phase: 120,
        sequence: Processing.data.SEQ.ZERO
    },
    5: {
        freq: 250.0,
        interharmonic: false,
        mag: 0.0444,
        phase: -160,
        sequence: Processing.data.SEQ.NEG
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.00968,
        phase: 150,
        sequence: Processing.data.SEQ.POS
    }
}
HarmonicsSwitchedMode = {
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 0.5,
        phase: 0.0,
        sequence: Processing.data.SEQ.POS
    },
    3: {
        freq: 150.0,
        interharmonic: false,
        mag: 0.405,
        phase: -180,
        sequence: Processing.data.SEQ.ZERO
    },
    5: {
        freq: 250.0,
        interharmonic: false,
        mag: 0.3,
        phase: -360,
        sequence: Processing.data.SEQ.NEG
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.185,
        phase: -540,
        sequence: Processing.data.SEQ.POS
    }
}
HarmonicsPWMDrive = {
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 1.0,
        phase: 0.0,
        sequence: Processing.data.SEQ.POS
    },
    3: {
        freq: 150.0,
        interharmonic: false,
        mag: 0.0338,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.139,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },

    9: {
        freq: 450.0,
        interharmonic: false,
        mag: 0.0066,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    11: {
        freq: 550.0,
        interharmonic: false,
        mag: 0.0711,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    13: {
        freq: 650.0,
        interharmonic: false,
        mag: 0.0311,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    17: {
        freq: 850.0,
        interharmonic: false,
        mag: 0.0301,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    19: {
        freq: 950.0,
        interharmonic: false,
        mag: 0.01501,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    }
}
HarmonicsSquare = {
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 0.6366,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    3: {
        freq: 150.0,
        interharmonic: false,
        mag: 0.2122,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    5: {
        freq: 250.0,
        interharmonic: false,
        mag: 0.127325,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.090945,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    9: {
        freq: 450.0,
        interharmonic: false,
        mag: 0.070735,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    11: {
        freq: 550.0,
        interharmonic: false,
        mag: 0.0578745,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    13: {
        freq: 650.0,
        interharmonic: false,
        mag: 0.04897,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    15: {
        freq: 750.0,
        interharmonic: false,
        mag: 0.04244,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    17: {
        freq: 850.0,
        interharmonic: false,
        mag: 0.037448,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    19: {
        freq: 950.0,
        interharmonic: false,
        mag: 0.033506,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    21: {
        freq: 1050.0,
        interharmonic: false,
        mag: 0.030315,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    23: {
        freq: 1150.0,
        interharmonic: false,
        mag: 0.027679,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    25: {
        freq: 1250.0,
        interharmonic: false,
        mag: 0.025465,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    27: {
        freq: 1350.0,
        interharmonic: false,
        mag: 0.0235785,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    29: {
        freq: 1450.0,
        interharmonic: false,
        mag: 0.0219525,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    31: {
        freq: 1550.0,
        interharmonic: false,
        mag: 0.020536,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    33: {
        freq: 1650.0,
        interharmonic: false,
        mag: 0.0192915,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    35: {
        freq: 1750.0,
        interharmonic: false,
        mag: 0.018189,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    37: {
        freq: 1850.0,
        interharmonic: false,
        mag: 0.017206,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    39: {
        freq: 1950.0,
        interharmonic: false,
        mag: 0.0163235,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    41: {
        freq: 2050.0,
        interharmonic: false,
        mag: 0.015527,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    43: {
        freq: 2150.0,
        interharmonic: false,
        mag: 0.014805,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    },
    45: {
        freq: 2250.0,
        interharmonic: false,
        mag: 0.014145,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    47: {
        freq: 2350.0,
        interharmonic: false,
        mag: 0.013545,
        phase: 0,
        sequence: Processing.data.SEQ.NEG
    },
    49: {
        freq: 2450.0,
        interharmonic: false,
        mag: 0.012992,
        phase: 0,
        sequence: Processing.data.SEQ.POS
    }
}
HarmonicsSawtooth = {
    0: {
        freq: 0.0,
        interharmonic: false,
        mag: 0.5,
        phase: 0,
        sequence: Processing.data.SEQ.ZERO
    },
    1: {
        freq: 50.0,
        interharmonic: false,
        mag: 0.31831,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    2: {
        freq: 100.0,
        interharmonic: false,
        mag: 0.15915,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    3: {
        freq: 150.0,
        interharmonic: false,
        mag: 0.1061,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    4: {
        freq: 200.0,
        interharmonic: false,
        mag: 0.07958,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    5: {
        freq: 250.0,
        interharmonic: false,
        mag: 0.063662,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    6: {
        freq: 300.0,
        interharmonic: false,
        mag: 0.053052,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    7: {
        freq: 350.0,
        interharmonic: false,
        mag: 0.045473,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    8: {
        freq: 400.0,
        interharmonic: false,
        mag: 0.039788,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    9: {
        freq: 450.0,
        interharmonic: false,
        mag: 0.035368,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    10: {
        freq: 500.0,
        interharmonic: false,
        mag: 0.031831,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    11: {
        freq: 550.0,
        interharmonic: false,
        mag: 0.028937,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    12: {
        freq: 600.0,
        interharmonic: false,
        mag: 0.026526,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    13: {
        freq: 650.0,
        interharmonic: false,
        mag: 0.02448,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    14: {
        freq: 700.0,
        interharmonic: false,
        mag: 0.022736,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    15: {
        freq: 750.0,
        interharmonic: false,
        mag: 0.0212206,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    16: {
        freq: 800.0,
        interharmonic: false,
        mag: 0.019894,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    17: {
        freq: 850.0,
        interharmonic: false,
        mag: 0.018724,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    18: {
        freq: 900.0,
        interharmonic: false,
        mag: 0.017684,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    19: {
        freq: 950.0,
        interharmonic: false,
        mag: 0.016753,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    20: {
        freq: 1000.0,
        interharmonic: false,
        mag: 0.015915,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    21: {
        freq: 1050.0,
        interharmonic: false,
        mag: 0.015157,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    22: {
        freq: 1100.0,
        interharmonic: false,
        mag: 0.014468,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    23: {
        freq: 1150.0,
        interharmonic: false,
        mag: 0.0138395,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    24: {
        freq: 1200.0,
        interharmonic: false,
        mag: 0.013267,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    25: {
        freq: 1250.0,
        interharmonic: false,
        mag: 0.012733,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    26: {
        freq: 1300.0,
        interharmonic: false,
        mag: 0.01224,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    27: {
        freq: 1350.0,
        interharmonic: false,
        mag: 0.011789,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    28: {
        freq: 1400.0,
        interharmonic: false,
        mag: 0.0113682,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    29: {
        freq: 1450.0,
        interharmonic: false,
        mag: 0.010976,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    30: {
        freq: 1500.0,
        interharmonic: false,
        mag: 0.0106133,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    31: {
        freq: 1550.0,
        interharmonic: false,
        mag: 0.010268,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    32: {
        freq: 1600.0,
        interharmonic: false,
        mag: 0.009947,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    33: {
        freq: 1650.0,
        interharmonic: false,
        mag: 0.009646,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    34: {
        freq: 1700.0,
        interharmonic: false,
        mag: 0.009362,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    35: {
        freq: 1750.0,
        interharmonic: false,
        mag: 0.009095,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    36: {
        freq: 1800.0,
        interharmonic: false,
        mag: 0.008842,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    37: {
        freq: 1850.0,
        interharmonic: false,
        mag: 0.008602,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    38: {
        freq: 1900.0,
        interharmonic: false,
        mag: 0.008376,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    39: {
        freq: 1950.0,
        interharmonic: false,
        mag: 0.008161,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    40: {
        freq: 2000.0,
        interharmonic: false,
        mag: 0.007957,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    41: {
        freq: 2050.0,
        interharmonic: false,
        mag: 0.007763,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    42: {
        freq: 2100.0,
        interharmonic: false,
        mag: 0.0075788,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    43: {
        freq: 2150.0,
        interharmonic: false,
        mag: 0.007403,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    44: {
        freq: 2200.0,
        interharmonic: false,
        mag: 0.0072345,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    45: {
        freq: 2250.0,
        interharmonic: false,
        mag: 0.0070735,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    46: {
        freq: 2300.0,
        interharmonic: false,
        mag: 0.0069197,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    47: {
        freq: 2350.0,
        interharmonic: false,
        mag: 0.0067725,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    },
    48: {
        freq: 2400.0,
        interharmonic: false,
        mag: 0.0066314,
        phase: 180,
        sequence: Processing.data.SEQ.ZERO
    },
    49: {
        freq: 2450.0,
        interharmonic: false,
        mag: 0.0064961,
        phase: 180,
        sequence: Processing.data.SEQ.POS
    },
    50: {
        freq: 2500.0,
        interharmonic: false,
        mag: 0.006366,
        phase: 180,
        sequence: Processing.data.SEQ.NEG
    }
}

// from: "Grid Impacts Due to Increased Penetration of Newer Harmonic Sources"
//       http://dx.doi.org/10.1109/TIA.2015.2464175
HarmonicsLowPFLighting = {
    1 : {
        freq: 50.0,
        mag : 1.0,
        phase: -333,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    3 : {
        freq: 150.0,
        mag : 0.75,
        phase: -111,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    5 : {
        freq: 250.0,
        mag : 0.63,
        phase: -242,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    7 : {
        freq: 350.0,
        mag : 0.52,
        phase: -171,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    9 : {
        freq: 450.0,
        mag : 0.41,
        phase: -140,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    11 : {
        freq: 550.0,
        mag : 0.30,
        phase: -233,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    13 : {
        freq: 650.0,
        mag : 0.18,
        phase: -126,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    }
};
HarmonicsEVChargers = {
    1 : {
        freq: 50.0,
        mag : 1.0,
        phase: 0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    3 : {
        freq: 150.0,
        mag : 0.0892,
        phase: -129,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    5 : {
        freq: 250.0,
        mag : 0.0039,
        phase: 67,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    7 : {
        freq: 350.0,
        mag : 0.0026,
        phase: -157,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    9 : {
        freq: 450.0,
        mag : 0.0045,
        phase: 166,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    11 : {
        freq: 550.0,
        mag : 0.0051,
        phase: 172,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    13 : {
        freq: 650.0,
        mag : 0.0045,
        phase: 160,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    }
};
HarmonicsModernEntertainment = {
    1 : {
        freq: 50.0,
        mag : 1.0,
        phase: 0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    3 : {
        freq: 150.0,
        mag : 0.30,
        phase: 187,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    5 : {
        freq: 250.0,
        mag : 0.12,
        phase: 346,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    7 : {
        freq: 350.0,
        mag : 0.13,
        phase: 164,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    9 : {
        freq: 450.0,
        mag : 0.08,
        phase: 315,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    11 : {
        freq: 550.0,
        mag : 0.05,
        phase: 124,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    13 : {
        freq: 650.0,
        mag : 0.04,
        phase: 276,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    }
};
HarmonicsHVAC = {
    1 : {
        freq: 50.0,
        mag : 1.0,
        phase: 0,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    3 : {
        freq: 150.0,
        mag : 0.049,
        phase: 132,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    5 : {
        freq: 250.0,
        mag : 0.043,
        phase: 113,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    7 : {
        freq: 350.0,
        mag : 0.054,
        phase: 276,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    },
    9 : {
        freq: 450.0,
        mag : 0.056,
        phase: 7,
        sequence: Processing.data.SEQ.ZERO,
        interharmonic: false
    },
    11 : {
        freq: 550.0,
        mag : 0.023,
        phase: 186,
        sequence: Processing.data.SEQ.NEG,
        interharmonic: false
    },
    13 : {
        freq: 650.0,
        mag : 0.024,
        phase: 12,
        sequence: Processing.data.SEQ.POS,
        interharmonic: false
    }
};