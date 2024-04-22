*** Settings ***
Documentation   Pierwsze testy w Robot Framework // First tests in the Robot Framework

*** Variables ***
${LOG_TEXT}     Text loggera

*** Test Cases ***
Pierwszy test
    Log    Hey, this is the first test! // Hej! To jest pierwszy test!

Drugi test
    [Documentation]     Dokumentacja drugiego testu  //Documentation of the second test
    Log    Kolejny test // 
    Fail   Mamy buga // We have a bug

Trzeci test
    Log    ${LOG_TEXT}