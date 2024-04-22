*** Settings ***
Documentation   Pierwsze testy w Robot Framework

*** Variables ***
${LOG_TEXT}     Text loggera

*** Test Cases ***
Pierwszy test
    Log    Hej! To jest pierwszy test!

Drugi test
    [Documentation]     Dokumentacja drugiego testu
    Log    Kolejny test
    Fail   Mamy buga

Trzeci test
    Log    ${LOG_TEXT}