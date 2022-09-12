import PySimpleGUI as sg
from calculations import calc

col = [
    [sg.B('7', size=(3,2), font='bold'), sg.B('8', size=(3,2), font='bold'), sg.B('9', size=(3,2), font='bold')],
    [sg.B('4', size=(3,2), font='bold'), sg.B('5', size=(3,2), font='bold'), sg.B('6', size=(3,2), font='bold')],
    [sg.B('1', size=(3,2), font='bold'), sg.B('2', size=(3,2), font='bold'), sg.B('3', size=(3,2), font='bold')],
    [sg.B('()', size=(3,2), font='bold', key='-PAREN-'), sg.B('0', size=(3,2), font='bold'), sg.B('.', size=(3,2), font='bold', key='-DOT-')],
]

col_1 = [
    [sg.B('*', size=(3,2), font='bold', key='*')],
    [sg.B('-', size=(3,2), font='bold', key='-')],
    [sg.B('+', size=(3,5), font='bold', key='+')],
]

col_2 = [
    [sg.B('/', size=(3,2), font='bold', key='/')],
    [sg.B('C', size=(3,2), font='bold', key='-CLEAR-')],
    [sg.B('CE', size=(3,2), font='bold', key='-CLEAR_EVR-')],
    [sg.B('=', size=(3,2), font='bold', key='-EQUAL-')],
]

layout = [
    [sg.I(font=(None, 28), size=(15,1), key='-INPUT-')],
    [sg.Col(col), sg.VerticalSeparator(), sg.Col(col_1), sg.Col(col_2)],
]

window = sg.Window('Calculator', layout)

nums = [str(i) for i in range(10)]
operators = ('*', '-', '+', '/')
history = ''


def check_operator():
    global history
    history += event
    window['-INPUT-'].update(history)
    oper = event
    x = history[:-1]
    index = history.index(oper)
    return x, oper, index


def equal(x, oper, index):
    global history
    try:
        y = history[index + 1:]
    except NameError:
        pass
    else:
        res = calc(float(x), oper, float(y))
        window['-INPUT-'].update(res)
        history = str(res)


while True:
    event, values = window.read()
    match event:
        case sg.WIN_CLOSED:
            window.close()
            break
        case event if event in nums:
            history += event
            window['-INPUT-'].update(history)
        case event if event in operators:
            x, oper, index = check_operator()
        case '-EQUAL-':
            equal(x, oper, index)
    print(event, values)