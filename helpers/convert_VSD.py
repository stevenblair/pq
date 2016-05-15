# data from https://www.calvin.edu/~pribeiro/IEEE/ieee_cd/chapters/pdffiles/c3pdf.pdf
#       and http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=484131

with open('VSD-alternate.tsv', 'rb') as f:
    content = f.readlines()
    for i, line in enumerate(content):
        values = line.replace('\n', '').replace('\r', '').split('\t')
        harmonic = int(values[0])
        mag = float(values[1]) / 100.0
        ang = values[2]

        seq = 'POS'
        if (harmonic % 3) == 2:
            seq = 'NEG'
        elif (harmonic % 3) == 0:
            seq = 'ZERO'

        print '    ' + str(harmonic) + ': {'
        print '        freq: ' + str(50.0 * harmonic) + ','
        print '        interharmonic: false,'
        print '        mag: ' + str(mag) + ','
        print '        phase: ' + ang + ','
        print '        sequence: Processing.data.SEQ.' + seq
        if i == len(content) - 1:
            print '    }'
        else:
            print '    },'