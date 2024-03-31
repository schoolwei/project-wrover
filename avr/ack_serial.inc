; Wei Heng Jiang
; serial.inc

.equ FCPU = 1000000
.equ SERIAL_BAUD = 2400
.equ SERIAL_UBRR = (FCPU / 16 / SERIAL_BAUD) - 1
.equ SERIAL_ACK = $06
.equ SERIAL_NACK = $15

.dseg

SERIAL_RX_HEAD: .byte 1
SERIAL_RX_TAIL: .byte 1
SERIAL_RX_BUFFER: .byte 128

SERIAL_TX_HEAD: .byte 1
SERIAL_TX_TAIL: .byte 1
SERIAL_TX_BUFFER: .byte 128

SERIAL_WRITING: .byte 1

.cseg

serial_init:
	push r16
	ldi r16, high(SERIAL_UBRR)
	out UBRRH, r16
	ldi r16, low(SERIAL_UBRR)
	out UBRRL, r16

	ldi r16, (1 << RXEN) | (1 << TXEN) | (1 << RXCIE)
	out UCSRB, r16

	ldi r16, (1 << URSEL) | (1 << UPM1) | (1 << UCSZ1) | (1 << UCSZ0) ; even parity, 8-bit
	out UCSRC, r16

    clr r16
    sts SERIAL_RX_HEAD, r16
    sts SERIAL_RX_TAIL, r16
	sts SERIAL_TX_HEAD, r16
	sts SERIAL_TX_TAIL, r16
	sts SERIAL_WRITING, r16

	pop r16
	ret

serial_write:
	push XL
	push XH

	lds XL, SERIAL_TX_HEAD
	andi XL, 0x7F
	clr XH

	subi XL, low(-SERIAL_TX_BUFFER)
	sbci XH, high(-SERIAL_TX_BUFFER)

	st X, r16

	lds r16, SERIAL_TX_HEAD
	inc r16
	sts SERIAL_TX_HEAD, r16

	pop XH
	pop XL
	ret

serial_update:
	sbis UCSRA, UDRE
	rjmp serial_update_ret ; data register busy
    push XL
    push XH

	lds XH, SERIAL_WRITING
	cpi XH, 0
	breq serial_update_write
	inc XH
	sts SERIAL_WRITING, XH
	rjmp serial_update_end

serial_update_write:
    lds XL, SERIAL_TX_TAIL
	lds XH, SERIAL_TX_HEAD
	cp XL, XH
	breq serial_update_end ; buffer is empty
    
	andi XL, 0x7F
    clr XH

    subi XL, low(-SERIAL_TX_BUFFER)
    sbci XH, high(-SERIAL_TX_BUFFER)

	; do not increment tail, only when ACK is received

    ld XH, X
	out UDR, XH
	ldi XH, 1
	sts SERIAL_WRITING, XH

serial_update_end:
    pop XH
    pop XL
serial_update_ret:
	ret


serial_is_empty:
	push r16
	push r17
	lds r16, SERIAL_RX_TAIL
	lds r17, SERIAL_RX_HEAD
	cp r16, r17
	pop r17
	pop r16
	ret

serial_read:
    push XL
    push XH

    lds XL, SERIAL_RX_TAIL
    andi XL, 0x7F
    clr XH

    subi XL, low(-SERIAL_RX_BUFFER)
    sbci XH, high(-SERIAL_RX_BUFFER)

	lds r16, SERIAL_RX_TAIL
	inc r16
	sts SERIAL_RX_TAIL, r16

    ld r16, X

    pop XH
    pop XL
	ret


serial_rxc:
	push XL
	in XL, SREG
	push XL
	push XH
	push r16

	lds r16, SERIAL_WRITING
	cpi r16, 0
	brne serial_rxc_feedback
	
	lds XL, SERIAL_RX_HEAD
	andi XL, 0x7F
	clr XH

	subi XL, low(-SERIAL_RX_BUFFER)
	sbci XH, high(-SERIAL_RX_BUFFER)

	sbic UCSRA, PE
	rjmp serial_rxc_end

serial_rxc_ok:
	in r16, UDR
	st X, r16
	ldi r16, SERIAL_ACK
	out UDR, r16

	lds r16, SERIAL_RX_HEAD
	inc r16
	sts SERIAL_RX_HEAD, r16
	rjmp serial_rxc_end

serial_rxc_feedback:
	clr r16
	sts SERIAL_WRITING, r16
	lds r16, SERIAL_TX_TAIL
	inc r16
	sts SERIAL_TX_TAIL, r16

serial_rxc_end:
	pop r16
	pop XH
	pop XL
	out SREG, XL
	pop XL
	reti